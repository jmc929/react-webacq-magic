import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";
import WaveSection from "@/components/WaveSection";
import adaptadorHembra from "@/assets/ADAPTADOR_HEMBRA_CON_ANILLO_DE_REFUERZO_GALVANIZADO.png";
import teeHembra from "@/assets/TEE_HEMBRA_CON_ANILLO_DE_REFUERZO_GALVANIZADO.png";
import adaptadorMachoRapido from "@/assets/ADAPTADOR_MACHO_RAPIDO.png";
import unionRapida from "@/assets/UNION_RAPIDA.png";
import teeRapida from "@/assets/TEE_RAPIDA.png";
import teeRapidaMacho from "@/assets/TEE_RAPIDA_ROSCA_MACHO.png";
import codoRapido from "@/assets/CODO_RAPIDO.png";
import taponRapido from "@/assets/TAPON_RAPIDO.png";
import teeReducidaRapida from "@/assets/TEE_REDUCIDA_RAPIDA.png";
import unionRapidaReducida from "@/assets/UNION_RAPIDA_REDUCIDA.png"
import collar from "@/assets/COLLAR_DE_DERIVACION_CON_PERNO_Y_ANILLO_DE_REFUERZO.png"
import filtroDisco from "@/assets/FILTRO_PLASTICO_DE_DISCO.jpg"
import filtroAnillo from "@/assets/FILTRO_PLASTICO_DE_ANILLO.jpg"

const AccesoriosPoelsan = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Adaptador hembra con anillo de refuerzo galvanizado",
      image: adaptadorHembra,
    },
    {
      id: 2,
      name: "Tee Hembra con anillo de refuerzo Galvanizado",
      image: teeHembra,
    },
    {
      id: 3,
      name: "Adaptador Macho Rapido",
      image: adaptadorMachoRapido,
    },
    {
      id: 4,
      name: "Union rapida",
      image: unionRapida,
    },
    {
      id: 5,
      name: "Tee rapida",
      image: teeRapida,
    },
    {
      id: 6,
      name: "Tee rapida rosca macho",
      image: teeRapidaMacho,
    },
    {
      id: 7,
      name: "Codo rapido",
      image: codoRapido,
    },
    {
      id: 8,
      name: "Tapon rapido",
      image: taponRapido,
    },
    {
      id: 9,
      name: "Tee reducida rapida",
      image: teeReducidaRapida,
    },
    {
      id: 10,
      name: "Union rapida reducida",
      image: unionRapidaReducida,
    },
    {
      id: 11,
      name: "Llave para accesorios y adaptadores",
      image: "https://images.unsplash.com/photo-1581092446061-9e1e23b12ff1?w=400&h=400&fit=crop",
    },
    {
      id: 12,
      name: "Collar de derivacion con perno y anillo de refuerzo galvanizado",
      image: collar,
    },
    {
      id: 13,
      name: "Valvula de bola rapida/hembra npt",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
    },
    {
      id: 14,
      name: "Valvula de bola conexion rapida",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=400&fit=crop",
    },
    {
      id: 15,
      name: "Valvula de acoplamiento rapido con llave (hidrante + Bayoneta)",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=400&h=400&fit=crop",
    },
    {
      id: 16,
      name: "Filtro plastico de disco",
      image: filtroDisco,
    },
    {
      id: 17,
      name: "Filtro plastico de anillo",
      image: filtroAnillo,
    },
    {
      id: 18,
      name: "Union interna",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    },
    {
      id: 19,
      name: "Racor macho",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
    },
    {
      id: 20,
      name: "Tee interna 16MM",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=400&fit=crop",
    },
    {
      id: 21,
      name: "Codo interno 16mm",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=400&h=400&fit=crop",
    },
    {
      id: 22,
      name: "Conector inicial con silleta",
      image: "https://images.unsplash.com/photo-1581092583537-20d51876f3c3?w=400&h=400&fit=crop",
    },
    {
      id: 23,
      name: "Obturador Final 16mm",
      image: "https://images.unsplash.com/photo-1581092446061-9e1e23b12ff1?w=400&h=400&fit=crop",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Accesorios POELSAN
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground opacity-90">
              Accesorios de alta calidad para mangueras
            </p>
          </div>
        </div>
      </WaveSection>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Button asChild variant="outline">
              <Link to="/catalogo">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al catálogo
              </Link>
            </Button>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No se encontraron productos con "{searchTerm}"
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
          )}
        </div>
      </section>
    </div>
  );
};

export default AccesoriosPoelsan;
