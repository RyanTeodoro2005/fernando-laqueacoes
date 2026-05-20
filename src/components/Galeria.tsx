import { motion } from 'framer-motion';
import BeforeAfter from './BeforeAfter';

const placeholder = (label: string, tone: 'wood' | 'lacquer' = 'lacquer') => {
  const bg = tone === 'wood' ? '#5a3826' : '#1a1612';
  const accent = '#c9a961';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
    <defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='${bg}'/><stop offset='100%' stop-color='#0d0b08'/>
    </linearGradient></defs>
    <rect width='800' height='600' fill='url(#g)'/>
    <circle cx='400' cy='300' r='120' fill='none' stroke='${accent}' stroke-opacity='0.3' stroke-width='1'/>
    <circle cx='400' cy='300' r='80' fill='none' stroke='${accent}' stroke-opacity='0.4' stroke-width='1'/>
    <text x='400' y='305' text-anchor='middle' fill='${accent}' font-family='serif' font-size='28' font-style='italic'>${label}</text>
    <text x='400' y='340' text-anchor='middle' fill='${accent}' fill-opacity='0.5' font-family='sans-serif' font-size='10' letter-spacing='4'>FERNANDO LAQUEAÇÕES</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const onErr = (label: string, tone: 'wood' | 'lacquer' = 'lacquer') => (e: React.SyntheticEvent<HTMLImageElement>) => {
  const t = e.currentTarget;
  if (!t.dataset.fallback) {
    t.dataset.fallback = '1';
    t.src = placeholder(label, tone);
  }
};

const beforeAfters = [
  {
    before: '/images/galeria/armario-antes.jpg',
    after: '/images/galeria/armario-depois.jpg',
    label: 'Armário clássico',
  },
  {
    before: '/images/galeria/cadeiras-antes.jpg',
    after: '/images/galeria/cadeiras-depois.jpg',
    label: 'Poltronas capitonê',
  },
];

const projects = [
  { src: '/images/galeria/escrivaninha.jpg', label: 'Escrivaninha clássica laqueada' },
  { src: '/images/galeria/comoda-1.jpg', label: 'Cômoda em laca preta' },
  { src: '/images/galeria/comoda-2.jpg', label: 'Criado-mudo laqueado' },
  { src: '/images/galeria/mesa-vidro.jpg', label: 'Mesa de jantar laca branca' },
  { src: '/images/galeria/mesa-redonda.jpg', label: 'Mesa redonda restaurada' },
  { src: '/images/galeria/comoda-3.jpg', label: 'Cômoda alta laqueada' },
];

export default function Galeria() {
  return (
    <section id="galeria" className="relative py-32 md:py-40">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div data-reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold mb-6">
              <span className="w-12 h-px bg-gold" />
              Antes & Depois
            </div>
            <h2 className="text-display text-5xl md:text-7xl font-light leading-[0.95]">
              A diferença que <br />
              <span className="italic gold-shine">o cuidado faz.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {beforeAfters.map((b) => (
            <BeforeAfter key={b.label} {...b} />
          ))}
        </div>

        <div className="mt-24" data-reveal>
          <h3 className="text-display text-3xl md:text-5xl font-light mb-12">
            Outros <span className="italic">trabalhos</span>
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[14rem] md:auto-rows-[18rem] gap-4 md:gap-6">
            {projects.map((p, i) => {
              const big = i === 0;
              const wide = i === 3;
              return (
              <motion.figure
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-xl border border-cream-50/10 hover:border-gold/30 transition-colors duration-500 ${
                  big ? 'col-span-2 row-span-2' : wide ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'
                }`}
              >
                <img
                  src={p.src}
                  alt={p.label}
                  loading="lazy"
                  onError={onErr(p.label, i % 2 === 0 ? 'lacquer' : 'wood')}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="image-overlay-dark absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <figcaption className="absolute bottom-0 inset-x-0 p-5 md:p-6 text-cream-50 force-light-text">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold mb-1.5 block opacity-80 group-hover:opacity-100 transition-opacity">
                    Projeto · 0{i + 1}
                  </span>
                  <span className="text-display text-lg md:text-2xl font-light leading-tight block">
                    {p.label}
                  </span>
                </figcaption>
              </motion.figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
