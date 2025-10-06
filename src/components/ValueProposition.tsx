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
    <section id="propuesta" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
                className="p-8 bg-gradient-card border-none shadow-elegant hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
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
        <div className="max-w-4xl mx-auto bg-gradient-hero rounded-2xl p-10 text-white shadow-strong">
          <h3 className="text-3xl font-bold mb-6 text-center">
            El Futuro de la Energía es Sostenible
          </h3>
          <div className="space-y-4 text-lg">
            <p className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <span>
                Brindamos <strong>asesoría técnica, regulatoria y de mercado</strong> integral 
                para que logres una transición energética exitosa.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <span>
                El biometano puede integrarse a tu red existente sin necesidad de cambiar 
                tu infraestructura actual.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <span>
                Contribuye a minimizar el impacto del efecto invernadero y asegura un 
                futuro sostenible para las próximas generaciones.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
