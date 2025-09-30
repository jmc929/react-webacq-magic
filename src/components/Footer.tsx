import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Acquapack Logo" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">ACQUAPACK</span>
                <span className="text-xs text-brand-gray">S.A.S</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Innovación en tuberías y proyectos para el agro, la industria y la minería.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Quienes somos
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:3174399679"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>317 439 9679</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:acquapack@acquapackcolombia.com"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>acquapack@acquapackcolombia.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Dirección y Redes */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Dirección</h3>
            <a
              href="https://www.google.com/maps/place/Cl.+35+%2351-11,+La+Candelaria,+Medell%C3%ADn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Barrio Perpetuo Socorro, Calle 35 #51-11, Medellín, Antioquia</span>
            </a>
            
            <h3 className="font-semibold mb-4 text-foreground">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/acquapack_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.link/dgtbl9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Acquapack S.A.S. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
