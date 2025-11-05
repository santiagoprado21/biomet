import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Director de Operaciones",
      company: "GNV Sur Colombia",
      image: "https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=16a34a&color=fff&size=128",
      rating: 5,
      text: "BioMet nos ayudó a reducir nuestros costos operativos en un 35% mientras mejoramos nuestra huella ambiental. Su equipo nos acompañó en cada paso del proceso.",
    },
    {
      name: "María Elena Gómez",
      role: "Gerente de Sostenibilidad",
      company: "Industrias del Cauca",
      image: "https://ui-avatars.com/api/?name=Maria+Gomez&background=16a34a&color=fff&size=128",
      rating: 5,
      text: "La asesoría regulatoria fue invaluable. Logramos cumplir con todas las normativas ambientales y ahora somos un referente en energía limpia en nuestra región.",
    },
    {
      name: "Jorge Andrés Patiño",
      role: "CEO",
      company: "Distribuidora Valle Verde",
      image: "https://ui-avatars.com/api/?name=Jorge+Patino&background=16a34a&color=fff&size=128",
      rating: 5,
      text: "Gracias a BioMet, logramos independencia energética completa. El retorno de inversión superó nuestras expectativas y ahora ofrecemos un servicio más competitivo.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas que ya han dado el paso hacia la energía sostenible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border shadow-elegant hover:shadow-strong transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Empresas que confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-2xl font-bold text-muted-foreground">GNV+</div>
            <div className="text-2xl font-bold text-muted-foreground">EcoGas</div>
            <div className="text-2xl font-bold text-muted-foreground">Valle Verde</div>
            <div className="text-2xl font-bold text-muted-foreground">BioEnergía SA</div>
            <div className="text-2xl font-bold text-muted-foreground">GreenPower</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

