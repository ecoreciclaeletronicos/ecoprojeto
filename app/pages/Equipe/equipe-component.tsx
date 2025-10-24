"use client";

import { Users } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Membro {
  nome: string;
  competencias: string;
}

interface EquipeProps {
  equipe: Membro[];
}

export default function EquipeComponent({ equipe }: EquipeProps) {
  return (
    <section id="equipe" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 flex items-center gap-3">
          <Users className="w-10 h-10" />
          Nossa Equipe
        </h2>
        <Separator className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {equipe.map((membro, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-green-100 text-green-700 text-lg font-bold">
                    {membro.nome
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white leading-tight">
                  {membro.nome}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {membro.competencias}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
