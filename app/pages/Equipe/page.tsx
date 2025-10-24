"use client";

import { useTheme } from "next-themes";
import { Users, Recycle, Instagram, Facebook, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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

  // Função para rolar até a seção
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Equipe Section */}
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

      {/* Fundamentação Section */}
      <section
        id="fundamentacao"
        className="py-16 px-4 bg-white dark:bg-gray-800"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700">
            Fundamentação Teórica
          </h2>
          <Separator className="mb-8" />

          <div className="space-y-12">
            {/* Repetir os blocos de fundamentação */}
            {/* Exemplo de um bloco */}
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Sustentabilidade e Meio Ambiente
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                A forma inadequada com que descartamos aparelhos eletrônicos é
                tida como um dos maiores problemas ambientais de hoje...
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                (HEUSER, 1998; OLIVEIRA, 2010; CUNHA; SILVA, 2019)
              </p>
            </div>
            {/* Adicione os outros blocos de fundamentação aqui */}
          </div>
        </div>
      </section>
      <section
        id="fundamentacao"
        className="py-16 px-4 bg-white dark:bg-gray-800"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700">
            Fundamentação Teórica
          </h2>
          <Separator className="mb-8" />

          <div className="space-y-12">
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Sustentabilidade e Meio Ambiente
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                A forma inadequada com que descartamos aparelhos eletrônicos é
                tida como um dos maiores problemas ambientais de hoje. Ao serem
                deixados de lado em lugares errados, esses itens liberam
                componentes tóxicos que podem contaminar o solo e a água,
                colocando em risco a saúde das pessoas e a vida animal e
                vegetal.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                (HEUSER, 1998; OLIVEIRA, 2010; CUNHA; SILVA, 2019)
              </p>
            </div>

            <Separator />

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Tecnologia da Informação como Aliada
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                A tecnologia tem se mostrado uma grande ajuda na busca por
                soluções para os problemas ambientais. Usar ferramentas de
                modelagem e sistemas de computador permite criar plataformas
                digitais que podem crescer, são fáceis de usar e juntam
                diferentes pessoas. Os sistemas de informação, quando feitos da
                forma certa, podem melhorar os processos, diminuir os gastos e
                ajudar as iniciativas que cuidam do planeta.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                (GUEDES, 2011; CASTELLS, 2003; LAUDON; LAUDON, 2014)
              </p>
            </div>

            <Separator />

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">
                Engajamento Social e Plataformas Digitais
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                Vários estudos mostram que as plataformas digitais podem
                aumentar muito a participação das pessoas em causas ambientais.
                Usar tecnologias simples e fáceis de entender incentiva a
                participação, já que diminui as dificuldades de acesso. As
                soluções digitais práticas ajudam a aumentar a adesão a atitudes
                mais responsáveis, como reciclar e descartar o lixo da forma
                certa.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                (PETRÓ, 2014; ROCHEL, 2014; JENKINS, 2009)
              </p>
            </div>

            <Separator />

            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">
                Desenvolvimento Web e Gestão de Dados
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                Criar sistemas como o EcoRecicla exige conhecimento sobre
                desenvolvimento web e gestão de dados. Um projeto de banco de
                dados bem feito é essencial para que as informações sejam sempre
                corretas e confiáveis. A criação de softwares deve seguir
                práticas que garantam que os sistemas possam crescer, receber
                manutenção e melhorar sempre.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                (HEUSER, 1998; SOMMERVILLE, 2011; PRESSMAN; MAXIM, 2016)
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
