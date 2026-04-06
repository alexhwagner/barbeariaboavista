import { m } from 'motion/react';
import { ChevronDown, Scissors } from 'lucide-react';

export function HeroSection() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999165149?text=OLA, QUERO MARCAR UM CORTE', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-6 md:px-8 py-16 sm:py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#8B1A1A] via-[#7A1212] to-[#5C0000]">
      {/* Animated Background Pattern — GPU-composited CSS animation */}
      <div className="hero-pattern"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A61A1A]/40 to-[#1a1a1a]"></div>

      {/* Floating Scissors */}
      <m.div
        className="hidden sm:block absolute top-20 left-10 opacity-20"
        style={{ willChange: 'transform' }}
        animate={{
          y: [0, -30, 0],
          rotate: [45, 65, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Scissors className="w-16 h-16 text-white" strokeWidth={1} />
      </m.div>

      <m.div
        className="hidden md:block absolute bottom-32 right-16 opacity-20"
        style={{ willChange: 'transform' }}
        animate={{
          y: [0, 40, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Scissors className="w-14 h-14 text-white" strokeWidth={1} />
      </m.div>

      {/* Floating Scissors */}
      <m.div
        className="hidden lg:block absolute top-1/4 right-20 opacity-30"
        style={{ willChange: 'transform' }}
        animate={{
          y: [0, -40, 0],
          rotate: [0, 360, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Scissors className="w-16 h-16 text-white" strokeWidth={1}/>
      </m.div>

      <m.div
        className="hidden lg:block absolute bottom-1/3 left-16 opacity-25"
        style={{ willChange: 'transform' }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -360, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <Scissors className="w-14 h-14 text-white" strokeWidth={1}/>
      </m.div>

      <m.div
        className="absolute top-1/3 left-1/4 opacity-20"
        style={{ willChange: 'transform' }}
        animate={{
          y: [0, -50, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <Scissors className="w-12 h-12 text-white" strokeWidth={1}/>
      </m.div>

      <m.div
        className="absolute bottom-1/4 right-1/3 opacity-28"
        style={{ willChange: 'transform' }}
        animate={{
          y: [0, 35, 0],
          rotate: [0, -360, 0],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <Scissors className="w-16 h-16 text-white" strokeWidth={1}/>
      </m.div>

      {/* Extra Floating Scissors */}
      <m.div
        className="hidden sm:block absolute top-[15%] right-[40%] opacity-15"
        style={{ willChange: 'transform' }}
        animate={{ y: [0, -25, 0], rotate: [10, -30, 10] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <Scissors className="w-10 h-10 text-white" strokeWidth={1}/>
      </m.div>

      <m.div
        className="hidden md:block absolute bottom-[15%] left-[35%] opacity-15"
        style={{ willChange: 'transform' }}
        animate={{ y: [0, 30, 0], rotate: [0, 180, 0], x: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <Scissors className="w-12 h-12 text-white" strokeWidth={1}/>
      </m.div>

      <m.div
        className="absolute top-[60%] right-[10%] opacity-15"
        style={{ willChange: 'transform' }}
        animate={{ y: [0, -35, 0], rotate: [20, 200, 20] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      >
        <Scissors className="w-10 h-10 text-white" strokeWidth={1}/>
      </m.div>

      <m.div
        className="hidden lg:block absolute top-[45%] left-[8%] opacity-20"
        style={{ willChange: 'transform' }}
        animate={{ y: [0, 20, 0], rotate: [0, -180, 0], x: [0, 15, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        <Scissors className="w-14 h-14 text-white" strokeWidth={1}/>
      </m.div>

      <m.div
        className="hidden sm:block absolute bottom-[40%] right-[5%] opacity-15"
        style={{ willChange: 'transform' }}
        animate={{ y: [0, -20, 0], rotate: [-15, 45, -15] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        <Scissors className="w-8 h-8 text-white" strokeWidth={1}/>
      </m.div>

      <m.div
        className="hidden md:block absolute top-[10%] left-[45%] opacity-15"
        style={{ willChange: 'transform' }}
        animate={{ y: [0, 25, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
      >
        <Scissors className="w-10 h-10 text-white" strokeWidth={1}/>
      </m.div>

      <m.div
        className="hidden lg:block absolute bottom-[10%] right-[45%] opacity-15"
        style={{ willChange: 'transform' }}
        animate={{ y: [0, -30, 0], rotate: [30, -30, 30], x: [0, 10, 0] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
      >
        <Scissors className="w-12 h-12 text-white" strokeWidth={1}/>
      </m.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Main Title - Large Editorial Style */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="mb-6 sm:mb-8 flex flex-col items-center"
          >
            {/* Decorative line top */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 sm:w-20 md:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#DC143C]"></div>
              <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC143C] rotate-90" strokeWidth={1.5} />
              <div className="w-12 sm:w-20 md:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#DC143C]"></div>
            </div>

            {/* Main Title - BARBEARIA BOA VISTA */}
            <m.h1
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-3 text-white tracking-wider"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                letterSpacing: '0.12em',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.4), 0 8px 30px rgba(0, 0, 0, 0.5)',
                willChange: 'transform',
                lineHeight: 1.2,
              }}
            >
              BARBEARIA
            </m.h1>
            <m.h1
              animate={{ 
                y: [0, -8, 0],
                textShadow: [
                  '0 0 20px rgba(255, 50, 50, 0.4), 0 0 40px rgba(255, 50, 50, 0.2), 0 8px 30px rgba(0, 0, 0, 0.5)',
                  '0 0 40px rgba(255, 50, 50, 0.8), 0 0 80px rgba(255, 50, 50, 0.5), 0 0 120px rgba(255, 50, 50, 0.3), 0 8px 30px rgba(0, 0, 0, 0.5)',
                  '0 0 20px rgba(255, 50, 50, 0.4), 0 0 40px rgba(255, 50, 50, 0.2), 0 8px 30px rgba(0, 0, 0, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 text-[#FF2D2D] tracking-wider"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                letterSpacing: '0.15em',
                willChange: 'transform',
                lineHeight: 1.1,
              }}
            >
              BOA VISTA
            </m.h1>

            {/* Decorative line bottom */}
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-8 sm:w-14 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#DC143C]/60"></div>
              <span className="text-white text-base sm:text-lg tracking-[0.15em]" style={{ fontFamily: "'Great Vibes', cursive" }}>Since 2023</span>
              <div className="w-8 sm:w-14 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#DC143C]/60"></div>
            </div>

            {/* Subtitle */}
            <m.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[#F5F1ED]/70 text-xs sm:text-sm md:text-base mt-1 tracking-[0.25em] uppercase font-light"
            >
              Premium Barber Shop
            </m.p>
          </m.div>

          {/* Subtitle */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F1ED] mb-8 sm:mb-12 max-w-2xl mx-auto tracking-wide"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            Estilo, presença e excelência em cada corte.
          </m.p>

          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            {/* Primary CTA - WhatsApp */}
            <m.button
              type="button"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(178, 34, 34, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-[#1a1a1a] text-[#F5F1ED] overflow-hidden transition-all duration-300 w-full sm:w-auto rounded-full cta-pulse"
            >
              <m.div
                className="absolute inset-0 bg-gradient-to-r from-[#B22222] to-[#A61A1A]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              ></m.div>
              <span className="relative z-10 tracking-wider uppercase text-sm sm:text-base flex items-center justify-center gap-2">
                Agendar pelo WhatsApp
                <m.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </m.span>
              </span>
            </m.button>
          </m.div>
        </m.div>

      </div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-none z-10"
      >
        <div className="hero-scroll-icon flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-widest mb-2">Role para descobrir</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </m.div>
    </section>
  );
}