import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/Logo_acquapack_sin_fondo_gota.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="Acquapack Logo" className="h-14 w-14 transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">ACQUAPACK <span className="text-sm text-brand-gray">S.A.S</span></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Inicio */}
            <Link
              to="/"
              className={`text-base font-medium transition-colors relative group ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Inicio
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* Nosotros */}
            <Link
              to="/nosotros"
              className={`text-base font-medium transition-colors relative group ${
                isActive("/nosotros") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Nosotros
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  isActive("/nosotros") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
            
            {/* Catálogo */}
            <Link
              to="/catalogo"
              className={`text-base font-medium transition-colors relative group ${
                location.pathname.startsWith("/catalogo") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Catálogo
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  location.pathname.startsWith("/catalogo") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* Servicios */}
            <Link
              to="/servicios"
              className={`text-base font-medium transition-colors relative group ${
                isActive("/servicios") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Servicios
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  isActive("/servicios") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* Contacto */}
            <Link
              to="/contacto"
              className={`text-base font-medium transition-colors relative group ${
                isActive("/contacto") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Contacto
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  isActive("/contacto") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            {/* Inicio */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              Inicio
            </Link>

            {/* Nosotros */}
            <Link
              to="/nosotros"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/nosotros")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              Nosotros
            </Link>
            
            {/* Catálogo */}
            <Link
              to="/catalogo"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname.startsWith("/catalogo")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              Catálogo
            </Link>

            {/* Servicios */}
            <Link
              to="/servicios"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/servicios")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              Servicios
            </Link>

            {/* Contacto */}
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contacto")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
