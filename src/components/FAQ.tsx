import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué es el biometano y en qué se diferencia del gas natural?",
      answer: "El biometano es un gas renovable producido a partir de residuos orgánicos (biomasa) mediante digestión anaerobia. Químicamente es idéntico al gas natural, pero con la ventaja de ser 100% renovable, neutro en carbono y producido localmente. Puede utilizarse en la misma infraestructura que el gas natural sin necesidad de modificaciones.",
    },
    {
      question: "¿Cuánto tiempo toma implementar un proyecto de biometano?",
      answer: "El tiempo varía según la escala del proyecto, pero generalmente: evaluación inicial (2-4 semanas), diseño y permisos (2-3 meses), construcción e instalación (4-8 meses), y puesta en marcha (1-2 meses). Un proyecto completo puede tomar entre 8 y 14 meses desde el inicio hasta la operación plena.",
    },
    {
      question: "¿Cuál es la inversión inicial requerida?",
      answer: "La inversión depende de la capacidad de producción deseada. Proyectos pequeños pueden iniciar desde $200,000 USD, mientras que plantas industriales pueden requerir inversiones de $1-5 millones. Ofrecemos análisis de viabilidad gratuito para determinar el tamaño óptimo según tu consumo actual y proyección de ahorro.",
    },
    {
      question: "¿Qué tipo de residuos se pueden utilizar?",
      answer: "Se pueden utilizar diversos tipos de biomasa: residuos agrícolas (estiércol, rastrojos), residuos de la industria alimentaria, lodos de plantas de tratamiento, residuos de mataderos, y fracción orgánica de residuos sólidos urbanos. Te ayudamos a identificar las fuentes más convenientes en tu región.",
    },
    {
      question: "¿El biometano realmente reduce costos?",
      answer: "Sí, significativamente. Nuestros clientes reportan reducciones de 30-45% en costos energéticos. Al producir localmente, eliminas costos de importación, aranceles, y te proteges de la volatilidad del dólar. Además, puedes generar ingresos adicionales vendiendo excedentes o certificados de carbono.",
    },
    {
      question: "¿Qué tipo de soporte técnico ofrecen?",
      answer: "Brindamos soporte integral: asesoría técnica continua, capacitación de personal, mantenimiento preventivo, optimización de procesos, actualización regulatoria, y asistencia en la comercialización de excedentes. Nuestro equipo está disponible 24/7 para emergencias.",
    },
    {
      question: "¿Necesito cambiar mi infraestructura actual?",
      answer: "No. El biometano es compatible con la infraestructura existente de gas natural. Puedes inyectarlo directamente en tus redes, motores, calderas y sistemas actuales sin modificaciones. Esta compatibilidad hace que la transición sea rápida y económica.",
    },
    {
      question: "¿Qué incentivos gubernamentales existen?",
      answer: "Colombia ofrece varios beneficios: deducción del 50% de la inversión en renta, exclusión de IVA en equipos, depreciación acelerada de activos, certificados de carbono comercializables, y tarifas preferenciales en algunos municipios. Te ayudamos a acceder a todos los incentivos disponibles.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Tienes Dudas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respuestas a las preguntas más comunes sobre biometano y nuestros servicios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional help */}
          <div className="mt-12 text-center p-8 bg-gradient-card rounded-xl shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              ¿No encuentras tu respuesta?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está listo para resolver todas tus dudas
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Contactar un Experto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

