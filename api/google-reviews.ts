import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;

  if (!apiKey || !placeId) {
    return res
      .status(500)
      .json({ error: "Google API key or Place ID not configured" });
  }

  const params = new URLSearchParams({
    place_id: placeId,
    fields: "name,rating,reviews",
    key: apiKey,
    language: "pt-BR",
  });

  const url = `https://maps.googleapis.com/maps/api/place/details/json?${params}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({
        error: "Failed to fetch Google reviews",
        details: String(error),
      });
  }
}
