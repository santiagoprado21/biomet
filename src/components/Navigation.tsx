import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Propuesta", href: "#propuesta" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#")}
              className="flex items-center gap-2 group"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isScrolled
                    ? "bg-gradient-to-br from-green-500 to-emerald-600"
                    : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-xl font-bold transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                BioMet
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="hero"
                size="default"
                onClick={() => scrollToSection("#contacto")}
                className={
                  isScrolled
                    ? ""
                    : "bg-white text-primary hover:bg-white/90"
                }
              >
                Comenzar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-lg">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="hero"
                size="default"
                className="w-full"
                onClick={() => scrollToSection("#contacto")}
              >
                Comenzar
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navigation;

