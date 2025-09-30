import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryImages = [gallery1, gallery2, gallery3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const brands = [
    { name: "Wiplast", alt: "Logo Wiplast" },
    { name: "Poelsan", alt: "Logo Poelsan" },
    { name: "Altamira Water", alt: "Logo Altamira" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <img
          src={heroImage}
          alt="Industrial pipes and irrigation"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 bg-primary/90 px-6 py-3 rounded-full">
              <span className="text-3xl font-bold text-primary-foreground">INNOVACIÓN</span>
              <span className="px-4 py-1 bg-primary-foreground text-primary rounded-full text-xl font-bold">
                EN
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Tuberías y proyectos para el agro, la industria y la minería
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/catalogo">
                  Ver Catálogo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/90 hover:bg-white">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Galería</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src={galleryImages[currentSlide]}
                alt={`Gallery ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-primary/90 text-primary-foreground rounded-full hover:bg-primary transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-primary/90 text-primary-foreground rounded-full hover:bg-primary transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="flex justify-center space-x-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Marcas con las que Trabajamos
          </h2>
          <p className="text-center text-brand-gray mb-12 text-lg">
            Asegurando siempre la mejor calidad
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <Card
                key={index}
                className="p-8 flex items-center justify-center hover:shadow-lg transition-shadow bg-card border-border"
              >
                <div className="text-center space-y-2">
                  <div className="h-20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-gray">{brand.name}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas asesoría personalizada?</h2>
          <p className="text-lg mb-8 opacity-90">
            Nuestro equipo de expertos está listo para ayudarte con tu proyecto
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contacto">Habla con un experto</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
