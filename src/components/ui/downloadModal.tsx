import React, { useState } from "react";
import { Button } from "./button";
import { FaCheckCircle } from "react-icons/fa";

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_FORM_ID;

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // const hubSpotPersonalKey =
  //   "CiRuYTEtOGQzYy0yMTk4LTRjMjgtYTg0OS0yZTdkZjZiODQ3N2MQ8Ku1GBjYotkqKhkABeaRgr9_fUMrjCzEnvPcbLH3c_QPEBQJSgNuYTE";
  // const APIKey = "cdad5996-06e3-4c29-af60-3c7ec16771cd";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const doDownload = () => {
      setIsSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setIsDownloading(true);
        const link = document.createElement("a");
        link.href = "/guia-alimentacao-gestacao.pdf";
        link.download = "Guia de orientações alimentação na gestação.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
          setIsDownloading(false);
          onClose();
          setIsSuccess(false);
        }, 2000);
      }, 1000);
    };

    try {
      // Envia direto para HubSpot Forms API (mais simples e sem backend)
      if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
        alert(
          "HubSpot não está configurado. Defina VITE_HUBSPOT_PORTAL_ID e VITE_HUBSPOT_FORM_ID no .env e reinicie o dev server.",
        );
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              { name: "email", value: formData.email },
              { name: "firstname", value: formData.nome },
              { name: "phone", value: formData.celular },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        },
      );

      if (!response.ok) {
        console.error("HubSpot Forms API error", await response.text());
        alert("Erro ao cadastrar. Tente novamente.");
        setIsSubmitting(false);
        return;
      }

      doDownload();
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex h-screen w-full items-center justify-center backdrop-blur-lg">
      <div className="w-full max-w-lg rounded-lg bg-white py-6">
        {isSuccess ? (
          <div className="text-center">
            <h2 className="mb-4 text-xl font-bold">
              Cadastro realizado com sucesso!
            </h2>
            {isDownloading ? (
              <div className="flex flex-col items-center">
                <div className="border-primary mb-4 h-8 w-8 animate-spin rounded-full border-b-2"></div>
                <p>Baixando arquivo...</p>
              </div>
            ) : (
              <p>Arquivo baixado com sucesso!</p>
            )}
          </div>
        ) : (
          <>
            <div className="m-auto flex max-w-4xl flex-col px-4">
              {/* <h2 className="font-merriweather mb-4 text-2xl font-bold">
                Guia de alimentação gestacional.
              </h2> */}
              <p className="text-lg font-semibold">Woohoo!</p>
              <div className="m-auto mb-6 w-full">
                <p>Neste guia você vai aprender:</p>
                <p className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-green-600" /> O que realmente
                  importa na alimentação durante a gestação
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-green-600" /> Como montar
                  refeições equilibradas de forma simples
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-green-600" /> Os principais
                  erros que aumentam riscos na gravidez
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-green-600" /> Como a nutrição
                  pode ajudar a prevenir complicações
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col px-6">
              <div className="mb-4">
                <label
                  htmlFor="nome"
                  className="mb-1 block text-sm font-medium"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full rounded border p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded border p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="celular"
                  className="mb-1 block text-sm font-medium"
                >
                  Celular
                </label>
                <input
                  type="tel"
                  name="celular"
                  id="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  className="w-full rounded border p-2"
                />
              </div>
              <div className="flex justify-between gap-2 pt-5">
                <Button
                  type="button"
                  onClick={onClose}
                  variant="outline"
                  className="border-none"
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Baixar"}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
