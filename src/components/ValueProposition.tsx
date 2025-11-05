import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, TrendingDown, Recycle } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Independencia Energética",
      description: "Reduce tu dependencia del gas fósil importado y protégete de la volatilidad del mercado internacional.",
    },
    {
      icon: TrendingDown,
      title: "Estabilidad de Precios",
      description: "El biometano producido localmente no está sujeto a fluctuaciones del dólar ni crisis geopolíticas.",
    },
    {
      icon: CheckCircle,
      title: "Cumplimiento Regulatorio",
      description: "Adelántate a las presiones gubernamentales sobre cambio energético y sostenibilidad ambiental.",
    },
    {
      icon: Recycle,
      title: "Impacto Ambiental Positivo",
      description: "Contribuye a la economía circular aprovechando residuos orgánicos para generar energía limpia.",
    },
  ];

  return (
    <section id="propuesta" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold">¿Por Qué BioMet?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestra Propuesta de Valor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ayudamos a distribuidores de GNV, gas natural y usuarios domésticos a acceder a 
            fuentes de energía renovable mediante el biometano
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-white border-none shadow-elegant hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Value Statement */}
        <div className="max-w-4xl mx-auto bg-gradient-hero rounded-2xl p-10 text-white shadow-strong relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 text-center">
              El Futuro de la Energía es Sostenible
            </h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-start gap-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-green-300" />
                <span>
                  Brindamos <strong className="text-green-300">asesoría técnica, regulatoria y de mercado</strong> integral 
                  para que logres una transición energética exitosa.
                </span>
              </p>
              <p className="flex items-start gap-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-green-300" />
                <span>
                  El biometano puede integrarse a tu red existente sin necesidad de cambiar 
                  tu infraestructura actual.
                </span>
              </p>
              <p className="flex items-start gap-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-green-300" />
                <span>
                  Contribuye a minimizar el impacto del efecto invernadero y asegura un 
                  futuro sostenible para las próximas generaciones.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
