"use client";
import { Button } from "@/components/ui/button";
import { Recycle } from "lucide-react";
import { useState } from "react";

export default function Sectionone() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center">
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-green-700">
              EcoRecicla
            </h1>
            <p className="text-xl md:text-2xl text-green-600 font-semibold">
              Gestão de descarte de eletrônicos
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              O avanço tecnológico e a crescente dependência de aparelhos
              eletrônicos têm gerado um desafio ambiental significativo: o lixo
              eletrônico.
            </p>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
              No mundo, de acordo com a ONU, são descartadas mais de 50 milhões
              de toneladas de resíduos eletrônicos por ano, e no Brasil apenas
              uma pequena parte é reciclada corretamente.
            </p>
            <div className="flex gap-4 mt-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Começar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("sobre")}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="shrink-0">
            <div className="w-64 h-64 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl">
              <Recycle className="w-40 h-40 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
