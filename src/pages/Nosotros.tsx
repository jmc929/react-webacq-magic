import { Card } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import logo from "@/assets/Logo-Nombre.png";
import WaveSection from "@/components/WaveSection";

const Nosotros = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Logo */}
      <WaveSection 
        heightClassName="h-[500px] sm:h-[600px]"
        colors={['#D7ECEF', '#CCE7EC', '#C7E4EA', '#BEE0E7', '#B5DCE4', '#B3DBE3']}
        className="py-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up space-y-8">
            <div className="flex justify-center">
              <img 
                src={logo} 
                alt="Logo ACQUAPACK" 
                className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain"
                style={{ transform: 'scale(2.3)' }}
              />
            </div>
            <p className="text-2xl md:text-3xl opacity-90">
              Somos líderes en soluciones de tuberías para el sector agrícola, industrial y minero
            </p>
          </div>
        </div>
      </WaveSection>

      {/* Company Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold mb-6 text-foreground text-center">¿Quiénes Somos?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              <strong className="text-primary text-2xl">ACQUAPACK S.A.S</strong> es una empresa colombiana especializada en la
              distribución e instalación de sistemas de tuberías de alta calidad para diferentes sectores industriales.
              Con años de experiencia en el mercado, nos hemos consolidado como un aliado confiable para proyectos
              de agricultura, minería e industria.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trabajamos con las mejores marcas del mercado, garantizando productos de primera calidad que cumplen
              con los más altos estándares internacionales. Nuestro compromiso es ofrecer soluciones integrales que
              se adapten a las necesidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Misión</h3>
              <p className="text-muted-foreground text-base">
                Proveer soluciones innovadoras en sistemas de tuberías que impulsen el desarrollo sostenible
                de nuestros clientes en los sectores agrícola, industrial y minero.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Visión</h3>
              <p className="text-muted-foreground text-base">
                Ser la empresa líder en Colombia en distribución de sistemas de tuberías, reconocida por nuestra
                calidad, innovación y compromiso con nuestros clientes.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Calidad</h3>
              <p className="text-muted-foreground text-base">
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
            <h2 className="text-4xl font-bold mb-8 text-foreground text-center">
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
                  <p className="text-muted-foreground text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Historical Review */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12 shadow-lg border border-border">
              <h3 className="text-4xl font-bold mb-6 text-primary text-center">Reseña Histórica</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-xl">
                  <strong className="text-foreground">ACQUAPACK SAS</strong> nace en el año 2015, tras adquirir la marca de tubería agricominera Wiplas®, 
                  conservando los altos parámetros de calidad, presentación y servicio al cliente que durante más de 20 años caracterizaron la marca. 
                  Posteriormente la compañía apuesta al desarrollo de una nueva línea de trabajo, incursionando en el diseño y ejecución de proyectos 
                  en los diferentes sectores donde hace presencia, invirtiendo en recursos técnicos, humanos y tecnológicos; fortaleciendo nuestro 
                  portafolio de servicios.
                </p>
                <p className="text-xl">
                  Actualmente, en concordancia con las políticas de calidad, sustentabilidad, sostenibilidad y buscando un equilibrio entre el 
                  desarrollo económico y ambiental, la compañía decide verticalizar su operación, gestionando la implementación de su propia planta 
                  de procesamiento de materia prima; transformando el material plástico reciclable post industrial en polietileno de baja densidad; 
                  autogestión que le ha brindado mayor calidad a los materiales, independencia y competitividad en el mercado.
                </p>
                <p className="text-xl">
                  Es de esta manera como nuestra Compañía <strong className="text-foreground">ACQUAPACK SAS</strong> no sólo ha evolucionado en la mejora de su producto 
                  propio tubería Wiplas®, sino que también se ha propiciado la ampliación de nuestro portafolio de productos y servicios complementarios, 
                  obteniendo exitosos resultados en el proceso de especialización y satisfacción de nuestros grupos de interés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
