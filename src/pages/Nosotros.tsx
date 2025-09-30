import { Card } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const Nosotros = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-lg md:text-xl opacity-90">
              Somos líderes en soluciones de tuberías para el sector agrícola, industrial y minero
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-foreground">¿Quiénes Somos?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-primary">Acquapack S.A.S</strong> es una empresa colombiana especializada en la
                distribución e instalación de sistemas de tuberías de alta calidad para diferentes sectores industriales.
                Con años de experiencia en el mercado, nos hemos consolidado como un aliado confiable para proyectos
                de agricultura, minería e industria.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Trabajamos con las mejores marcas del mercado, garantizando productos de primera calidad que cumplen
                con los más altos estándares internacionales. Nuestro compromiso es ofrecer soluciones integrales que
                se adapten a las necesidades específicas de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Misión</h3>
              <p className="text-muted-foreground">
                Proveer soluciones innovadoras en sistemas de tuberías que impulsen el desarrollo sostenible
                de nuestros clientes en los sectores agrícola, industrial y minero.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Visión</h3>
              <p className="text-muted-foreground">
                Ser la empresa líder en Colombia en distribución de sistemas de tuberías, reconocida por nuestra
                calidad, innovación y compromiso con nuestros clientes.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Calidad</h3>
              <p className="text-muted-foreground">
                Trabajamos exclusivamente con marcas certificadas internacionalmente, asegurando productos
                que cumplen los más altos estándares de calidad y durabilidad.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Experiencia comprobada en el sector",
                "Asesoría técnica especializada",
                "Productos de marcas reconocidas internacionalmente",
                "Soluciones personalizadas para cada proyecto",
                "Servicio postventa garantizado",
                "Entregas puntuales en todo el país",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
