import { BookOpen, Calendar, MapPin } from "lucide-react";

export default function Sectiontwo() {
  return (
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
              Localize pontos de coleta próximos a você e empresas recicladoras
              através de um mapa interativo.
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
  );
}
