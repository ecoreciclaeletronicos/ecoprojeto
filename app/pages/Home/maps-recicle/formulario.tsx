"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Form() {
  const initialFormData = {
    nomeCompleto: "",
    nomeEmpresa: "",
    email: "",
    telefone: "",
    cidade: "",
    mensagem: "",
    politica: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nomeCompleto) newErrors.nomeCompleto = "Nome é obrigatório";
    if (!formData.nomeEmpresa) newErrors.nomeEmpresa = "Empresa é obrigatória";
    if (!formData.email) newErrors.email = "E-mail é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "E-mail inválido";
    if (!formData.telefone) newErrors.telefone = "Telefone é obrigatório";
    if (!formData.cidade) newErrors.cidade = "Cidade é obrigatória";
    if (!formData.mensagem) newErrors.mensagem = "Mensagem é obrigatória";
    if (!formData.politica)
      newErrors.politica = "Você deve concordar com a política";
    return newErrors;
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Dados enviados:", formData);

      resetForm();

      setShowSuccessAlert(true);

      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 4000);
    } else {
      setErrors(validationErrors);
    }
  };

  const primaryGreenBg = "bg-green-600 hover:bg-green-700";
  const lightFormBg = "bg-white";
  const lightFormText = "text-gray-800";
  const lightHeadingText = "text-green-700";

  const darkFormBg = "dark:bg-gray-800";
  const darkFormText = "dark:text-gray-100";
  const darkHeadingText = "dark:text-green-400";

  const inputThemeClasses =
    "bg-white border-gray-300 text-gray-800 placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-green-500 focus:border-green-500";

  return (
    <div
      className={`max-w-4xl mx-auto p-8 ${lightFormBg} ${lightFormText} ${darkFormBg} ${darkFormText} rounded-xl shadow-md border border-green-200 dark:border-green-700 mb-10`}
    >
      {showSuccessAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <Alert className="bg-green-50 border-green-400 text-green-700 max-w-sm mx-auto shadow-2xl p-6 transform transition-all duration-300">
            <AlertTitle className="font-bold text-xl">
              Solicitação enviada!
            </AlertTitle>
            <AlertDescription className="mt-2">
              Dentro de <strong>07 dias úteis</strong> a equipe entrará em
              contato. Agradecemos o seu interesse!
            </AlertDescription>
          </Alert>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-2 ${lightHeadingText} ${darkHeadingText}`}
        >
          Fale Conosco
        </h2>

        <p className="mb-4 text-gray-600 dark:text-gray-300 text-base">
          Entre em contato conosco e descubra como podemos ajudar sua empresa a
          ser mais sustentável.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Input
            name="nomeCompleto"
            placeholder="Nome Completo"
            value={formData.nomeCompleto}
            onChange={handleChange}
            className={`flex-1 ${inputThemeClasses}`}
          />
          <Input
            name="nomeEmpresa"
            placeholder="Nome da Empresa"
            value={formData.nomeEmpresa}
            onChange={handleChange}
            className={`flex-1 ${inputThemeClasses}`}
          />
        </div>
        {(errors.nomeCompleto || errors.nomeEmpresa) && (
          <div className="flex flex-col md:flex-row gap-4">
            {/* Corrigindo cor de erro para dark mode */}
            {errors.nomeCompleto && (
              <p className="text-red-600 dark:text-red-400 text-sm flex-1">
                {errors.nomeCompleto}
              </p>
            )}
            {errors.nomeEmpresa && (
              <p className="text-red-600 dark:text-red-400 text-sm flex-1">
                {errors.nomeEmpresa}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-4">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`flex-1 ${inputThemeClasses}`}
          />
          <Input
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            className={`flex-1 ${inputThemeClasses}`}
          />
        </div>
        {(errors.email || errors.telefone) && (
          <div className="flex flex-col md:flex-row gap-4">
            {errors.email && (
              <p className="text-red-600 dark:text-red-400 text-sm flex-1">
                {errors.email}
              </p>
            )}
            {errors.telefone && (
              <p className="text-red-600 dark:text-red-400 text-sm flex-1">
                {errors.telefone}
              </p>
            )}
          </div>
        )}

        <Input
          name="cidade"
          placeholder="Cidade"
          value={formData.cidade}
          onChange={handleChange}
          className={inputThemeClasses}
        />
        {errors.cidade && (
          <p className="text-red-600 dark:text-red-400 text-sm">
            {errors.cidade}
          </p>
        )}

        <Textarea
          name="mensagem"
          placeholder="Escreva sua mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          className={`min-h-[100px] ${inputThemeClasses}`}
        />
        {errors.mensagem && (
          <p className="text-red-600 dark:text-red-400 text-sm">
            {errors.mensagem}
          </p>
        )}

        <label className="flex items-center gap-3 text-sm cursor-pointer select-none text-gray-600 dark:text-gray-300">
          <input
            type="checkbox"
            name="politica"
            checked={formData.politica}
            onChange={handleChange}
            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 checked:bg-green-600 dark:bg-gray-700 dark:border-gray-600"
          />
          Eu concordo com a{" "}
          <strong className="ml-1 text-green-700 dark:text-green-400">
            Política de Privacidade
          </strong>
        </label>
        {errors.politica && (
          <p className="text-red-600 dark:text-red-400 text-sm">
            {errors.politica}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          className={`${primaryGreenBg} mt-4 font-semibold`}
        >
          Enviar Solicitação
        </Button>
      </form>
    </div>
  );
}
