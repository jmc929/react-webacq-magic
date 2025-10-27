import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import WaveSection from "@/components/WaveSection";

const AccesoriosPoelsan = () => {
  const products = [
    {
      id: 1,
      name: "Codos y reducciones",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Adaptadores universales",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Abrazaderas de seguridad",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Uniones rápidas",
      image: "https://images.unsplash.com/photo-1581092583537-20d51876f3c3?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Conectores especializados",
      image: "https://images.unsplash.com/photo-1581092446061-9e1e23b12ff1?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Válvulas de control",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    },
  ];

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
              Accesorios Poelsan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground opacity-90">
              Accesorios de alta calidad para mangueras
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-foreground text-center">
                    {product.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccesoriosPoelsan;
