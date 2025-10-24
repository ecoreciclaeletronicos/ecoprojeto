"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themes-toggle";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function HeaderPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Evita erro de hydration
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <Image
              src={
                theme === "dark"
                  ? "/images/logo_ecorecicla_dark.png"
                  : "/images/logo_ecorecicla_light.png"
              }
              alt="Logo EcoRecicla"
              width={70}
              height={70}
              unoptimized={true}
            />
            <span className="text-2xl font-bold text-green-700">
              EcoRecicla
            </span>
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => scrollToSection("home")}>
              Início
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("equipe")}>
              Equipe
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("sobre")}>
              Sobre
            </Button>
            <ModeToggle />
          </nav>

          {/* Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex items-center justify-center gap-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className="justify-start"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("equipe")}
              className="justify-start"
            >
              Equipe
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("sobre")}
              className="justify-start"
            >
              Sobre
            </Button>
            <ModeToggle />
          </nav>
        )}
      </div>
    </header>
  );
}
