import { useEffect, useState } from 'react';

interface Props {
  href: string;
}

export default function WhatsAppFloat({ href }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <a
      id="floatWp"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className={`fixed bottom-[22px] right-[22px] z-[60] w-[60px] h-[60px] min-w-[60px] min-h-[60px] rounded-full bg-whatsapp grid place-items-center text-white shadow-[0_10px_28px_theme(colors.whatsapp/35%)] transition-[opacity,transform] duration-[400ms] wa-pulse ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
    >
      <span
        className="absolute right-[74px] bg-surface text-primary py-2 px-[14px] rounded-lg text-[13px] whitespace-nowrap border border-neutral/[0.12] pointer-events-none"
        aria-hidden="true"
      >
        Escríbenos — respondemos en minutos
      </span>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11 11 0 0 0 3.6 17.4L2 22l4.7-1.5A11 11 0 1 0 20.5 3.5Zm-8.5 18a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-2.8.9.9-2.7-.2-.3A9.4 9.4 0 1 1 12 21.5Zm5.4-7c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2-.8 1-.9 1.2-.3.2-.6 0a7.7 7.7 0 0 1-2.3-1.4 8.4 8.4 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.4-.5a2 2 0 0 0 .3-.5.4.4 0 0 0 0-.5c0-.1-.7-1.7-1-2.3s-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.6 6.2 6.2 0 0 0 1.3 3.3 14.2 14.2 0 0 0 5.4 4.8c.8.3 1.4.5 1.9.7a4.6 4.6 0 0 0 2.1.1 3.4 3.4 0 0 0 2.2-1.5 2.7 2.7 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.3Z"/>
      </svg>
    </a>
  );
}
