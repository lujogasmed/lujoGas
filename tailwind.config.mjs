/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary:         '#1A1A2E',
        secondary:       '#2563EB',
        tertiary:        '#F97316',
        neutral:         '#D4D0C4',
        background:      '#F8F7F4',
        'bg-alt':        '#EEEAE0',
        surface:         '#FFFFFF',
        muted:           '#6B7280',
        whatsapp:        '#25D366',
        'whatsapp-dark': '#1DA851',
        'hero-bg':       '#07090d',
        'hero-surface':  '#0d1018',
        'blue-bright':   '#6aaaff',
        'blue-base':     '#3d7fff',
        'blue-dim':      'rgba(61,127,255,0.12)',
        'hero-muted':    '#5a6678',
        'hero-muted2':   '#3a4455',
        'hero-text':     '#e8edf5',
        'hero-amber':    '#ff8c2a',
        'map-light':     '#1E2240',
        'map-dark':      '#12122a',
        flame: {
          cyan:  '#38B6FF',
          blue:  '#1D82FF',
          navy:  '#1E3A8A',
          light: '#93C5FD',
          mid:   '#60A5FA',
          pale:  '#DBEAFE',
          ice:   '#E0F2FE',
          glow:  '#93D2FF',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'sans-serif'],
        mono:    ['Rajdhani', 'monospace'],
      },
      keyframes: {
        'h-enter': {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'h-enter': 'h-enter 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
