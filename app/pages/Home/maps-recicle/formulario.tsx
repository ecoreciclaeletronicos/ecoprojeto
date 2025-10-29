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

  const errorTextClass = "text-red-600 dark:text-red-400 text-sm mt-1 ml-1";
  const alignedErrorTextClass = "text-red-600 dark:text-red-400 text-sm mt-1";

  return (
    <div className="mx-4 sm:mx-auto sm:max-w-4xl pb-10">
      <div
        className={`p-4 sm:p-8 ${lightFormBg} ${lightFormText} ${darkFormBg} ${darkFormText} rounded-xl shadow-md border border-green-200 dark:border-green-700`}
      >
        {showSuccessAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <Alert className="bg-green-50 border-green-400 text-green-700 max-w-sm mx-auto shadow-2xl p-6 transform transition-all duration-300 text-center">
              <AlertTitle className="font-bold text-xl mb-4">
                Solicitação enviada!
              </AlertTitle>
              <AlertDescription>
                A equipe entrará em contato até 07 dias úteis. Agradecemos o seu
                interesse!
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
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            a ser mais sustentável.
          </p>

          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  name="nomeCompleto"
                  placeholder="Nome Completo"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  className={inputThemeClasses}
                />
                {errors.nomeCompleto && (
                  <p className={errorTextClass}>{errors.nomeCompleto}</p>
                )}
              </div>

              <div className="flex-1">
                <Input
                  name="nomeEmpresa"
                  placeholder="Nome da Empresa"
                  value={formData.nomeEmpresa}
                  onChange={handleChange}
                  className={inputThemeClasses}
                />
                {errors.nomeEmpresa && (
                  <p className={errorTextClass}>{errors.nomeEmpresa}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputThemeClasses}
                />
                {errors.email && (
                  <p className={errorTextClass}>{errors.email}</p>
                )}
              </div>

              <div className="flex-1">
                <Input
                  name="telefone"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={inputThemeClasses}
                />
                {errors.telefone && (
                  <p className={errorTextClass}>{errors.telefone}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <Input
              name="cidade"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={handleChange}
              className={inputThemeClasses}
            />
            {errors.cidade && <p className={errorTextClass}>{errors.cidade}</p>}
          </div>

          <div>
            <Textarea
              name="mensagem"
              placeholder="Escreva sua mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              className={`min-h-[100px] ${inputThemeClasses}`}
            />
            {errors.mensagem && (
              <p className={errorTextClass}>{errors.mensagem}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-1 text-sm cursor-pointer select-none text-gray-600 dark:text-gray-300">
              <input
                type="checkbox"
                name="politica"
                checked={formData.politica}
                onChange={handleChange}
                className="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 checked:bg-green-600 dark:bg-gray-700 dark:border-gray-600"
              />
              Eu concordo com a
              <strong className="text-green-700 dark:text-green-400">
                Política de Privacidade
              </strong>
            </label>
            {errors.politica && (
              // *** AQUI É ONDE USAMOS A NOVA CLASSE ***
              <p className={alignedErrorTextClass}>{errors.politica}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className={`${primaryGreenBg} mt-4 font-semibold`}
          >
            Enviar Solicitação
          </Button>
        </form>
      </div>
    </div>
  );
}
