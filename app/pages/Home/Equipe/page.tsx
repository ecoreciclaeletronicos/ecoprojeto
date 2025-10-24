"use client";

import { useTheme } from "next-themes";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Equipe() {
  const { theme } = useTheme();

  const equipe = [
    {
      nome: "Alexandre Cesar Bressiani",
      competencias:
        "Vendas consultivas B2B, licitações públicas, negociação e gestão de contratos. Experiência em Administração, Design Gráfico e Marketing.",
    },
    {
      nome: "Franco Conrado de Oliveira",
      competencias:
        "Técnico em Eletrotécnica, experiência em SAP ERP, AutoCAD, análise de dados e desenvolvimento web.",
    },
    {
      nome: "Giovani Lorenzet de Oliveira",
      competencias:
        "Técnico em Mecânica, experiência em rotinas administrativas, financeiras e de RH. Conhecimentos em desenvolvimento web.",
    },
    {
      nome: "Henrique Zanella",
      competencias:
        "Desenvolvedor web frontend, experiência em ERP, especialista em Next.js, React, TailwindCSS e Shadcn UI.",
    },
    {
      nome: "Mateus Luís Morbach",
      competencias:
        "Técnico em Eletrotécnica, foco em automação e otimização de processos. Conhecimentos em Python e JavaScript.",
    },
    {
      nome: "Vívian Fouchy de Campos",
      competencias:
        "Analista de negócios de TI, experiência em projetos e gestão de demandas com foco em controladoria e financeiro.",
    },
  ];

  return (
    <main>
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

          <div className="bg-green-50 dark:bg-green-950 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-green-700">
              Instituição
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                  Curso
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Análise e Desenvolvimento de Sistemas
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                  Localização
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Caxias do Sul, RS
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                  Ano
                </p>
                <p className="text-gray-600 dark:text-gray-400">2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
