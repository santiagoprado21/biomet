import { Card } from "@/components/ui/card";
import { Linkedin, Mail, GraduationCap } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ricardo Derazo",
      role: "CEO",
      career: "Ingeniería Bioquímica",
      image: "/RicardoDerazo.png",
      linkedin: "#",
      email: "ricardo.derazo@icesi.edu.co",
    },
    {
      name: "Santiago Tamayo",
      role: "Técnico",
      career: "Ingeniería Bioquímica",
      image: "/SantiagoTamayo.png",
      linkedin: "#",
      email: "santiago.tamayo@icesi.edu.co",
    },
    {
      name: "Santiago Prado",
      role: "Scrum Master",
      career: "Ingeniería de Sistemas e Industrial",
      image: "/SantiagoPrado.png",
      linkedin: "#",
      email: "santiago.prado@icesi.edu.co",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Proyecto Universidad ICESI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estudiantes comprometidos con la transición energética sostenible de Colombia
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative bg-white border-none shadow-elegant hover:shadow-strong transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 p-6">
                {/* Photo */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Badge overlay */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                    <span className="text-xs font-semibold text-primary">ICESI</span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {member.career}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary-hover rounded-lg flex items-center justify-center transition-all group/btn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-primary group-hover/btn:text-white transition-colors" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary-hover rounded-lg flex items-center justify-center transition-all group/btn"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4 text-primary group-hover/btn:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* University Info Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white shadow-strong border-none relative overflow-hidden">
            {/* Logo ICESI (placeholder - reemplazar con logo real) */}
            <div className="absolute top-4 right-4 opacity-5">
              <GraduationCap className="w-32 h-32 text-primary" />
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-foreground">Universidad ICESI</h3>
                  <p className="text-sm text-muted-foreground">Cali, Valle del Cauca, Colombia</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Facultad de Ingeniería, Diseño y Ciencias Aplicadas</strong>
                <br />
                Proyecto de consultoría integral en biometano desarrollado como parte de nuestra 
                formación académica, aplicando conocimientos en energías renovables, sostenibilidad 
                y gestión empresarial.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-gradient-subtle rounded-lg">
                  <p className="text-2xl font-bold text-primary">2025</p>
                  <p className="text-sm text-muted-foreground">Año del Proyecto</p>
                </div>
                <div className="px-6 py-3 bg-gradient-subtle rounded-lg">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Compromiso</p>
                </div>
                <div className="px-6 py-3 bg-gradient-subtle rounded-lg">
                  <p className="text-2xl font-bold text-primary">♻️</p>
                  <p className="text-sm text-muted-foreground">Sostenibilidad</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;

