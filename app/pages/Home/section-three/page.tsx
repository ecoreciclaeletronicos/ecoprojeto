import {
  BookOpen,
  Calendar,
  Flag,
  Heart,
  Home,
  MapPin,
  Recycle,
  Smartphone,
} from "lucide-react";

export default function Sectionthree() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 dark:bg-red-950 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-red-700 dark:text-red-400">
              O Problema
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <Flag className="w-6 h-6" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-1">
                  O Brasil gerou aproximadamente{" "}
                  <strong>2,4 milhões de toneladas</strong> de lixo eletrônico
                  em 2022
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <Recycle className="w-6 h-6" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-1">
                  Apenas cerca de <strong>3%</strong> desse volume é reciclado
                  adequadamente
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-1">
                  Mais de <strong>3.400 pontos de coleta</strong> concentrados
                  em capitais e grandes centros
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <Home className="w-6 h-6" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-1">
                  Nos dias atuais<strong> 8 em cada 10 brasileiros</strong>{" "}
                  acumulam lixo eletrônico em casa
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-100 dark:bg-green-950 p-8 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-400">
              Nossa Solução
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <Smartphone className="w-8 h-8" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-1">
                  <strong>Plataforma online</strong> simples e acessível para
                  conectar a população a pontos de coleta e empresas
                  recicladoras
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 " />
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-1">
                  <strong>Localização de pontos de descarte</strong> próximos à
                  sua região
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <Calendar className="w-8 h-8" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-1">
                  <strong>Agendamento de coletas domiciliares</strong> de forma
                  prática e rápida
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-1">
                  <strong>Informações educativas</strong> sobre reciclagem e
                  remoção segura de dados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
