const HUBSPOT_PORTAL_ID = "51205616";
const HUBSPOT_FORM_ID = "01d7d945-6811-4c8f-8d49-afdb8d30c0e1";
const HUBSPOT_API_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

interface ApiRequest {
  method: string;
  body: unknown;
}

interface ApiResponse {
  status(code: number): { json(body: unknown): void };
  json(body: unknown): void;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { fields, context } = req.body as {
    fields?: Array<{ name: string; value: string }>;
    context?: { pageUri?: string; pageName?: string };
  };

  if (!fields || !Array.isArray(fields) || fields.length === 0) {
    return res.status(400).json({ error: "Campos inválidos ou ausentes" });
  }

  try {
    const response = await fetch(HUBSPOT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields, context }),
    });

    const text = await response.text();
    let data;

    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { message: text };
    }

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Erro ao enviar dados para o HubSpot",
        details: data,
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("HubSpot proxy request failed:", error);
    return res.status(500).json({
      error: "Falha na conexão com o HubSpot",
      details: String(error),
    });
  }
}
