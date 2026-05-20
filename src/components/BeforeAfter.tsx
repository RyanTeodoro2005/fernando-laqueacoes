import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  before: string;
  after: string;
  label: string;
}

const placeholder = (label: string, type: 'antes' | 'depois') => {
  const bg = type === 'antes' ? '#5a3826' : '#1a1612';
  const accent = type === 'antes' ? '#8b5a3c' : '#c9a961';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
    <rect width='800' height='600' fill='${bg}'/>
    <defs><radialGradient id='g'><stop offset='0%' stop-color='${accent}' stop-opacity='0.2'/><stop offset='100%' stop-color='#0d0b08' stop-opacity='0.7'/></radialGradient></defs>
    <rect width='800' height='600' fill='url(#g)'/>
    <text x='400' y='290' text-anchor='middle' fill='${accent}' font-family='serif' font-size='32' font-style='italic'>${label}</text>
    <text x='400' y='330' text-anchor='middle' fill='${accent}' fill-opacity='0.7' font-family='sans-serif' font-size='14' letter-spacing='6'>${type.toUpperCase()}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const onErr = (label: string, type: 'antes' | 'depois') => (e: React.SyntheticEvent<HTMLImageElement>) => {
  const t = e.currentTarget;
  if (!t.dataset.fallback) {
    t.dataset.fallback = '1';
    t.src = placeholder(label, type);
  }
};

export default function BeforeAfter({ before, after, label }: Props) {
  const [pos, setPos] = useState(50);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  const start = (clientX: number) => {
    dragging.current = true;
    setActive(true);
    update(clientX);
  };

  const end = () => {
    dragging.current = false;
    setActive(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      ref={ref}
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border transition-colors duration-300 select-none group touch-none ${
        active ? 'border-gold/60 cursor-grabbing' : 'border-cream-50/10 cursor-grab'
      }`}
      onMouseDown={(e) => start(e.clientX)}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={end}
      onMouseLeave={end}
      onTouchStart={(e) => start(e.touches[0].clientX)}
      onTouchMove={(e) => {
        if (dragging.current) {
          e.preventDefault();
          update(e.touches[0].clientX);
        }
      }}
      onTouchEnd={end}
    >
      <img
        src={after}
        alt={`${label} — depois`}
        onError={onErr(label, 'depois')}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none transition-[clip-path] duration-100"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${label} — antes`}
          onError={onErr(label, 'antes')}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.25em] bg-ink-900/80 text-cream-50 backdrop-blur pointer-events-none">
        Antes
      </span>
      <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.25em] bg-gold text-ink-900 font-medium pointer-events-none">
        Depois
      </span>

      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gold pointer-events-none shadow-[0_0_20px_rgba(201,169,97,0.6)] transition-[left] duration-100"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gold border-[3px] border-ink-900 grid place-items-center shadow-2xl shadow-gold/50 group-hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-ink-900" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18L3 12L9 6M15 6L21 12L15 18" />
          </svg>
        </div>
      </div>

      <div className="image-overlay-dark force-light-text absolute bottom-0 inset-x-0 p-5 md:p-6 bg-gradient-to-t from-ink-900/95 via-ink-900/60 to-transparent pointer-events-none">
        <h4 className="text-display text-xl md:text-2xl font-light leading-tight">{label}</h4>
        <p className="text-[10px] uppercase tracking-[0.25em] text-cream-50/40 mt-1.5">
          Clique e arraste para revelar
        </p>
      </div>
    </motion.div>
  );
}
