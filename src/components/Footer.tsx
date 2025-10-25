import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/Logo_acquapack_sin_fondo_gota.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={logo} alt="Acquapack Logo" className="h-14 w-14 transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">ACQUAPACK <span className="text-sm text-gray-400">S.A.S</span></span>
              </div>
            </Link>
            <p className="text-base text-gray-300">
              Innovación en tuberías y proyectos para el agro, la industria y la minería.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-base text-gray-300 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-base text-gray-300 hover:text-primary transition-colors">
                  Quienes somos
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-base text-gray-300 hover:text-primary transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-base text-gray-300 hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-base text-gray-300 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:3174399679"
                  className="flex items-center space-x-2 text-base text-gray-300 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>317 439 9679</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:acquapack@acquapackcolombia.com"
                  className="flex items-center space-x-2 text-base text-gray-300 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>acquapack@acquapackcolombia.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Dirección y Redes */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Dirección</h3>
            <a
              href="https://www.google.com/maps/place/Cl.+35+%2351-11,+La+Candelaria,+Medell%C3%ADn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-2 text-base text-gray-300 hover:text-primary transition-colors mb-4"
            >
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Barrio Perpetuo Socorro, Calle 35 #51-11, Medellín, Antioquia</span>
            </a>
            
            <h3 className="text-lg font-semibold mb-4 text-white">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/acquapack_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.link/dgtbl9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Acquapack S.A.S. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
