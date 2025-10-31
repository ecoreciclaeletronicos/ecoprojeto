"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footerpage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <footer className="py-4 bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-4 text-center">
          <div className="flex items-center gap-2 justify-center mb-4">
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
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              EcoRecicla
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Gestão inteligente de descarte de eletrônicos para um futuro mais
            sustentável.
          </p>
          <p className="mt-10 tracking-wide">© 2025 EcoRecicla</p>
        </div>
      </div>
    </footer>
  );
}
