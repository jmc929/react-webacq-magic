import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Info } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import llaveAccesorios from "@/assets/LLAVE_PARA_ACCESORIOS_Y_ADAPTADORES.png"
import valvularapida from "@/assets/VALVULA_DE_BOLA_RAPIDA_HEMBRA.png"
import valvulaAcoplamiento from "@/assets/VALVULA_DE_ACOPLAMIENTO.png"
import valvulaBolaConexionRapida from "@/assets/VALVULA_BOLA.png"
import unionInterna from "@/assets/UNION_INTERNA.jpg"
import racorMacho from "@/assets/RACOR_MACHO.png"
import teeInterna from "@/assets/TEE_INTERNA.png"
import codoInterno from "@/assets/CODO_INTERNO.png"
import conectorInicial from "@/assets/CONECTOR_INICIAL.png"
import obturadorFinal from "@/assets/OBTURADOR_FINAL.png"

type Product = {
  id: number;
  name: string;
  image: string;
  sizes: string;
  pressure: string;
  applications: string;
};

const AccesoriosPoelsan = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Adaptador hembra con anillo de refuerzo galvanizado",
      image: adaptadorHembra,
      sizes: "20 x 1/2\", 20 x 3/4\", 25 x 1/2\", 25 x 3/4\", 25 x 1\", 32 x 3/4\", 32 x 1\", 32 x 1 1/4\", 40 x 1\", 40 x 1 1/4\", 40 x 1 1/2\", 50 x 1 1/4\", 50 x 1 1/2\", 50 x 2\", 63 x 2 1/2\", 75 x 2\", 75 x 2 1/2\", 75 x 3\", 90 x 2\", 90 x 2 1/2\", 90 x 3\", 90 x 4\", 110 x 2\", 110 x 2 1/2\", 110 x 3\", 63 x 1 1/2\", 63 x 2\", 110 x 4\"",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistemas de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 2,
      name: "Tee Hembra con anillo de refuerzo Galvanizado",
      image: teeHembra,
      sizes: "20 x 1/2\" x 20, 20 x 3/4\" x 20, 25 x 1/2\" x 25, 25 x 3/4\" x 25, 25 x 1\" x 25, 32 x 1/2\" x 32, 32 x 3/4\" x 32, 32 x 1\" x 32, 32 x 1 1/4\" x 32, 40 x 3/4\" x 40, 40 x 1\" x 40, 40 x 1 1/4\" x 40, 40 x 1 1/2\" x 40, 50 x 3/4\" x 50, 50 x 1\" x 50, 50 x 1 1/4\" x 50, 50 x 1 1/2\" x 50, 50 x 2\" x 50, 63 x 1\" x 63, 63 x 1 1/4\" x 63, 63 x 1 1/2\" x 63, 63 x 2\" x 63, 63 x 2 1/2\" x 63, 75 x 2\" x 75, 75 x 2 1/2\" x 75, 75 x 3\" x 75, 90 x 2 1/2\" x 90, 90 x 3\" x 90, 90 x 4\" x 90, 110 x 2 1/2\" x 110, 110 x 3\" x 110, 110 x 4\" x 110",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistema de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 3,
      name: "Adaptador Macho Rapido",
      image: adaptadorMachoRapido,
      sizes: "20 x 1/2\", 20 x 3/4\", 25 x 1/2\", 25 x 3/4\", 25 x 1\", 32 x 1/2\", 32 x 3/4\", 32 x 1\", 32 x 1 1/4\", 40 x 1\", 40 x 1 1/4\", 40 x 1 1/2\", 50 x 1 1/4\", 50 x 1 1/2\", 50 x 2\", 63 x 1 1/2\", 63 x 2\", 63 x 2 1/2\", 75 x 2\", 75 x 2 1/2\", 75 x 3\", 90 x 2\", 90 x 2 1/2\", 90 x 3\", 90 x 4\", 110 x 2\", 110 x 2 1/2\", 110 x 3\", 110 x 4\"",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistema de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 4,
      name: "Union rapida",
      image: unionRapida,
      sizes: "20 x 20, 25 x 25, 32 x 32, 40 x 40, 50 x 50, 63 x 63, 75 x 75, 90 x 90, 110 x 110",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistema de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 5,
      name: "Tee rapida",
      image: teeRapida,
      sizes: "16x16x16, 20 x 20 x 20, 25 x 25 x 25, 32 x 32 x 32, 40 x 40 x 40, 50 x 50 x 50, 63 x 63 x 63, 75 x 75 x 75, 90 x 90 x 90, 110 x 110 x 110",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistema de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 6,
      name: "Tee rapida rosca macho",
      image: teeRapidaMacho,
      sizes: "20 x 1/2\" x 20, 20 x 3/4\" x 20, 25 x 1/2\" x 25, 25 x 3/4\" x 25, 25 x 1\" x 25, 32 x 3/4\" x 32, 32 x 1\" x 32, 32 x 1 1/4\" x 32, 40 x 1\" x 40, 40 x 1 1/4\" x 40, 40 x 1 1/2\" x 40, 50 x 1\" x 50, 50 x 1 1/4\" x 50, 50 x 1 1/2\" x 50, 50 x 2\" x 50, 63 x 1 1/4\" x 63, 63 x 1 1/2\" x 63, 63 x 2\" x 63, 63 x 2 1/2\" x 63, 75 x 2\" x 75, 75 x 2 1/2\" x 75, 75 x 3\" x 75, 90 x 2\" x 90, 90 x 2 1/2\" x 90, 90 x 3\" x 90, 90 x 4\" x 90, 110 x 2 1/2\" x 110, 110 x 3\" x 110, 110 x 4\" x 110",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistema de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 7,
      name: "Codo rapido",
      image: codoRapido,
      sizes: "20 x 20, 25 x 25, 32 x 32, 40 x 40, 50 x 50, 63 x 63, 75 x 75, 90 x 90, 110 x 110",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistema de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 8,
      name: "Tapon rapido",
      image: taponRapido,
      sizes: "20, 25, 32, 40, 50, 63, 75, 90, 110",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistema de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 9,
      name: "Tee reducida rapida",
      image: teeReducidaRapida,
      sizes: "25 x 20 x 25, 32 x 20 x 32, 32 x 25 x 32, 40 x 25 x 40, 40 x 32 x 40, 50 x 25 x 50, 50 x 32 x 50, 50 x 40 x 50, 63 x 25 x 63, 63 x 32 x 63, 63 x 40 x 63, 63 x 50 x 63, 75 x 50 x 75, 75 x 63 x 75, 110 x 63 x 110, 110 x 75 x 110, 110 x 90 x 110, 90 x 63 x 90, 90 x 75 x 90",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistema de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 10,
      name: "Union rapida reducida",
      image: unionRapidaReducida,
      sizes: "25x20, 32x20, 32x25, 40x20, 40x25, 40x32, 50x25, 50x32, 50x40, 63x25, 63x32, 63x40, 63x50, 75x50, 75x63, 90x63, 90x75, 110x63, 110x75, 110x90",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistema de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 11,
      name: "Llave para accesorios y adaptadores",
      image: llaveAccesorios,
      sizes: "20, 25, 32, 40, 50, 63, 75, 90, 110",
      pressure: "Ø 20 mm – Ø 110 mm : PN 16",
      applications: "Redes urbanas de agua potable, Sistema de paisajismo, Riego agrícola, Invernaderos",
    },
    {
      id: 12,
      name: "Collar de derivacion con perno y anillo de refuerzo galvanizado",
      image: collar,
      sizes: "25 x 1/2\", 25 x 3/4\", 32 x 1/2\", 32 x 3/4\", 32 x 1\", 40 x 1/2\", 40 x 3/4\", 40 x 1\", 50 x 1/2\", 50 x 3/4\", 50 x 1\", 50 x 1 1/4\", 63 x 1/2\", 63 x 3/4\", 63 x 1\", 63 x 1 1/4\", 63 x 1 1/2\", 75 x 1/2\", 75 x 3/4\", 75 x 1\", 75 x 1 1/4\", 75 x 1 1/2\", 75 x 2\", 90 x 1/2\", 90 x 3/4\", 90 x 1\", 90 x 1 1/4\", 90 x 1 1/2\", 90 x 2\", 110 x 1/2\", 110 x 3/4\", 110 x 1\", 110 x 1 1/4\", 110 x 1 1/2\", 110 x 2\"",
      pressure: "No info",
      applications: "No info",
    },
    {
      id: 13,
      name: "Valvula de bola rapida/hembra npt",
      image: valvularapida,
      sizes: "20 x 1/2\", 25 x 3/4\", 32 x 1\", 40 x 1 1/4\", 50 x 1 1/2\", 63 x 2\"",
      pressure: "½” – ¾” – 1“ – 1 ¼” – 1 ½” – 2“ : PN 10, 2 ½” – 3“ – 4” : PN 6 ",
      applications: "Sistema de jardinería, Riego agrícola",
    },
    {
      id: 14,
      name: "Valvula de bola conexion rapida",
      image: valvulaBolaConexionRapida,
      sizes: "20 x 20, 25 x 25, 32 x 32, 40 x 40, 50 x 50, 63 x 63",
      pressure: "16 bar",
      applications: "Apertura y cierre rápido, Riego por aspersión",
    },
    {
      id: 15,
      name: "Valvula de acoplamiento rapido con llave (hidrante + Bayoneta)",
      image: valvulaAcoplamiento,
      sizes: "3/4\"",
      pressure: "PN 6",
      applications: "Sistemas paisajisticos, Riego agrícola, Instalaciones Deportivas",
    },
    {
      id: 16,
      name: "Filtro plastico de disco",
      image: filtroDisco,
      sizes: "3/4\", 1\", 1 1/4\", 1 1/2\", 2\"",
      pressure: "PN 10",
      applications: "Sistemas paisajisticos, Riego agrícola",
    },
    {
      id: 17,
      name: "Filtro plastico de anillo",
      image: filtroAnillo,
      sizes: "3/4\", 1\", 1 1/4\", 1 1/2\", 2\"",
      pressure: "PN 10",
      applications: "Sistemas paisajisticos, Riego agrícola",
    },
    {
      id: 18,
      name: "Union interna",
      image: unionInterna,
      sizes: "16 x 16",
      pressure: "Contacte para mas información",
      applications: "Sistemas paisajisticos, Riego agrícola, Invernaderos",
    },
    {
      id: 19,
      name: "Racor macho",
      image: racorMacho,
      sizes: "16 x 1/2\", 16 x 3/4\"",
      pressure: "Contacte para mas información",
      applications: "Sistemas paisajisticos, Riego agrícola, Invernaderos",
    },
    {
      id: 20,
      name: "Tee interna 16MM",
      image: teeInterna,
      sizes: "16x16x16",
      pressure: "Contacte para mas información",
      applications: "Sistemas paisajisticos, Riego agrícola, InvernaderosS",
    },
    {
      id: 21,
      name: "Codo interno 16mm",
      image: codoInterno,
      sizes: "16x16",
      pressure: "Contacte para mas información",
      applications: "Sistemas paisajisticos, Riego agrícola, Invernaderos",
    },
    {
      id: 22,
      name: "Conector inicial con silleta",
      image: conectorInicial,
      sizes: "16x16",
      pressure: "Contacte para mas información",
      applications: "Sistemas paisajisticos, Riego agrícola, Invernaderos",
    },
    {
      id: 23,
      name: "Obturador Final 16mm",
      image: obturadorFinal,
      sizes: "16, 20",
      pressure: "Contacte para mas información",
      applications: "Sistemas paisajisticos, Riego agrícola, Invernaderos",
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
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild variant="outline">
              <Link to="/catalogo">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al catálogo
              </Link>
            </Button>
            
            <div className="relative w-full sm:flex-1 sm:max-w-md">
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
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="aspect-square overflow-hidden bg-muted relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <Info size={20} />
                        <span>Ver detalles</span>
                      </div>
                    </div>
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

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="w-full max-w-[calc(100vw-2rem)] sm:max-w-3xl lg:max-w-4xl p-4 sm:p-6">
          <div className="flex max-h-[calc(100vh-6rem)] flex-col gap-4">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold sm:text-2xl">{selectedProduct?.name}</DialogTitle>
            </DialogHeader>
            <div className="grid flex-1 gap-6 overflow-y-auto md:grid-cols-2 md:pr-2">
              <div className="flex items-center justify-center rounded-lg bg-muted p-4">
                <img
                  src={selectedProduct?.image}
                  alt={selectedProduct?.name}
                  className="max-h-[45vh] w-full object-contain"
                />
              </div>
              <div className="space-y-4">
                {selectedProduct?.sizes && (
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Tamaños disponibles</h4>
                    <ul className="max-h-48 list-disc list-inside space-y-1 overflow-y-auto pr-1 text-sm text-muted-foreground">
                      {selectedProduct.sizes
                        .split(",")
                        .map((size) => size.trim())
                        .filter(Boolean)
                        .map((size, index) => (
                          <li key={index}>
                            {size}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="mb-2 text-lg font-semibold">Presión de trabajo</h4>
                  <p className="text-sm text-muted-foreground">{selectedProduct?.pressure}</p>
                </div>
                {selectedProduct?.applications && (
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Áreas de instalación</h4>
                    <ul className="max-h-48 list-disc list-inside space-y-1 overflow-y-auto pr-1 text-sm text-muted-foreground">
                      {selectedProduct.applications
                        .split(",")
                        .map((application) => application.trim())
                        .filter(Boolean)
                        .map((application, index) => (
                          <li key={index}>
                            {application}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccesoriosPoelsan;
