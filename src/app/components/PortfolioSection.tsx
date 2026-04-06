import { m } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import foto1 from '../../assets/foto1.jpeg';
import foto2 from '../../assets/foto2.jpeg';
import foto4 from '../../assets/foto4.jpeg';
import foto5 from '../../assets/foto5.jpeg';

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const portfolioItems = [
    {
      id: 1,
      title: 'Corte Premium',
      description: 'Detalhe e precisão em cada fio',
      image: foto1,
    },
    {
      id: 2,
      title: 'Fade Moderno',
      description: 'Estilo contemporâneo e sofisticado',
      image: foto2,
    },
    {
      id: 3,
      title: 'Acabamento Perfeito',
      description: 'Qualidade em cada detalhe',
      image: foto4,
    },
    {
      id: 4,
      title: 'Estilo Clássico',
      description: 'Tradição com elegância',
      image: foto5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a1a1a] via-[#2a1a1a] to-[#1a1a1a] overflow-hidden"
    >
      {/* Background Accent */}
      <m.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #C4472C, transparent)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F1ED] mb-2 sm:mb-3 md:mb-4 px-2" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            Nossos Trabalhos
          </h2>
          <p className="text-base sm:text-lg text-white tracking-wide px-2" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            Excelência em cada corte
          </p>
        </m.div>

        {/* Portfolio Grid */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {portfolioItems.map((item, index) => (
            <m.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-full bg-gray-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <m.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a1a]/95"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Golden Shine Effect */}
                <m.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(220,20,60,0.4) 0%, transparent 50%)',
                  }}
                  whileHover={{ opacity: 0.3 }}
                />
              </div>

              {/* Content */}
              <m.div
                className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F1ED] mb-2" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-black" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                  {item.description}
                </p>

                {/* Decorative Line */}
                <m.div
                  className="w-12 h-1 bg-gradient-to-r from-[#DC143C] to-[#FF4444] mt-3 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.3 }}
                />
              </m.div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-[#DC143C] opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg" />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
