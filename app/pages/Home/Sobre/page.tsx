import { Separator } from "@radix-ui/react-separator";
import { Target, Lightbulb } from "lucide-react";

export default function Sobrepage() {
  return (
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

          <div className="bg-linear-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-8 rounded-lg">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
