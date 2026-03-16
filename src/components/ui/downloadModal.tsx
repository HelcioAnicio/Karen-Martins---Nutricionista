import React, { useState } from "react";
import { Button } from "./button";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio para "hotspot" - substitua pela API real
    try {
      const response = await fetch("/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setIsSubmitting(false);
        // Iniciar download após sucesso
        setTimeout(() => {
          setIsDownloading(true);
          // Simular download
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
          }, 2000); // Simular tempo de download
        }, 1000);
      } else {
        alert("Erro ao cadastrar. Tente novamente.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6">
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
            <h2 className="mb-4 text-xl font-bold">Baixe o Guia Gratuito</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full rounded border p-2"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded border p-2"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">
                  Celular
                </label>
                <input
                  type="tel"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  className="w-full rounded border p-2"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" onClick={onClose} variant="outline">
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
