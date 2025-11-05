import { Card } from "@/components/ui/card";
import { Search, Target, ClipboardList, Lightbulb } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Análisis de entorno",
      description: "Evaluamos la situación actual del cliente, analizando la infraestructura existente, capacidad técnica y condiciones de mercado energético local",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      number: "02",
      title: "Objetivos",
      description: "Definir junto al cliente las metas del proyecto (volumen de biometano a producir, impacto ambiental, análisis de regulaciones gubernamentales).",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: ClipboardList,
      number: "03",
      title: "Plan de acción",
      description: "Cronograma de ejecución, roles, indicadores de desempeño, seguimiento a los índices de satisfacción del cliente por el servicio brindado.",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Lightbulb,
      number: "04",
      title: "Recomendaciones",
      description: "Elaboración del proceso de producción, rutas de comercialización y estrategias para acceder a beneficios y certificaciones brindados por el estado",
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
            <span className="text-primary font-semibold">Nuestra Metodología</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso estructurado y profesional que garantiza el éxito de tu proyecto de biometano
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
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-hero text-white shadow-strong relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para Implementar esta Metodología?
              </h3>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Nuestro equipo está preparado para guiarte en cada paso del proceso hacia la independencia energética
              </p>
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-semibold shadow-lg"
              >
                Solicitar Asesoría Gratuita
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

