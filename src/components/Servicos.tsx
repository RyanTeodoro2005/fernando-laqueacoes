import { motion } from 'framer-motion';
import {
  Paintbrush,
  Hammer,
  Wrench,
  Sparkles,
  DoorOpen,
  Layers,
} from 'lucide-react';

const services = [
  {
    title: 'Laqueação',
    desc: 'Acabamento liso, fosco ou brilhante de alta durabilidade. Cor uniforme e profundidade que valorizam a peça.',
    icon: Sparkles,
    bg: '/images/galeria/laqueacao.png',
    accent: true,
  },
  {
    title: 'Restauração',
    desc: 'Móveis novos e antigos recuperados com técnica e respeito à história original.',
    icon: Layers,
    bg: '/images/galeria/restauracao.png',
  },
  {
    title: 'Pintura de Móveis',
    desc: 'Mudança total de cor com preparação completa da superfície.',
    icon: Paintbrush,
    bg: '/images/galeria/pintura-moveis.png',
  },
  {
    title: 'Marcenaria',
    desc: 'Reparos, ajustes e pequenas confecções sob medida.',
    icon: Hammer,
    bg: 'https://images.pexels.com/photos/5974026/pexels-photo-5974026.jpeg?auto=compress&w=900',
  },
  {
    title: 'Montagem de Móveis',
    desc: 'Montagem profissional e organizada de todos os tipos de mobiliário.',
    icon: Wrench,
    bg: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&w=900',
  },
  {
    title: 'Restauração de Portões',
    desc: 'Portões de madeira e de garagem renovados com acabamento resistente ao tempo.',
    icon: DoorOpen,
    bg: '/images/galeria/portao.jpg',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="relative py-32 md:py-40 bg-ink-800/40">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div data-reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold mb-6">
              <span className="w-12 h-px bg-gold" />
              O que fazemos
            </div>
            <h2 className="text-display text-5xl md:text-7xl font-light leading-[0.95]">
              Serviços com <span className="italic gold-shine">acabamento</span>
              <br />
              que se vê e se sente.
            </h2>
          </div>
          <p className="text-cream-50/60 max-w-md text-base lg:text-right" data-reveal>
            Cada peça recebe um tratamento único — da preparação ao último brilho.
            Trabalhamos com cuidado de quem ama o que faz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[20rem] md:auto-rows-[22rem] gap-5 md:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const wide = i === 0 || i === 5;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-cream-50/10 hover:border-gold/40 transition-all duration-500 ${
                  wide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <img
                  src={s.bg}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                />

                <Icon
                  aria-hidden="true"
                  className="absolute -bottom-6 -right-6 w-48 h-48 text-gold/[0.06] group-hover:text-gold/[0.12] transition-colors duration-700 pointer-events-none"
                  strokeWidth={0.8}
                />

                <div className="image-overlay-dark absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/85 to-ink-900/40 group-hover:via-ink-900/70 transition-all duration-500" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gold/15 via-transparent to-transparent" />

                <div className="force-light-text relative h-full p-7 md:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full border border-cream-50/15 group-hover:border-gold/50 grid place-items-center transition-all duration-500 group-hover:bg-gold/10 group-hover:rotate-12">
                      <Icon className="w-5 h-5 text-cream-50/70 group-hover:text-gold transition-colors" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-cream-50/30 group-hover:text-gold/60 transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-display text-3xl md:text-4xl font-light leading-tight mb-3 group-hover:text-gold transition-colors duration-500">
                      {s.title}
                    </h3>
                    <p className="text-sm text-cream-50/60 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
