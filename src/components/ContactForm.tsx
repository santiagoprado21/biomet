import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  empresa: z.string().trim().max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().max(20),
  mensaje: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      contactSchema.parse(formData);
      
      setIsSubmitting(true);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      // Reset form
      setFormData({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error en el formulario",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Listo para la Transición Energética?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Déjanos tus datos y te ayudaremos a encontrar la mejor solución de biometano para tu negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <Card className="p-8 bg-gradient-card border-none shadow-elegant mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:contacto@biomet.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contacto@biomet.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Teléfono</p>
                    <a href="tel:+573001234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +57 300 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Ubicación</p>
                    <p className="text-muted-foreground">
                      Cali, Valle del Cauca<br />
                      Colombia
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Experiencia en energías renovables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Soluciones personalizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Acompañamiento integral</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Compromiso con la sostenibilidad</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre Completo *</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="border-input focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa">Empresa</Label>
                <Input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="border-input focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-input focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+57 300 123 4567"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="border-input focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje *</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-input focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
