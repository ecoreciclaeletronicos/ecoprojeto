"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Recycle } from "lucide-react";

export default function AbraaeCard() {
  const handleOpenAbree = () => {
    window.open("https://abree.org.br/pontos-de-recebimento");
  };

  const primaryGreenBg =
    "bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700";

  return (
    <div className="flex justify-center items-center m-10">
      <Card className="bg-green-100 dark:bg-green-950 p-8 rounded-lg border border-green-200 dark:border-green-800 shadow-md w-[90%] md:w-[75%] max-w-4xl">
        <CardContent className="p-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <Recycle className="text-green-600 dark:text-green-500 w-10 h-10 mb-2" />
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-500">
              Encontre um ponto de coleta próximo!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
              A <span className="font-semibold">ABREE</span> ajuda a localizar
              locais de descarte de eletrônicos em todo o Brasil. Contribua para
              um futuro mais sustentável e dê o destino correto aos seus
              dispositivos.
            </p>

            <Button
              type="button"
              size="lg"
              onClick={handleOpenAbree}
              className={`${primaryGreenBg} text-white font-semibold px-8 py-6 rounded-xl shadow-md border border-green-700/40 dark:border-green-600/40 transition-all duration-300 hover:scale-105 mt-4`}
            >
              <MapPin className="mr-2 h-5 w-5 text-white" />
              Pontos de Recebimento
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
