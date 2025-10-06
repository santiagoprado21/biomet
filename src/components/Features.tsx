import { Card } from "@/components/ui/card";
import { BookOpen, Scale, Users, Lightbulb, BarChart3, Handshake } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Capacitación Técnica",
      description: "Formación especializada en tecnologías de producción y purificación de biogás para tu equipo.",
    },
    {
      icon: Scale,
      title: "Asesoría Regulatoria",
      description: "Acompañamiento completo en trámites legales y cumplimiento de normativas energéticas.",
    },
    {
      icon: Users,
      title: "Enlace con Productores",
      description: "Conectamos a distribuidores con agricultores, industrias y fuentes confiables de biomasa.",
    },
    {
      icon: Lightbulb,
      title: "Consultoría Integral",
      description: "Soluciones técnicas, económicas y ambientales adaptadas a tu proyecto específico.",
    },
    {
      icon: BarChart3,
      title: "Análisis de Viabilidad",
      description: "Estudios de factibilidad económica y técnica para garantizar el éxito de tu inversión.",
    },
    {
      icon: Handshake,
      title: "Soporte Continuo",
      description: "Acompañamiento permanente durante toda la implementación y operación de tu planta.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Características de Nuestro Servicio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un enfoque integral que abarca todos los aspectos de tu transición al biometano
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card hover:bg-gradient-card border-border hover:border-primary/20 shadow-md hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
