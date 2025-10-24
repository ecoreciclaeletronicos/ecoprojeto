import { Separator } from "@radix-ui/react-separator";
import { Facebook, Instagram, Linkedin, Recycle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footerpage() {
  return (
    <footer className="py-4 bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800">
      <div className="continer mx-auto max-wxl flex flex-col items-center">
        <div className="mb-4 text-center">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Recycle className="w-8 h-8 text-green-600 dark:text-green-400" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              EcoRecicla
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Gestão inteligente de descarte de eletrônicos para um futuro mais
            sustentável.
          </p>
        </div>

        <Separator className="bg-gray-300 dark:bg-gray-700 my-8 w-full" />

        <div className="text-center text-gray-500 dark:text-gray-400 py-2">
          <p className="tracking-wide">
            © 2025 EcoRecicla - Projeto Acadêmico ADS - Caxias do Sul, RS
          </p>
        </div>
      </div>
    </footer>
  );
}
