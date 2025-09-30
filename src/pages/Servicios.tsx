import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  ClipboardCheck, 
  Truck, 
  HeadphonesIcon, 
  GraduationCap, 
  FileCheck 
} from "lucide-react";

const Servicios = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Asesoría Técnica",
      description: "Análisis y recomendaciones para tu proyecto",
      details: [
        "Evaluación de necesidades específicas",
        "Recomendación de productos adecuados",
        "Cálculo de materiales necesarios",
        "Planos y especificaciones técnicas",
        "Optimización de costos",
      ],
    },
    {
      icon: Wrench,
      title: "Instalación Profesional",
      description: "Equipo especializado en montaje de sistemas",
      details: [
        "Personal técnico certificado",
        "Instalación de sistemas completos",
        "Pruebas de presión y calidad",
        "Garantía de instalación",
        "Cumplimiento de normativas",
      ],
    },
    {
      icon: Truck,
      title: "Logística y Entrega",
      description: "Distribución eficiente a nivel nacional",
      details: [
        "Entregas en todo Colombia",
        "Seguimiento de pedidos en tiempo real",
        "Empaque especializado",
        "Transporte seguro",
        "Tiempos de entrega garantizados",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Soporte Técnico",
      description: "Asistencia continua para tus proyectos",
      details: [
        "Atención telefónica especializada",
        "Resolución de dudas técnicas",
        "Soporte en instalación",
        "Mantenimiento preventivo",
        "Disponibilidad en horario comercial",
      ],
    },
    {
      icon: GraduationCap,
      title: "Capacitación",
      description: "Formación para uso óptimo de productos",
      details: [
        "Talleres prácticos de instalación",
        "Capacitación en mantenimiento",
        "Mejores prácticas de la industria",
        "Certificados de capacitación",
        "Material didáctico incluido",
      ],
    },
    {
      icon: FileCheck,
      title: "Garantía y Postventa",
      description: "Respaldo total en todos nuestros productos",
      details: [
        "Garantía de fábrica extendida",
        "Atención de reclamos ágil",
        "Reposición de productos defectuosos",
        "Seguimiento post-instalación",
        "Asesoría para ampliaciones",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-lg md:text-xl opacity-90">
              Soluciones integrales para acompañarte en cada etapa de tu proyecto
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
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
                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-lg mb-8 opacity-90">
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
