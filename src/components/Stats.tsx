import { TrendingUp, Users, Leaf, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Reducción Promedio de Costos",
      description: "Ahorro comprobado en gastos energéticos",
    },
    {
      icon: Users,
      value: "50+",
      label: "Proyectos Exitosos",
      description: "Empresas que ya realizaron la transición",
    },
    {
      icon: Leaf,
      value: "10,000",
      label: "Toneladas CO₂ Evitadas",
      description: "Contribución anual a la sostenibilidad",
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfacción del Cliente",
      description: "Clientes que recomiendan nuestros servicios",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados que Hablan por Sí Mismos
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Impacto real medido en nuestros proyectos de biometano
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4 group-hover:bg-white/30 transition-colors">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold mb-2 text-white">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/70">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional impact statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-2xl font-semibold mb-4">
              Únete a la Revolución Energética
            </p>
            <p className="text-lg text-white/80">
              Cada proyecto de biometano que implementamos no solo reduce costos, sino que contribuye 
              activamente a la lucha contra el cambio climático y fortalece la economía local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

