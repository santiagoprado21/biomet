import { Card } from "@/components/ui/card";
import { FileSearch, Users, Settings, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileSearch,
      number: "01",
      title: "Evaluación Inicial",
      description: "Analizamos tu situación actual, consumo energético y necesidades específicas para diseñar la solución perfecta.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      number: "02",
      title: "Conexión con Productores",
      description: "Te conectamos con productores confiables de biomasa y facilitamos las alianzas estratégicas necesarias.",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Settings,
      number: "03",
      title: "Implementación Técnica",
      description: "Acompañamiento en la instalación, capacitación de personal y cumplimiento de todos los requisitos regulatorios.",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Operación y Soporte",
      description: "Soporte continuo para optimizar tu producción de biometano y garantizar el máximo retorno de inversión.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold">Proceso Simple</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso transparente y estructurado para llevar tu transición energética al éxito
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="relative p-6 bg-card border-border hover:border-primary/50 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-muted/10 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            ¿Listo para comenzar tu transición energética?
          </p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Agenda una Consulta Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

