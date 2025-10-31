"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, User } from "lucide-react";

export default function Form() {
  const initialFormDataEmpresa = {
    nomeCompleto: "",
    nomeEmpresa: "",
    email: "",
    telefone: "",
    cidade: "",
    mensagem: "",
    politica: false,
  };

  const initialFormDataPessoa = {
    nomeCompleto: "",
    email: "",
    telefone: "",
    cidade: "",
    mensagem: "",
    politica: false,
  };

  // Estados
  const [tipoFormulario, setTipoFormulario] = useState<"empresa" | "pessoa">(
    "empresa"
  );
  const [formDataEmpresa, setFormDataEmpresa] = useState(
    initialFormDataEmpresa
  );
  const [formDataPessoa, setFormDataPessoa] = useState(initialFormDataPessoa);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleTipoChange = (tipo: "empresa" | "pessoa") => {
    setTipoFormulario(tipo);
    setErrors({});
  };

  const handleChangeEmpresa = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormDataEmpresa((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleChangePessoa = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormDataPessoa((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const data =
      tipoFormulario === "empresa" ? formDataEmpresa : formDataPessoa;
    const newErrors: { [key: string]: string } = {};
    if (!data.nomeCompleto) newErrors.nomeCompleto = "Nome é obrigatório";
    if (tipoFormulario === "empresa" && !formDataEmpresa.nomeEmpresa)
      newErrors.nomeEmpresa = "Empresa é obrigatória";
    if (!data.email) newErrors.email = "E-mail é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = "E-mail deve conter @ e . para ser válido";
    if (!data.telefone) newErrors.telefone = "Telefone é obrigatório";
    if (!data.cidade) newErrors.cidade = "Cidade é obrigatória";
    if (!data.mensagem) newErrors.mensagem = "Mensagem é obrigatória";
    if (!data.politica)
      newErrors.politica = "Você deve concordar com a política";
    return newErrors;
  };

  const resetForm = () => {
    if (tipoFormulario === "empresa")
      setFormDataEmpresa(initialFormDataEmpresa);
    else setFormDataPessoa(initialFormDataPessoa);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log(
        "Dados enviados:",
        tipoFormulario === "empresa" ? formDataEmpresa : formDataPessoa
      );
      resetForm();
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 4000);
    } else {
      setErrors(validationErrors);
    }
  };

  const inputThemeClasses =
    "bg-white border-gray-300 text-gray-800 placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-green-500 focus:border-green-500";

  const errorTextClass = "text-red-600 dark:text-red-400 text-sm mt-1 ml-1";

  const data = tipoFormulario === "empresa" ? formDataEmpresa : formDataPessoa;
  const handleChange =
    tipoFormulario === "empresa" ? handleChangeEmpresa : handleChangePessoa;

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="mx-auto max-w-5xl">
        {showSuccessAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <Alert className="bg-green-50 border-green-400 text-green-700 max-w-sm mx-auto shadow-2xl p-6 text-center">
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

        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent mb-4">
            Fale Conosco
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você ou sua
            empresa a ser mais sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card
            onClick={() => handleTipoChange("empresa")}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              tipoFormulario === "empresa"
                ? "border-green-600 dark:border-green-500 shadow-lg ring-2 ring-green-600 dark:ring-green-500"
                : "border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600"
            }`}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-3 w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Building2
                  className={`w-8 h-8 ${
                    tipoFormulario === "empresa"
                      ? "text-green-600 dark:text-green-400"
                      : "text-green-500 dark:text-green-500"
                  }`}
                />
              </div>
              <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">
                Empresa
              </CardTitle>
              <CardDescription>Para representantes e empresas</CardDescription>
            </CardHeader>
          </Card>

          <Card
            onClick={() => handleTipoChange("pessoa")}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              tipoFormulario === "pessoa"
                ? "border-green-600 dark:border-green-500 shadow-lg ring-2 ring-green-600 dark:ring-green-500"
                : "border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600"
            }`}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-3 w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <User
                  className={`w-8 h-8 ${
                    tipoFormulario === "pessoa"
                      ? "text-green-600 dark:text-green-400"
                      : "text-green-500 dark:text-green-500"
                  }`}
                />
              </div>
              <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">
                Pessoa Física
              </CardTitle>
              <CardDescription>Para contato individual</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="shadow-xl border-green-200 dark:border-green-700">
          <CardHeader>
            <CardTitle className="text-3xl text-green-700 dark:text-green-400">
              {tipoFormulario === "empresa"
                ? "Formulário Empresarial"
                : "Formulário Individual"}
            </CardTitle>
            <CardDescription>
              Preencha os campos abaixo para entrar em contato
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Input
                name="nomeCompleto"
                placeholder="Nome Completo"
                value={data.nomeCompleto}
                onChange={handleChange}
                className={inputThemeClasses}
              />
              {errors.nomeCompleto && (
                <p className={errorTextClass}>{errors.nomeCompleto}</p>
              )}

              {tipoFormulario === "empresa" && (
                <>
                  <Input
                    name="nomeEmpresa"
                    placeholder="Nome da Empresa"
                    value={formDataEmpresa.nomeEmpresa}
                    onChange={handleChange}
                    className={inputThemeClasses}
                  />
                  {errors.nomeEmpresa && (
                    <p className={errorTextClass}>{errors.nomeEmpresa}</p>
                  )}
                </>
              )}

              <Input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                className={inputThemeClasses}
              />
              {errors.email && <p className={errorTextClass}>{errors.email}</p>}

              <Input
                name="telefone"
                type="tel"
                placeholder="Telefone"
                pattern="[\d\s()+-]{8,20}"
                title="Digite um telefone válido"
                autoComplete="tel"
                value={data.telefone}
                onChange={handleChange}
                className={inputThemeClasses}
              />
              {errors.telefone && (
                <p className={errorTextClass}>{errors.telefone}</p>
              )}

              <Input
                name="cidade"
                placeholder="Cidade"
                value={data.cidade}
                onChange={handleChange}
                className={inputThemeClasses}
              />
              {errors.cidade && (
                <p className={errorTextClass}>{errors.cidade}</p>
              )}

              <Textarea
                name="mensagem"
                placeholder="Escreva sua mensagem"
                value={data.mensagem}
                onChange={handleChange}
                className={`min-h-[120px] ${inputThemeClasses}`}
              />
              {errors.mensagem && (
                <p className={errorTextClass}>{errors.mensagem}</p>
              )}

              <label className="flex items-center gap-2 text-sm cursor-pointer select-none text-gray-600 dark:text-gray-300">
                <input
                  type="checkbox"
                  name="politica"
                  checked={data.politica}
                  onChange={handleChange}
                  className="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 checked:bg-green-600 dark:bg-gray-700 dark:border-gray-600"
                />
                Eu concordo com a{" "}
                <strong className="text-green-700 dark:text-green-400">
                  Política de Privacidade
                </strong>
              </label>
              {errors.politica && (
                <p className={errorTextClass}>{errors.politica}</p>
              )}

              <Button
                onClick={handleSubmit}
                size="lg"
                className="bg-green-600 hover:bg-green-700 mt-2 font-semibold text-base h-12"
              >
                Enviar Solicitação
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
