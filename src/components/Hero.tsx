import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Zap } from "lucide-react";
import heroImage from "@/assets/hero-biomet.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10" />
        <img 
          src={heroImage} 
          alt="Energía limpia y sostenible con biometano" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 animate-pulse">
        <Leaf className="w-16 h-16 text-white/20" />
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse delay-300">
        <Zap className="w-12 h-12 text-white/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white font-medium">🌱 Energía Renovable del Futuro</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            ¿Dependes del Gas Fósil?
            <span className="block mt-2 text-secondary-foreground">
              Es Hora de Cambiar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            La volatilidad de precios, el riesgo de desabastecimiento y las presiones regulatorias 
            amenazan la continuidad de tu negocio. <strong>BioMet</strong> te ayuda a alcanzar la 
            independencia energética con biometano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Descubre Cómo Ayudamos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('propuesta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nuestra Propuesta
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-white/80 text-sm">Energía Renovable</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">-40%</div>
              <div className="text-white/80 text-sm">Reducción Costos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">0</div>
              <div className="text-white/80 text-sm">Emisiones Netas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
