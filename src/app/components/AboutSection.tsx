import { m } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(230, 57, 70, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 57, 70, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-[#E63946]/20 rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-[#E63946]/20 rotate-12"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-20 items-center px-2 sm:px-0">
          {/* Image */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <m.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXJzaG9wJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzUzMDAwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Profissional barbeiro realizando corte tradicional com ferramentas premium"
                  className="w-full h-full object-cover"
                />
              </m.div>
              {/* Gold Accent Border */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#E63946] -z-10 rounded-2xl"></div>
            </div>
          </m.div>

          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4 text-xs sm:text-sm tracking-[0.3em] uppercase text-[#E63946]"
            >
              Sobre Nós
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 tracking-wide text-white"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Mais que um corte, uma experiência.
            </m.h2>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3 sm:space-y-4 lg:space-y-6 text-white/80 leading-relaxed"
            >
              <p className="text-sm sm:text-base lg:text-lg">
                A <strong className="text-white">Barbearia Boa Vista</strong> é comandada por um profissional 
                apaixonado pelo que faz, oferecendo atendimento personalizado e dedicado exclusivamente a você.
              </p>
              
              <p className="text-base sm:text-lg">
                Com técnicas modernas e atenção total aos detalhes, cada cliente recebe um serviço único 
                que valoriza sua personalidade e estilo individual.
              </p>

              <p className="text-base sm:text-lg">
                Aqui você encontra qualidade, profissionalismo e um ambiente onde o cuidado masculino 
                é tratado com excelência e respeito.
              </p>
            </m.div>

            {/* Stats */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-8 mt-8 sm:mt-10 lg:mt-12"
            >
              {[
                { number: '+3', label: 'Anos de Experiência' },
                { number: '137+', label: 'Clientes Satisfeitos' },
                { number: '100%', label: 'Dedicação' },
              ].map((stat, index) => (
                <div key={index} className="text-center border-l-2 border-[#E63946] pl-2 sm:pl-3 lg:pl-4">
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-0.5 sm:mb-1 text-white" style={{ fontFamily: 'Georgia, serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}