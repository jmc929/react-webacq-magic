import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import poelsanLogo from "@/assets/poelsan.png";
import Altamira from "@/assets/altamira_water_logo.png";
import wiplastLogo from "@/assets/WiplastLogo.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Iniciar activo
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  
  const galleryImages = [gallery1, gallery2, gallery3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Funciones para el carrusel arrastrable
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Función para el scroll automático infinito
  const startAutoScroll = () => {
    if (!carouselRef.current || isDragging || isPaused || animationRef.current) return;

    const scrollAmount = 0.3;

    const scroll = () => {
      if (!carouselRef.current || isDragging || isPaused) {
        animationRef.current = undefined;
        return;
      }
      const c = carouselRef.current;
      const singleSetWidth = c.scrollWidth / 3; // Dividido por 3 porque triplicamos las marcas
      
      // Reset instantáneo cuando llegamos al final del primer set
      if (c.scrollLeft >= singleSetWidth) {
        c.scrollLeft = 0;
      }

      c.scrollLeft += scrollAmount;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
  };

  const stopAutoScroll = () => {
  if (animationRef.current) {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = undefined;
  }
  };



  // Efecto para manejar el scroll automático
  useEffect(() => {
    if (!isDragging && !isPaused) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [isDragging, isPaused]);

  const handleMouseLeaveCarousel = () => {
    // No cambiar el estado automáticamente, solo con click
  };


  const brands = [
    { name: "Wiplast", alt: "Logo Wiplast", logo: wiplastLogo, imgClass: "max-h-30 md:max-h-34"},
    { name: "Poelsan", alt: "Logo Poelsan", logo: poelsanLogo, imgClass: "max-h-16 md:max-h-20"},
    { name: "Altamira Water", alt: "Logo Altamira", logo: Altamira},
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <img
          src={heroImage}
          alt="Industrial pipes and irrigation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-4 bg-primary/90 px-8 py-4 rounded-full">
              <span className="text-5xl md:text-6xl font-bold text-primary-foreground">INNOVACIÓN</span>
              <span className="px-6 py-2 bg-primary-foreground text-primary rounded-full text-3xl md:text-4xl font-bold">
                EN
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Tuberías y proyectos para el agro, la industria y la minería
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-xl px-10 py-7">
                <Link to="/catalogo">
                  Ver Catálogo <ArrowRight className="ml-2 h-7 w-7" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/90 hover:bg-white text-xl px-10 py-7">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Galería</h2>
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
      <section className="py-16 bg-brand-cyan/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-muted-foreground">
            Marcas con las que Trabajamos
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-xl">
            Asegurando siempre la mejor calidad
          </p>
          <div className="relative max-w-5xl mx-auto">
          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}  // ⬅️ este
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >

              <div className="flex gap-6 w-max">
                {[...brands, ...brands, ...brands].map((brand, index) => (
                  <div key={index} className="flex-shrink-0 w-64">
                    <Card className="p-8 h-32 flex items-center justify-center hover:shadow-lg transition-all bg-white border-border select-none cursor-default">
                      <img
                        src={brand.logo}
                        alt={brand.alt}
                        className={`w-auto object-contain pointer-events-none select-none ${brand.imgClass ?? "max-h-12 md:max-h-16"}`}
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                        width={200}
                        height={64}
                      />
                      <span className="sr-only">{brand.name}</span>
                    </Card>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
