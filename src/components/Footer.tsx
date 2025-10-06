import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">BioMet</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Consultoría integral en biometano para la transición energética sostenible.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#propuesta" className="hover:text-primary transition-colors">
                  Propuesta de Valor
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-white/70">
              <li>Email: contacto@biomet.com</li>
              <li>Tel: +57 300 123 4567</li>
              <li>Cali, Valle del Cauca, Colombia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} BioMet. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Universidad ICESI - Facultad de Ingeniería, Diseño y Ciencias Aplicadas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
