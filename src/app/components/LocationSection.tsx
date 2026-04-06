import { m } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleGetDirections = () => {
    window.open('https://maps.google.com/?q=Ituporanga,SC', '_blank');
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center px-2 sm:px-0">
          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4 text-xs sm:text-sm tracking-[0.3em] uppercase text-[#E63946]"
            >
              Localização
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 tracking-wide text-white"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Venha nos visitar
            </m.h2>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-10"
            >
              {/* Address Card */}
              <div className="bg-white p-6 sm:p-7 lg:p-8 border-l-4 border-[#E63946] rounded-2xl">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-2 sm:p-3 bg-[#1a1a1a] rounded-xl">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#E63946]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl mb-1 sm:mb-2" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
                      Endereço
                    </h3>
                    <p className="text-[#2a2a2a]/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Ituporanga - SC
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-4 sm:mt-6 bg-white p-6 sm:p-7 lg:p-8 border-l-4 border-[#1a1a1a] rounded-2xl">
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
                  Horário de Funcionamento
                </h3>
                <div className="space-y-1 sm:space-y-2 text-[#2a2a2a]/80 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span>09:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
            </m.div>

            {/* Directions Button */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <m.button
                onClick={handleGetDirections}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-[#F5F1ED] hover:bg-[#E63946] hover:text-white transition-all duration-300 rounded-full"
              >
                <Navigation className="w-5 h-5" />
                <span className="tracking-widest uppercase text-sm">Como Chegar</span>
                <m.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </m.span>
              </m.button>
            </m.div>
          </m.div>

          {/* Map Placeholder */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              {/* Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14218.0!2d-49.6006!3d-27.4122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df6a1c7c8b8b8d%3A0x3b3b3b3b3b3b3b3b!2sItuporanga%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>

              {/* Decorative Border */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#E63946] -z-10 pointer-events-none"></div>
            </div>

            {/* Pulsing Marker */}
            <m.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#E63946] rounded-full shadow-lg pointer-events-none"
            ></m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}