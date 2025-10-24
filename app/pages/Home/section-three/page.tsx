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
              A plataforma EcoRecicla surge como uma ferramenta online simples e
              acessível, com o objetivo de conectar a população a pontos de
              coleta e empresas recicladoras.
            </p>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Além de indicar locais de descarte, permite agendamento de coletas
              domiciliares, registro de doações e oferece informações educativas
              sobre reciclagem e remoção segura de dados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
