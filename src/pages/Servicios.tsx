import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WaveSection from "@/components/WaveSection";

// Import images
import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";
import image5 from "@/assets/5.png";
import image6 from "@/assets/6.png";
import image7 from "@/assets/7.png";
import image8 from "@/assets/8.png";

const Servicios = () => {
  const services = [
    {
      icon: image1,
      title: "Elaboración de plantas de tratamiento de agua",
      description: "Diseñamos e implementamos sistemas completos de purificación y tratamiento de agua para uso industrial, agrícola y comunitario. Nuestras soluciones garantizan agua de calidad cumpliendo con estándares nacionales e internacionales.",
    },
    {
      icon: image2,
      title: "Venta de tubería polietileno",
      description: "Distribuimos tubería de polietileno de alta densidad (HDPE) y baja densidad (LDPE) de las mejores marcas. Ideal para sistemas de riego, conducción de agua potable, minería y aplicaciones industriales con garantía de durabilidad.",
    },
    {
      icon: image3,
      title: "Elaboración de Sistemas de bombeo solar",
      description: "Implementamos sistemas de bombeo impulsados por energía solar, una solución sustentable y eficiente para zonas rurales sin acceso a red eléctrica. Reducimos costos operativos y contribuimos al medio ambiente.",
    },
    {
      icon: image4,
      title: "Elaboración de sistemas de riegos",
      description: "Diseñamos e instalamos sistemas de riego por goteo, aspersión y microaspersión personalizados. Optimizamos el uso del agua y maximizamos la productividad de cultivos con tecnología de punta.",
    },
    {
      icon: image5,
      title: "Elaboración de fumiductos",
      description: "Desarrollamos sistemas especializados para la distribución y aplicación de agroquímicos de manera segura y eficiente. Minimizamos pérdidas y garantizamos una aplicación uniforme en cultivos.",
    },
    {
      icon: image6,
      title: "Elaboración de acueductos veredales",
      description: "Ejecutamos proyectos integrales de abastecimiento de agua para comunidades rurales. Desde la captación hasta la distribución, mejorando la calidad de vida de las poblaciones veredales.",
    },
    {
      icon: image7,
      title: "Proyectos agrícolas y ganaderos",
      description: "Ofrecemos soluciones completas para el sector agropecuario: desde sistemas de riego y bebederos hasta infraestructura para manejo de cultivos y ganado. Aumentamos la productividad de su operación.",
    },
    {
        icon: image8,
      title: "Venta de accesorios rápidos para tubería",
      description: "Amplio inventario de accesorios, conexiones, válvulas y herrajes para instalaciones rápidas y confiables. Compatible con todas las marcas líderes del mercado, facilitando la instalación y mantenimiento.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <WaveSection 
        heightClassName="h-[200px] sm:h-[250px]"
        colors={['#F0F8FF', '#E1F2FF', '#D2ECFF', '#C3E6FF', '#B4E0FF', '#A5DAFF']}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-muted-foreground">Nuestros Servicios</h1>
            <p className="text-xl md:text-2xl text-muted-foreground opacity-90">
              Soluciones integrales para acompañarte en cada etapa de tu proyecto
            </p>
          </div>
        </div>
      </WaveSection>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-gradient-to-br from-white to-brand-cyan/5">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={service.icon} 
                        alt={service.title}
                        className="h-32 w-32 object-contain"
                      />
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-1 bg-gradient-to-r from-primary to-brand-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              Proceso de Trabajo
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Consulta Inicial",
                  description: "Analizamos tus necesidades y objetivos del proyecto",
                },
                {
                  step: "2",
                  title: "Propuesta Técnica",
                  description: "Desarrollamos una solución personalizada con cotización detallada",
                },
                {
                  step: "3",
                  title: "Suministro",
                  description: "Preparamos y entregamos los productos en el sitio de tu proyecto",
                },
                {
                  step: "4",
                  title: "Instalación",
                  description: "Nuestro equipo realiza el montaje profesional del sistema",
                },
                {
                  step: "5",
                  title: "Seguimiento",
                  description: "Brindamos soporte continuo y verificamos el funcionamiento óptimo",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl mb-8 opacity-90 text-center">
            Nuestro equipo está preparado para brindarte la mejor solución
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contacto">Solicitar servicio</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
