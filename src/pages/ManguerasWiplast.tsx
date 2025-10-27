import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";
import WaveSection from "@/components/WaveSection";

const ManguerasWiplast = () => {
  return (
    <div className="min-h-screen">
      <WaveSection 
        heightClassName="h-[200px] sm:h-[250px]"
        colors={['#E8F4F8', '#D1E9F0', '#B8DDE8', '#A0D1E0', '#87C5D8', '#6FB9D0']}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-muted-foreground">
              Mangueras WIPLAS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground opacity-90">
              Mangueras de diferentes calibres y especificaciones
            </p>
          </div>
        </div>
      </WaveSection>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link to="/catalogo">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al catálogo
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Construction className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground">Página en Construcción</h2>
            <p className="text-xl text-muted-foreground max-w-md">
              Estamos trabajando en esta sección. Pronto tendrás acceso a nuestro catálogo completo de mangueras WIPLAS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManguerasWiplast;
