import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Droplets, Cog, Mountain, ArrowRight } from "lucide-react";
import WaveSection from "@/components/WaveSection";

const Catalogo = () => {
  const categories = [
    {
      icon: Package,
      title: "Accesorios Poelsan",
      description: "Accesorios de alta calidad para mangueras",
      products: [
        "Codos y reducciones",
        "Adaptadores universales",
        "Abrazaderas de seguridad",
        "Uniones rápidas",
        "Conectores especializados",
      ],
      applications: ["Agricultura", "Industria", "Riego"],
    },
    {
      icon: Droplets,
      title: "Mangueras Wiplast",
      description: "Mangueras de diferentes calibres y especificaciones",
      products: [
        "Manguera de polietileno",
        "Diferentes calibres",
        "Alta resistencia y durabilidad",
      ],
      applications: ["Agricultura", "Industria", "Minería"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <WaveSection 
        heightClassName="h-[200px] sm:h-[250px]"
        colors={['#E8F4F8', '#D1E9F0', '#B8DDE8', '#A0D1E0', '#87C5D8', '#6FB9D0']}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-muted-foreground">Nuestro Catálogo</h1>
            <p className="text-xl md:text-2xl text-muted-foreground opacity-90">
              Amplia gama de productos para todos los sectores industriales
            </p>
          </div>
        </div>
      </WaveSection>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const categoryLinks = ["/catalogo/accesorios-poelsan", "/catalogo/mangueras-wiplast"];
              return (
                <Link key={index} to={categoryLinks[index]} className="group">
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full border-2 hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-3xl group-hover:text-primary transition-colors">{category.title}</CardTitle>
                            <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <CardDescription className="text-lg">{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground text-lg">Productos:</h4>
                        <ul className="space-y-2">
                          {category.products.map((product, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-base">{product}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground text-lg">Aplicaciones:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.applications.map((app, idx) => (
                            <Badge key={idx} variant="secondary">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-2 flex items-center text-sm text-primary font-medium">
                        Ver productos
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Marcas Certificadas</h2>
            <p className="text-xl text-muted-foreground">
              Trabajamos con las marcas más reconocidas del mercado: <strong>Wiplast</strong>,{" "}
              <strong>Poelsan</strong> y <strong>Altamira Water</strong>, garantizando productos
              de la más alta calidad y durabilidad.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge variant="outline" className="text-base px-4 py-2">
                Certificación ISO
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                Garantía de fábrica
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                Soporte técnico
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Necesitas una cotización personalizada?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos y te ayudaremos a encontrar los productos perfectos para tu proyecto
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Catalogo;
