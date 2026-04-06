import { m } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999165149?text=OLA, QUERO MARCAR UM CORTE', '_blank');
  };

  const services = [
    { name: 'Corte de Cabelo', price: 'R$ 35' },
    { name: 'Barba', price: 'R$ 25' },
    { name: 'Sobrancelha', price: 'R$ 15' },
    { name: 'Pigmentação', price: 'R$ 25' },
    { name: 'Platinado / Luzes', price: 'R$ 130' },
  ];

  const combos = [
    { name: 'Combo Alinhamento', description: 'Cabelo + Barba', price: 'R$ 50' },
    { name: 'Combo Régua Máxima', description: 'Cabelo + Barba + Sobrancelha + Pigmentação', price: 'R$ 70' },
  ];

  const plans = [
    { name: 'Plano Magnata', description: 'Corte 4x no mês', price: 'R$ 90', badge: 'Mais Popular' },
    { name: 'Plano Executivo', description: 'Corte + Barba 2x no mês', price: 'R$ 80', badge: 'Executivo' },
  ];

  const cardBase =
    'group relative overflow-hidden rounded-3xl cursor-pointer shadow-2xl hover:shadow-[0_25px_60px_rgba(198,169,97,0.4)] transition-shadow duration-300';

  const CardBg = () => (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1ED]/15 via-[#C9A961]/10 to-[#1a1a1a]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#E63946]/15 via-[#C9A961]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <m.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5F1ED]/20 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <div className="absolute inset-0 border-2 border-[#C9A961]/30 group-hover:border-[#C9A961]/60 transition-all duration-300 rounded-3xl"></div>
    </>
  );

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a1a1a] via-[#2a2020] to-[#1a1a1a] overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(230, 57, 70, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 57, 70, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>
      <div className="absolute -top-20 left-10 w-40 h-40 bg-[#E63946]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-10 w-40 h-40 bg-[#C9A961]/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Page Header */}
        <m.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#E63946] font-bold">
            Tabela de Preços
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mt-4 mb-4 font-bold"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Nossos Serviços e Valores
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-light">
            Qualidade e excelência em cada detalhe
          </p>
        </m.div>

        {/* ── SERVIÇOS ── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-widest mb-8 border-b border-[#E63946]/30 pb-4">
            Serviços
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.08 }}
                onClick={handleWhatsApp}
                className={cardBase}
              >
                <CardBg />
                <div className="relative p-6 flex flex-col items-center text-center backdrop-blur-sm">
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-[#FF4757] transition-colors">
                    {service.name}
                  </h4>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#E63946] to-[#FF4757] rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
                  <p className="text-white/50 text-xs mb-3">A partir de</p>
                  <p className="text-3xl lg:text-4xl font-bold text-[#E63946] group-hover:text-[#FF4757] transition-colors">
                    {service.price}
                  </p>
                </div>
                <m.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#C9A961] via-[#E63946] to-[#C9A961] rounded-3xl -z-10 blur-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </m.div>
            ))}
          </div>
        </m.div>

        {/* ── COMBOS ── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-widest mb-8 border-b border-[#E63946]/30 pb-4">
            Combos
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {combos.map((combo, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + index * 0.1 }}
                onClick={handleWhatsApp}
                className={cardBase}
              >
                <CardBg />
                <div className="relative p-8 backdrop-blur-sm">
                  <div className="inline-block mb-5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#E63946] to-[#FF4757] text-white text-xs font-bold uppercase tracking-wider">
                    Combo Premium
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF4757] transition-colors">
                    {combo.name}
                  </h4>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">{combo.description}</p>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E63946]/50 to-transparent mb-6"></div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-white/60 text-sm">Apenas</span>
                    <p className="text-4xl font-bold text-[#E63946] group-hover:text-[#FF4757] transition-colors">
                      {combo.price}
                    </p>
                  </div>
                  <m.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E63946] via-[#DC143C] to-[#B22222] text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-[0_10px_30px_rgba(230,57,70,0.5)] transition-shadow duration-300 cta-pulse"
                  >
                    Agendar →
                  </m.div>
                </div>
                <m.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#C9A961] via-[#E63946] to-[#C9A961] rounded-3xl -z-10 blur-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </m.div>
            ))}
          </div>
        </m.div>

        {/* ── PLANOS ── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-widest mb-8 border-b border-[#E63946]/30 pb-4">
            Planos Mensais
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={handleWhatsApp}
                className={cardBase}
              >
                <CardBg />
                <div className="relative p-8 backdrop-blur-sm">
                  <div className="inline-block mb-5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#E63946] to-[#DC143C] text-white text-xs font-bold uppercase tracking-wider">
                    {plan.badge}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF4757] transition-colors">
                    {plan.name}
                  </h4>
                  <p className="text-white/60 text-sm mb-6">{plan.description}</p>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E63946]/50 to-transparent mb-6"></div>
                  <div className="flex items-baseline justify-between mb-5">
                    <span className="text-white/60 text-sm">Por mês</span>
                    <p className="text-4xl font-bold text-[#E63946] group-hover:text-[#FF4757] transition-colors">
                      {plan.price}
                    </p>
                  </div>
                  <m.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E63946] via-[#DC143C] to-[#B22222] text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-[0_10px_30px_rgba(230,57,70,0.5)] transition-shadow duration-300"
                  >
                    Contratar Plano →
                  </m.div>
                </div>
                <m.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#C9A961] via-[#E63946] to-[#C9A961] rounded-3xl -z-10 blur-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </m.div>
            ))}
          </div>
        </m.div>

        {/* CTA Button */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <m.button
            type="button"
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.08, boxShadow: '0 40px 80px rgba(230, 57, 70, 0.6), 0 20px 40px rgba(220, 20, 60, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 sm:px-16 py-5 sm:py-6 bg-gradient-to-r from-[#E63946] via-[#DC143C] to-[#B22222] text-white rounded-full tracking-widest uppercase text-sm sm:text-base font-bold shadow-2xl overflow-hidden transition-shadow duration-300 cta-pulse"
          >
            <m.div
              className="absolute inset-0 bg-gradient-to-r from-[#DC143C] to-[#E63946]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            ></m.div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Agendar Agora
              <m.span
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </m.span>
            </span>
          </m.button>
        </m.div>
      </div>
    </section>
  );
}

