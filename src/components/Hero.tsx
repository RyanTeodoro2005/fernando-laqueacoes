import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const SERVICES_MARQUEE = [
  'Laqueação',
  'Restauração',
  'Marcenaria',
  'Pintura',
  'Montagem',
  'Portões',
  'Móveis Antigos',
  'Acabamento Premium',
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex flex-col justify-end pb-24 pt-32 overflow-hidden"
    >
      {/* Background gradient + grain */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800 to-ink-900" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,90,60,0.12),transparent_60%)]" />

        {/* Animated dust particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gold/40"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * 100 + '%'],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <motion.div style={{ y, opacity }} className="container-x relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold mb-8"
        >
          <span className="w-12 h-px bg-gold" />
          Laqueação e Restauração de Móveis em São Paulo
        </motion.div>

        {/* Title */}
        <h1 className="text-display text-[clamp(3rem,9vw,9rem)] font-light leading-[0.95] overflow-visible pb-6">
          {['Restauramos', 'o', 'que', 'tem'].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block italic font-medium gold-shine pb-0"
          >
            história.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="-mt-2 max-w-xl text-lg md:text-xl text-cream-50/70 leading-relaxed text-balance"
        >
          Laqueação, pintura e restauração de móveis com acabamento impecável.
          Trabalho artesanal que devolve vida e brilho a cada peça.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="https://wa.me/5511962544005?text=Ol%C3%A1!%20Vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener"
            className="magnetic-btn inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-ink-900 rounded-full px-8 py-4 font-medium tracking-tight transition-colors"
          >
            Solicitar orçamento
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#galeria"
            className="inline-flex items-center gap-3 text-cream-50/80 hover:text-gold border border-cream-50/15 hover:border-gold rounded-full px-8 py-4 transition-all duration-300"
          >
            Ver trabalhos
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-50/40 text-xs uppercase tracking-widest"
      >
        Role
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>

      {/* Marquee */}
      <div className="relative mt-20 border-y border-cream-50/8 bg-ink-900/50 backdrop-blur py-6 overflow-hidden marquee-mask">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...SERVICES_MARQUEE, ...SERVICES_MARQUEE, ...SERVICES_MARQUEE].map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-12 text-display text-3xl md:text-5xl font-light text-cream-50/30 hover:text-gold transition-colors"
            >
              {s}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
