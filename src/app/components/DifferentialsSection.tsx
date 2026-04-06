import { m } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Award, Users, Clock, Star, Sparkles } from 'lucide-react';

const differentials = [
  {
    icon: Award,
    title: 'Profissional Experiente',
    description: 'Mais de 3 anos de experiência com técnicas modernas e atenção aos detalhes.',
  },
  {
    icon: Star,
    title: 'Produtos Premium',
    description: 'Utilizamos apenas as melhores marcas do mercado para resultados excepcionais.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Serviço exclusivo e dedicado, focado 100% em você e no seu estilo.',
  },
  {
    icon: Clock,
    title: 'Agendamento Rápido',
    description: 'Agende pelo WhatsApp em poucos segundos e garanta seu horário.',
  },
  {
    icon: Shield,
    title: 'Higiene Impecável',
    description: 'Padrões rigorosos de limpeza e esterilização em todos os procedimentos.',
  },
  {
    icon: Sparkles,
    title: 'Qualidade Garantida',
    description: '137+ clientes satisfeitos confirmam nosso compromisso com a excelência.',
  },
];

export function DifferentialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-32 px-3 sm:px-4 lg:px-8 bg-[#1a1a1a] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <m.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></m.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 text-xs sm:text-sm tracking-[0.3em] uppercase text-[#E63946]"
          >
            Nossos Diferenciais
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-white"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Por que nos escolher
          </m.h2>
        </m.div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="group text-center"
              >
                {/* Icon Container */}
                <m.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-6 relative"
                >
                  {/* Icon Background Circle */}
                  <div className="absolute inset-0 bg-[#E63946]/10 rounded-full group-hover:bg-[#E63946]/20 transition-all duration-500"></div>
                  
                  {/* Icon */}
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#E63946] relative z-10" />
                  
                  {/* Pulsing Ring */}
                  <m.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 border-2 border-[#E63946] rounded-full"
                  ></m.div>
                </m.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl mb-3 text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>

                {/* Decorative Dots */}
                <div className="flex justify-center gap-1 mt-4">
                  <div className="w-1 h-1 bg-[#E63946] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#E63946] rounded-full opacity-60"></div>
                  <div className="w-1 h-1 bg-[#E63946] rounded-full opacity-30"></div>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Bottom Accent Line */}
        <m.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-[#E63946] to-transparent"
        ></m.div>
      </div>
    </section>
  );
}