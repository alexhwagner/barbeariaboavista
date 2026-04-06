import { m } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Sparkles, Scissors } from 'lucide-react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999165149?text=OLA, QUERO MARCAR UM CORTE', '_blank');
  };

  return (
    <section 
      ref={ref}
      className="relative py-32 sm:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1520338661084-680395057c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmFyYmVyJTIwY3V0dGluZyUyMGhhaXJ8ZW58MXx8fHwxNzc1MzAwMDA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Corte de cabelo elegante em barbearia profissional"
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/90 to-[#1a1a1a]/95"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <m.div
            key={i}
            className="absolute w-1 h-1 bg-[#C9A961] rounded-full"
            initial={{
              x: Math.random() * (windowWidth || 1000),
              y: Math.random() * 600,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * 600 - 300],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Icon - Large Scissors */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <m.div
              animate={{ 
                rotate: [0, 360],
                y: [0, -15, 0]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="relative"
            >
              <Scissors className="w-16 h-16 sm:w-20 sm:h-20 text-[#DC143C] drop-shadow-2xl" strokeWidth={1}/>
              <m.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute inset-0 border-2 border-[#DC143C] rounded-full"
              ></m.div>
            </m.div>
          </m.div>

          {/* Main Heading */}
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-8 text-white tracking-wide px-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Seu próximo visual
            <br />
            <span className="text-[#E63946]">começa aqui</span>
          </m.h2>

          {/* Subheading */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Não perca tempo. Agende agora pelo WhatsApp e garanta 
            seu horário com os melhores barbeiros da região.
          </m.p>

          {/* CTA Button */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <m.button
              type="button"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Agendar agora pelo WhatsApp"
              className="group relative inline-flex items-center justify-center px-6 sm:px-10 lg:px-14 xl:px-20 py-4 sm:py-5 lg:py-6 overflow-hidden rounded-full cta-pulse"
            >
              {/* Button Background */}
              <m.div
                className="absolute inset-0 bg-[#E63946]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></m.div>

              {/* Shine Effect */}
              <m.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              ></m.div>

              {/* Button Text */}
              <span className="relative z-10 text-[#1a1a1a] tracking-widest uppercase text-xs sm:text-sm lg:text-base xl:text-lg flex items-center gap-2 sm:gap-3">
                <span>Agendar Agora</span>
                <m.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-2xl"
                >
                  →
                </m.span>
              </span>

              {/* Border Animation */}
              <m.div
                className="absolute inset-0 border-4 border-white"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              ></m.div>
            </m.button>
          </m.div>

          {/* Trust Indicators */}
          <m.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 text-white/60 text-xs sm:text-sm lg:text-base"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#E63946] rounded-full"></div>
              <span>Atendimento imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#E63946] rounded-full"></div>
              <span>Sem burocracia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#E63946] rounded-full"></div>
              <span>100% de satisfação</span>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}