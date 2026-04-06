import { m } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Precisa agendar horário?',
    answer: 'Recomendamos o agendamento pelo WhatsApp para garantir seu horário preferido, mas também atendemos clientes sem agendamento conforme disponibilidade.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos dinheiro, cartões de crédito e débito, PIX e principais carteiras digitais. Oferecemos também parcelamento em até 3x sem juros.',
  },
  {
    question: 'Fazem barba e cabelo no mesmo atendimento?',
    answer: 'Sim! Oferecemos o pacote completo de corte + barba com atendimento integrado. É nossa combinação mais popular e garante um visual completo e harmonioso.',
  },
  {
    question: 'Quanto tempo dura o atendimento?',
    answer: 'Em média, um corte leva 40 minutos, barba 30 minutos, e o combo completo cerca de 1 hora. Priorizamos a qualidade e atenção aos detalhes.',
  },
  {
    question: 'Tem estacionamento disponível?',
    answer: 'Sim, temos estacionamento conveniado nas proximidades e também vagas na rua em frente à barbearia para comodidade dos nossos clientes.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2a2020] to-[#1a1a1a] overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#C9A961]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
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
            Perguntas Frequentes
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-white"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Tire suas dúvidas
          </m.h2>
        </m.div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="border border-[#E5DFD7] bg-white overflow-hidden rounded-2xl shadow-lg"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between gap-3 sm:gap-4 hover:bg-[#F5F1ED]/50 transition-colors duration-300 group"
                >
                  <span 
                    className="text-base sm:text-lg md:text-xl text-[#1a1a1a] pr-2 sm:pr-4"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {faq.question}
                  </span>
                  
                  <m.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#E63946] group-hover:text-[#1a1a1a] transition-colors" />
                  </m.div>
                </button>

                {/* Answer */}
                <m.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-2">
                    <m.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-[#2a2a2a]/80 leading-relaxed text-sm sm:text-base md:text-lg"
                    >
                      {faq.answer}
                    </m.p>
                  </div>
                </m.div>

                {/* Active Indicator */}
                <m.div
                  className="h-1 bg-[#E63946]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                ></m.div>
              </m.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center p-8 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white"
        >
          <p className="text-lg sm:text-xl mb-4">
            Ainda tem dúvidas? Fale conosco!
          </p>
          <m.button
            onClick={() => window.open('https://wa.me/5547999165149?text=OLA, QUERO MARCAR UM CORTE', '_blank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-[#E63946] text-white tracking-widest uppercase text-sm hover:bg-[#FF4757] transition-colors duration-300 rounded-full cta-pulse"
          >
            Chamar no WhatsApp
          </m.button>
        </m.div>
      </div>
    </section>
  );
}