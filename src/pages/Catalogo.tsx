import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Droplets, Cog, Mountain } from "lucide-react";

const Catalogo = () => {
  const categories = [
    {
      icon: Droplets,
      title: "Sistemas de Riego",
      description: "Tuberías y accesorios para riego agrícola",
      products: [
        "Tuberías de PVC presión",
        "Mangueras de riego",
        "Aspersores y microaspersores",
        "Filtros y válvulas",
        "Cintas de goteo",
      ],
      applications: ["Agricultura", "Horticultura", "Invernaderos"],
    },
    {
      icon: Cog,
      title: "Aplicaciones Industriales",
      description: "Soluciones para procesos industriales",
      products: [
        "Tuberías de alta presión",
        "Válvulas industriales",
        "Conexiones especiales",
        "Sistemas de conducción",
        "Accesorios técnicos",
      ],
      applications: ["Industria", "Manufactura", "Procesamiento"],
    },
    {
      icon: Mountain,
      title: "Sector Minero",
      description: "Equipamiento robusto para minería",
      products: [
        "Tuberías de alta resistencia",
        "Mangueras para lodos",
        "Sistemas de bombeo",
        "Válvulas de seguridad",
        "Equipos especializados",
      ],
      applications: ["Minería", "Extracción", "Transporte de minerales"],
    },
    {
      icon: Package,
      title: "Accesorios y Complementos",
      description: "Todo lo que necesitas para tu proyecto",
      products: [
        "Codos y reducciones",
        "Adaptadores",
        "Abrazaderas",
        "Uniones rápidas",
        "Pegantes y sellantes",
      ],
      applications: ["Todo tipo de instalaciones"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestro Catálogo</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Amplia gama de productos para todos los sectores industriales
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-3xl">{category.title}</CardTitle>
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
                  </CardContent>
                </Card>
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
