"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Sectionone() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  if (!mounted) return null;

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
          </div>

          <div className="shrink-0">
            <div className="w-60 h-60 rounded-full bg-linear-to-br border-green-900 border-2 flex items-center justify-center">
              <Image
                src={
                  theme === "dark"
                    ? "/images/logo_ecorecicla_dark.png"
                    : "/images/logo_ecorecicla_light.png"
                }
                alt="Logo EcoRecicla"
                width={500}
                height={500}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
