import { type FormEvent, useEffect, useState } from "react";

const HUBSPOT_PORTAL_ID = "51205616";
const HUBSPOT_FORM_ID = "01d7d945-6811-4c8f-8d49-afdb8d30c0e1";
const HUBSPOT_DIRECT_API_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

type FormStatus = "idle" | "submitting" | "success" | "error";

export function HubspotForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status !== "success") return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Preencha todos os campos obrigatórios para receber o guia.");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const payload = {
        fields: [
          { name: "email", value: email.trim() },
          { name: "mobilephone", value: phone.trim() },
          { name: "firstname", value: name.trim() },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      const response = await fetch(HUBSPOT_DIRECT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await response.text();
      if (!response.ok) {
        console.error("HubSpot direct error:", response.status, text);
        throw new Error(text || `HubSpot request failed: ${response.status}`);
      }

      setStatus("success");
    } catch (err) {
      console.error("HubSpot form submit error:", err);
      setStatus("error");
      setError(
        "Não foi possível enviar o formulário. Por favor, tente novamente em alguns instantes.",
      );
    }
  };

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_120px_rgba(100,116,139,0.12)] md:p-8">
      {status === "success" ? (
        <div className="space-y-6 text-center">
          <div className="bg-primary/10 text-primary mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <span className="text-3xl">✓</span>
          </div>
          <h2 className="text-center text-3xl font-semibold text-slate-900">
            ✨Guia liberado com sucesso!{" "}
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-6 text-slate-600">
            Este material foi preparado para ajudar você a cuidar da sua saúde e
            do desenvolvimento do seu bebê.
          </p>
          <a
            href="/guia-alimentacao-gestacao.pdf"
            download
            className="bg-primary hover:bg-primary/90 inline-flex w-full justify-center rounded-2xl px-6 py-3 text-sm font-bold tracking-[0.08em] text-white uppercase transition"
          >
            Baixar o guia
          </a>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          aria-describedby="hubspot-form-description"
        >
          <div className="space-y-3 text-center">
            <p className="text-lg font-semibold text-slate-900">
              Você está se alimentando da melhor forma na gestação?
            </p>
            <p
              id="hubspot-form-description"
              className="mx-auto max-w-xl text-sm leading-6 text-slate-500"
            >
              Baixe gratuitamente um guia claro e confiável sobre o que
              realmente faz diferença na gravidez.
            </p>
          </div>

          <div className="grid gap-4">
            <label className="block text-sm font-medium text-slate-700">
              Nome*
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Seu nome"
                className="focus:border-primary focus:ring-primary/20 mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition outline-none focus:ring-2"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Número de celular*
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                type="tel"
                placeholder="(00) 90000-0000"
                className="focus:border-primary focus:ring-primary/20 mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition outline-none focus:ring-2"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              E-mail*
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="seu.email@exemplo.com"
                className="focus:border-primary focus:ring-primary/20 mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition outline-none focus:ring-2"
              />
            </label>
          </div>

          <label className="flex items-start gap-3 text-sm text-slate-700">
            <input
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              type="checkbox"
              className="text-primary focus:ring-primary mt-1 h-4 w-4 rounded border-slate-300"
            />
            <span>
              Quero receber orientações da <strong>Karen Martins</strong>
            </span>
          </label>

          {error ? (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-primary hover:bg-primary/90 inline-flex w-full justify-center rounded-2xl px-6 py-3 text-sm font-bold tracking-[0.08em] text-white uppercase transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Enviando..." : "BAIXAR O GUIA"}
          </button>

          <p className="text-xs leading-5 text-slate-500">
            Seus dados estão protegidos. Usaremos suas informações para enviar o
            guia e entrar em contato com orientações sobre sua gestação. Você
            pode solicitar a interrupção quando quiser.
          </p>
        </form>
      )}
    </div>
  );
}
