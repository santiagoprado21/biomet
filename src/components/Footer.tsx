import { Leaf, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">BioMet</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Liderando la transición hacia un futuro energético sostenible con soluciones integrales en biometano.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#propuesta" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  → Propuesta de Valor
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  → Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  → Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  → FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Servicios
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>Capacitación Técnica</li>
              <li>Asesoría Regulatoria</li>
              <li>Consultoría Integral</li>
              <li>Análisis de Viabilidad</li>
              <li>Soporte Continuo</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Contacto
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:contacto@biomet.com" className="hover:text-primary transition-colors">
                  contacto@biomet.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+573001234567" className="hover:text-primary transition-colors">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Cali, Valle del Cauca<br />Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <div className="text-center md:text-left">
              <p className="mb-1">© {currentYear} BioMet. Todos los derechos reservados.</p>
              <p className="text-xs">
                Universidad ICESI - Facultad de Ingeniería, Diseño y Ciencias Aplicadas
              </p>
            </div>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500" />
    </footer>
  );
};

export default Footer;
