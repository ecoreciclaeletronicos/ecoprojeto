import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Facebook, Instagram, Linkedin, Recycle } from "lucide-react";
import { useState } from "react";

export default function Footerpage() {
  const [, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white ">
      <div className="container mx-auto max-w-6xl ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold">EcoRecicla</span>
            </div>
            <p className="text-gray-400">
              Gestão inteligente de descarte de eletrônicos para um futuro mais
              sustentável.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-green-600"
                asChild
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-green-600"
                asChild
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-green-600"
                asChild
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        <div className="text-center text-gray-400">
          <p>© 2025 EcoRecicla - Projeto Acadêmico ADS - Caxias do Sul, RS</p>
        </div>
      </div>
    </footer>
  );
}
