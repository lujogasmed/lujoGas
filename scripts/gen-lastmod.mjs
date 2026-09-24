/**
 * Genera src/data/lastmod.json con la fecha real de última modificación por URL.
 *
 * Por qué: @astrojs/sitemap con `lastmod: new Date()` estampa el timestamp del build
 * en las 49 URLs. Google detecta que el valor no se corresponde con cambios reales,
 * deja de confiar en él y pierde la señal de priorización de rastreo. Con 31 URLs en
 * "Descubierta: actualmente sin indexar", esa señal es justamente la que hace falta.
 *
 * Fuentes de verdad, por orden:
 *   - Artículos del blog (content collection): updatedDate ?? publishDate del frontmatter
 *   - Páginas .astro: fecha del último commit que tocó el archivo
 *   - Páginas de zona: máximo entre el commit de la plantilla y el de src/data/zonas.ts
 */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://lujogas.com.co';
const root = process.cwd();

const gitDate = (path) => {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${path}"`, { cwd: root }).toString().trim();
    return out || null;
  } catch {
    return null;
  }
};

const iso = (d) => new Date(d).toISOString();
const newest = (...dates) => dates.filter(Boolean).sort().at(-1);

// Valores ya versionados: Vercel clona con historial superficial, así que `git log`
// puede devolver vacío para archivos que no estén en los últimos commits. En ese caso
// conservamos la fecha previa en lugar de colapsar todas las URLs al mismo timestamp.
const outFile = join(root, 'src/data/lastmod.json');
const previo = existsSync(outFile) ? JSON.parse(readFileSync(outFile, 'utf8')) : {};

const lastmod = {};
const fallback = gitDate('.') ?? new Date().toISOString();
const resolver = (url, ...candidatos) => iso(newest(...candidatos) ?? previo[url] ?? fallback);

// ── Blog: content collection ────────────────────────────────────────────────
const blogDir = join(root, 'src/content/blog');
for (const file of readdirSync(blogDir).filter((f) => f.endsWith('.md'))) {
  const raw = readFileSync(join(blogDir, file), 'utf8');
  const fm = raw.split(/^---$/m)[1] ?? '';
  const pick = (key) => fm.match(new RegExp(`^${key}:\\s*"?([0-9]{4}-[0-9]{2}-[0-9]{2})"?`, 'm'))?.[1];
  const slug = fm.match(/^slug:\s*"?([^"\n]+)"?/m)?.[1]?.trim();
  if (!slug) continue;
  const date = pick('updatedDate') ?? pick('publishDate');
  const git = gitDate(`src/content/blog/${file}`);
  // La fecha editorial manda; el commit solo desempata si es posterior al contenido.
  const url = `${SITE}/blog/${slug}`;
  lastmod[url] = resolver(url, date ? `${date}T12:00:00.000Z` : null, git);
}

// ── Páginas .astro ──────────────────────────────────────────────────────────
const walk = (dir, base = '') => {
  for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) { walk(`${dir}/${entry.name}`, rel); continue; }
    if (!entry.name.endsWith('.astro')) continue;
    if (entry.name === '404.astro') continue;

    const gitPath = `${dir}/${entry.name}`;
    const git = gitDate(gitPath);

    if (entry.name.includes('[')) continue; // rutas dinámicas: se resuelven aparte
    let route = rel.replace(/\.astro$/, '');
    route = route === 'index' ? '' : route.replace(/\/index$/, '');
    const url = `${SITE}${route ? '/' + route : '/'}`;
    lastmod[url] = resolver(url, git);
  }
};
walk('src/pages');

// ── Páginas de zona (ruta dinámica) ─────────────────────────────────────────
const zonasFile = 'src/data/zonas.ts';
if (existsSync(join(root, zonasFile))) {
  const zonasSrc = readFileSync(join(root, zonasFile), 'utf8');
  const tplDate = gitDate('src/pages/instalacion-gas-[zona].astro');
  const dataDate = gitDate(zonasFile);
  const detalleDate = gitDate('src/data/zonasDetalle.ts');
  for (const m of zonasSrc.matchAll(/^\s*slug:\s*'([^']+)'/gm)) {
    const url = `${SITE}/instalacion-gas-${m[1]}`;
    lastmod[url] = resolver(url, tplDate, dataDate, detalleDate);
  }
}

writeFileSync(outFile, JSON.stringify(lastmod, null, 2) + '\n');
console.log(`[lastmod] ${Object.keys(lastmod).length} URLs con fecha real de modificación`);
