import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import WaveSection from "@/components/WaveSection";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await fetch("https://formspree.io/f/mwpaeqaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      let json: any = {};
      try {
        json = await res.json();
      } catch {
        json = {};
      }

      const errorMessage =
        json?.errors?.[0]?.message ||
        json?.error ||
        (!res.ok ? "No se pudo enviar" : null);

      if (errorMessage) {
        throw new Error(errorMessage);
      }
  
      toast({ title: "Mensaje enviado", description: "Gracias por escribirnos." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast({ title: "Error", description: "Intenta de nuevo.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-muted-foreground">Contáctanos</h1>
            <p className="text-xl md:text-2xl text-muted-foreground opacity-90 text-center">
              Estamos aquí para ayudarte con tu proyecto
            </p>
          </div>
        </div>
      </WaveSection>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Envíanos un mensaje</CardTitle>
                  <CardDescription className="text-lg">
                    Completa el formulario y te responderemos a la brevedad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="317 439 9679"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tu proyecto..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                       {loading ? "Enviando..." : "Enviar mensaje"}
                    </Button>

                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://www.google.com/maps/place/Cl.+35+%2351-11,+La+Candelaria,+Medell%C3%ADn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-base">
                      <p className="font-medium text-foreground">Dirección</p>
                      <p className="text-muted-foreground">
                        Barrio Perpetuo Socorro
                        <br />
                        Calle 35 #51-11
                        <br />
                        Medellín, Antioquia
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:3174399679"
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-base">
                      <p className="font-medium text-foreground">Teléfono</p>
                      <p className="text-muted-foreground">317 439 9679</p>
                    </div>
                  </a>

                  <a
                    href="mailto:acquapack@acquapackcolombia.com"
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-base">
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground break-all">
                        acquapack@acquapackcolombia.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-3 p-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-base">
                      <p className="font-medium text-foreground">Horario</p>
                      <p className="text-muted-foreground">
                        Lunes a Viernes: 8:00 AM - 6:00 PM
                        <br />
                        Sábados: 8:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Redes Sociales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a
                    href="https://www.instagram.com/acquapack_aqp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-base">
                      <p className="font-medium text-foreground">Instagram</p>
                      <p className="text-muted-foreground">@acquapack_</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.link/dgtbl9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-base">
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">Envíanos un mensaje</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
              Encuéntranos
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0697!2d-75.5766845!3d6.236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44284d32fb5309%3A0x9da774e3f1fe0740!2sCl.%2035%20%2351-11%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación ACQUAPACK"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
