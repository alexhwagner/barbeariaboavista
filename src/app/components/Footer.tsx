import { m } from 'motion/react';
import { Phone, Instagram, MapPin, Clock } from 'lucide-react';
import logo from '../../assets/MINHA LOGO .png';

export function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999165149?text=OLA, QUERO MARCAR UM CORTE', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/barbeariaboavista', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 
              className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-[#E63946]"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}
            >
              BARBEARIA<br />
              BOA VISTA
            </h3>
            <p className="text-white/70 leading-relaxed text-xs sm:text-sm lg:text-base">
              Excelência em cortes masculinos e cuidados com a barba. 
              Estilo e sofisticação para o homem moderno.
            </p>
            <m.div
              className="mt-6 h-0.5 bg-[#E63946] w-20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'left' }}
            ></m.div>
          </m.div>

          {/* Contact */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg mb-6 uppercase tracking-wider">Contato</h4>
            <div className="space-y-4 text-white/70 text-sm sm:text-base">
              <m.button
                onClick={handleWhatsApp}
                whileHover={{ x: 5, color: '#E63946' }}
                className="flex items-center gap-3 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(47) 99999-9999</span>
              </m.button>

              <m.button
                onClick={handleInstagram}
                whileHover={{ x: 5, color: '#E63946' }}
                className="flex items-center gap-3 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@barbeariaboavista</span>
              </m.button>
            </div>
          </m.div>

          {/* Location */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg mb-6 uppercase tracking-wider">Endereço</h4>
            <div className="space-y-4 text-white/70 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>
                  Ituporanga - SC
                </span>
              </div>
            </div>
          </m.div>

          {/* Hours */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg mb-6 uppercase tracking-wider">Horários</h4>
            <div className="space-y-3 text-white/70 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-2">Seg - Sex: 09:00 - 19:00</div>
                  <div className="mb-2">Sábado: 09:00 - 17:00</div>
                  <div>Domingo: Fechado</div>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* CTA Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 lg:pt-12 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Pronto para o seu <span className="text-[#E63946]">melhor visual</span>?
              </h3>
              <p className="text-white/70 text-xs sm:text-sm lg:text-base">
                Agende agora mesmo pelo WhatsApp
              </p>
            </div>
            
            <m.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(230, 57, 70, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#E63946] text-white tracking-widest uppercase text-xs sm:text-sm lg:text-base hover:bg-[#FF4757] transition-all duration-300 whitespace-nowrap rounded-full cta-pulse"
            >
              Agendar Agora
            </m.button>
          </div>
        </m.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-5 lg:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-white/60 text-xs sm:text-sm">
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2023 Barbearia Boa Vista. Todos os direitos reservados.
            </m.p>

            <m.a
              href="https://xhdigital.com.br"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <span className="text-white/60 text-xs sm:text-sm">Design by <span className="text-white/80 font-medium">xhdigital</span></span>
              <img src={logo} alt="XH Digital" className="h-24 sm:h-28 w-auto" />
            </m.a>

            <m.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              className="flex items-center gap-2 hover:text-[#E63946] transition-colors"
            >
              <span>Voltar ao topo</span>
              <m.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↑
              </m.span>
            </m.button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E63946]/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E63946]/10 rounded-full blur-3xl -z-0"></div>
    </footer>
  );
}