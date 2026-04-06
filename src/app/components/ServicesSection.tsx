import { m } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Scissors, Sparkles, Award } from 'lucide-react';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Scissors,
      title: 'Corte Tradicional',
      description: 'Cortes clássicos e modernos com técnicas refinadas e atenção aos detalhes.',
      price: 'R$ 45',
    },
    {
      icon: Sparkles,
      title: 'Barba Completa',
      description: 'Aparar, modelar e finalizar com produtos premium de alta qualidade.',
      price: 'R$ 35',
    },
    {
      icon: Award,
      title: 'Corte + Barba',
      description: 'Pacote completo para um visual impecável e sofisticado.',
      price: 'R$ 70',
    },
  ];

  return (
    <section 
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-32 px-3 sm:px-4 lg:px-8 bg-gradient-to-br from-[#2a2020] to-[#1a1a1a] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
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
            Nossos Serviços
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-white"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Excelência em cada detalhe
          </m.h2>
        </m.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-white p-4 sm:p-6 lg:p-8 h-full border border-[#E5DFD7] hover:border-[#C9A961] transition-all duration-500 overflow-hidden rounded-2xl shadow-lg">
                  {/* Hover Background Effect */}
                  <m.div
                    className="absolute inset-0 bg-gradient-to-br from-[#C9A961]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></m.div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <m.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="inline-block mb-6 p-4 bg-[#1a1a1a] text-[#E63946] group-hover:bg-[#E63946] group-hover:text-white transition-all duration-500"
                    >
                      <Icon className="w-8 h-8" />
                    </m.div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl mb-4" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#2a2a2a]/80 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>

                    {/* Price */}
                    <p className="text-xl sm:text-2xl mt-4" style={{ fontFamily: 'Georgia, serif', color: '#E63946' }}>
                      {service.price}
                    </p>

                    {/* Decorative Line */}
                    <m.div
                      className="mt-6 h-0.5 bg-[#E63946] origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    ></m.div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#E63946] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}