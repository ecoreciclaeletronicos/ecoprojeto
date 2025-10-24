"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Linkedin,
  Recycle,
  MapPin,
  Calendar,
  BookOpen,
  Target,
  Lightbulb,
  Menu,
  X,
} from "lucide-react";
import Equipe from "../Equipe/page";

export default function EcoRecicla() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <Recycle className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-green-700">
                EcoRecicla
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => scrollToSection("home")}>
                Início
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("sobre")}>
                Sobre
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("equipe")}>
                Equipe
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("fundamentacao")}
              >
                Fundamentação
              </Button>
            </nav>

            {/* Mobile Menu Button */}
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

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 flex flex-col gap-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("home")}
                className="justify-start"
              >
                Início
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("sobre")}
                className="justify-start"
              >
                Sobre
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
                onClick={() => scrollToSection("fundamentacao")}
                className="justify-start"
              >
                Fundamentação
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
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
                eletrônicos têm gerado um desafio ambiental significativo: o
                lixo eletrônico.
              </p>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                No mundo, de acordo com a ONU, são descartadas mais de 50
                milhões de toneladas de resíduos eletrônicos por ano, e no
                Brasil apenas uma pequena parte é reciclada corretamente.
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
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl">
                <Recycle className="w-40 h-40 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-green-50 dark:bg-green-950 rounded-lg hover:shadow-lg transition-shadow">
              <MapPin className="w-16 h-16 text-green-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Pontos de Coleta
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Localize pontos de coleta próximos a você e empresas
                recicladoras através de um mapa interativo.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 dark:bg-green-950 rounded-lg hover:shadow-lg transition-shadow">
              <Calendar className="w-16 h-16 text-green-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Agendamento
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Agende coletas domiciliares de forma simples e prática, sem sair
                de casa.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 dark:bg-green-950 rounded-lg hover:shadow-lg transition-shadow">
              <BookOpen className="w-16 h-16 text-green-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Educação
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Aprenda sobre reciclagem e remoção segura de dados dos seus
                dispositivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem and Solution Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-950 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-700 dark:text-red-400">
                O Problema
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🇧🇷</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    O Brasil gerou aproximadamente{" "}
                    <strong>2,4 milhões de toneladas</strong> de lixo eletrônico
                    em 2022
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">♻️</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    Apenas cerca de <strong>3%</strong> desse volume é reciclado
                    adequadamente
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">📍</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    Mais de <strong>3.400 pontos de coleta</strong> concentrados
                    em capitais e grandes centros
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🏠</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>8 em cada 10 brasileiros</strong> acumulam lixo
                    eletrônico em casa
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-400">
                Nossa Solução
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                A plataforma EcoRecicla surge como uma ferramenta online simples
                e acessível, com o objetivo de conectar a população a pontos de
                coleta e empresas recicladoras.
              </p>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Além de indicar locais de descarte, permite agendamento de
                coletas domiciliares, registro de doações e oferece informações
                educativas sobre reciclagem e remoção segura de dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-700 flex items-center gap-3">
            <Target className="w-10 h-10" />
            Sobre o Projeto
          </h2>
          <Separator className="mb-8" />

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-green-600">
                <Target className="w-6 h-6" />
                Objetivo
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                O projeto busca facilitar o descarte correto de eletrônicos e
                promover a conscientização ambiental, ao mesmo tempo em que
                possibilita a aplicação prática de conhecimentos técnicos em
                desenvolvimento web e uso de APIs de mapas.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
                <Lightbulb className="w-6 h-6" />
                Justificativa
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                A criação da plataforma EcoRecicla combina dois pontos cruciais:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-6 text-gray-700 dark:text-gray-300">
                <li>
                  A urgência de estimular o descarte correto de lixo eletrônico
                </li>
                <li>
                  A aplicação de conhecimentos acadêmicos e profissionais em
                  tecnologia
                </li>
                <li>
                  O uso de ferramentas como HTML, CSS, JavaScript e APIs abertas
                </li>
                <li>
                  O desenvolvimento de soluções práticas para problemas
                  socioambientais
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Impacto Esperado</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-xl text-green-600 mb-4">
                    Social e Ambiental
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Aproximar pessoas dos locais de coleta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Incentivar práticas sustentáveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Aumentar consciência ambiental</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-blue-600 mb-4">
                    Acadêmico e Profissional
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Desenvolvimento de interfaces responsivas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Integração de APIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Gestão de dados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Unir teoria e prática</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Tecnologias Utilizadas
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "TailwindCSS",
                  "TypeScript",
                  "APIs de Mapas",
                  "Shadcn UI",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Equipe />

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Recycle className="w-8 h-8 text-green-400" />
                <span className="text-xl font-bold">EcoRecicla</span>
              </div>
              <p className="text-gray-400">
                Gestão inteligente de descarte de eletrônicos para um futuro
                mais sustentável.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
              <div className="flex flex-col gap-2">
                <Button
                  variant="link"
                  className="justify-start text-gray-400 hover:text-white p-0"
                  onClick={() => scrollToSection("home")}
                >
                  Início
                </Button>
                <Button
                  variant="link"
                  className="justify-start text-gray-400 hover:text-white p-0"
                  onClick={() => scrollToSection("sobre")}
                >
                  Sobre
                </Button>
                <Button
                  variant="link"
                  className="justify-start text-gray-400 hover:text-white p-0"
                  onClick={() => scrollToSection("equipe")}
                >
                  Equipe
                </Button>
                <Button
                  variant="link"
                  className="justify-start text-gray-400 hover:text-white p-0"
                  onClick={() => scrollToSection("fundamentacao")}
                >
                  Fundamentação
                </Button>
              </div>
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
    </div>
  );
}
