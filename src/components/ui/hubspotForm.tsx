import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hbspt?: any;
  }
}

function loadHubspotScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.hbspt) return resolve();

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Falha ao carregar HubSpot"));
    document.body.appendChild(script);
  });
}

export function HubspotForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadHubspotScript()
      .then(() => {
        if (!window.hbspt || !containerRef.current) return;
        window.hbspt.forms.create({
          portalId: "51205616",
          formId: "01d7d945-6811-4c8f-8d49-afdb8d30c0e1",
          region: "na1",
          target: "#hubspot-form",
        });
      })
      .catch((err) => {
        console.error("Erro ao carregar HubSpot:", err);
      });
  }, []);

  return (
    <div
      id="hubspot-form"
      className="max-h-max overflow-y-hidden"
      ref={containerRef}
    />
  );
}
