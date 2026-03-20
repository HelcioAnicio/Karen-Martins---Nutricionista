import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface FeedbackData {
  name: string;
  from: string;
  feedback: string;
  rating?: number;
}

const defaultFeedbacks: FeedbackData[] = [
  {
    name: "Evelyn Petrucceli",
    from: "Avaliação Google",
    feedback:
      "Ótimo atendimento! A Dra. Karen Martins me atendeu super bem, e tirou todas as minhas dúvidas.",
    rating: 5,
  },
  {
    name: "Alice Ferreira",
    from: "Avaliação Google",
    feedback:
      "Desde o primeiro atendimento, acolhimento com muito carinho, agilidade, atenção e profissionalismo. Parabéns e muito obrigada!",
    rating: 5,
  },
  {
    name: "Valquiria Aguiar",
    from: "Avaliação Google",
    feedback:
      "Uma profissional extremamente atenciosa e dedicada. Transmite segurança e esclarece as dúvidas",
    rating: 5,
  },
];

export const FeedBack = () => {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API;
  const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACES_PLACE_ID;

  type GooglePlaceReview = {
    author_name?: string;
    rating?: number;
    text?: string;
  };

  type GooglePlaceDetailsResponse = {
    status: string;
    error_message?: string;
    result?: {
      reviews?: GooglePlaceReview[];
    };
  };

  const [feedbacks, setFeedbacks] = useState<FeedbackData[]>(() => {
    const getCacheKey = () => `google-place-reviews-${GOOGLE_PLACE_ID}`;
    const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 1 dia

    if (!GOOGLE_PLACE_ID) return defaultFeedbacks;

    try {
      const raw = localStorage.getItem(getCacheKey());
      if (!raw) return defaultFeedbacks;

      const parsed = JSON.parse(raw) as {
        timestamp: number;
        reviews: FeedbackData[];
      };

      if (Date.now() - parsed.timestamp > CACHE_TTL_MS) {
        localStorage.removeItem(getCacheKey());
        return defaultFeedbacks;
      }

      return Array.isArray(parsed.reviews) && parsed.reviews.length
        ? parsed.reviews
        : defaultFeedbacks;
    } catch {
      return defaultFeedbacks;
    }
  });
  console.log("feedbacks: ", feedbacks);

  useEffect(() => {
    const getCacheKey = () => `google-place-reviews-${GOOGLE_PLACE_ID}`;
    const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 1 dia

    const loadCachedReviews = (): FeedbackData[] | null => {
      if (!GOOGLE_PLACE_ID) return null;

      try {
        const raw = localStorage.getItem(getCacheKey());
        if (!raw) return null;

        const parsed = JSON.parse(raw) as {
          timestamp: number;
          reviews: FeedbackData[];
        };

        if (Date.now() - parsed.timestamp > CACHE_TTL_MS) {
          localStorage.removeItem(getCacheKey());
          return null;
        }

        return Array.isArray(parsed.reviews) ? parsed.reviews : null;
      } catch {
        return null;
      }
    };

    const saveCachedReviews = (reviews: FeedbackData[]) => {
      if (!GOOGLE_PLACE_ID) return;
      try {
        localStorage.setItem(
          getCacheKey(),
          JSON.stringify({ timestamp: Date.now(), reviews }),
        );
      } catch {
        // ignore storage errors
      }
    };

    const cached = loadCachedReviews();
    if (cached && cached.length) return;

    const fetchGoogleReviews = async () => {
      if (!GOOGLE_API_KEY || !GOOGLE_PLACE_ID) {
        console.warn("Google API Key or Place ID not configured");
        return;
      }

      try {
        const params = new URLSearchParams({
          place_id: GOOGLE_PLACE_ID,
          fields: "name,rating,reviews",
          key: GOOGLE_API_KEY,
          language: "pt-BR",
        });

        const response = await fetch(`/api/google-reviews?${params}`);
        const data = (await response.json()) as GooglePlaceDetailsResponse;

        if (data.status !== "OK") {
          console.warn(
            "Google Places API returned",
            data.status,
            data.error_message,
          );
          return;
        }

        if (!Array.isArray(data.result?.reviews)) {
          console.warn("No reviews found in Google Places response");
          return;
        }

        const mapped: FeedbackData[] = data.result.reviews
          .slice(0, 5)
          .map((review) => ({
            name: review.author_name ?? "Anônimo",
            from: "Avaliação Google",
            feedback: review.text ?? "",
            rating: review.rating ?? 5,
          }));

        if (!mapped.length) {
          console.warn("No valid reviews to display");
          return;
        }

        setFeedbacks(mapped);
        saveCachedReviews(mapped);
      } catch (error) {
        console.warn("Falha ao buscar avaliações do Google", error);
      }
    };

    fetchGoogleReviews();
  }, [GOOGLE_API_KEY, GOOGLE_PLACE_ID]);

  const renderStars = (rating = 5) => (
    <p className="flex gap-2">
      {Array.from({ length: 5 }).map((_, idx) => (
        <FaStar
          key={idx}
          className={`text-yellow-400 transition-opacity duration-200 ${
            idx < Math.round(rating) ? "" : "opacity-30"
          }`}
        />
      ))}
    </p>
  );

  return (
    <section
      id="feedback"
      className="from-background via-secondary to-background w-full bg-linear-to-b via-70% py-20"
    >
      <article className="m-auto flex w-full flex-col items-center gap-10 p-2">
        <h2 className="font-merriweather text-xl font-bold md:text-2xl lg:text-3xl">
          O que dizem as mulheres que confiam no meu trabalho?
        </h2>
        <div className="flex flex-col justify-between gap-10 max-[600px]:m-auto md:flex-row md:gap-10">
          <div className="w-full overflow-hidden">
            <ul className="animate-scrool flex h-72 items-center justify-between space-x-40">
              {feedbacks.map((item, index) => (
                <li
                  key={index}
                  className={`flex h-full w-max max-w-96 min-w-60 flex-col gap-10 rounded-lg bg-white p-4 px-7`}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-2">
                      <p className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full text-2xl">
                        {item.name.charAt(0).toUpperCase()}
                      </p>
                      <p className="text-lg font-bold lg:text-2xl">
                        {item.name}
                      </p>
                    </div>
                    {renderStars(item.rating)}
                  </div>
                  <p className="text-lg font-bold">{item.feedback}</p>
                </li>
              ))}
              {feedbacks.map((item, index) => (
                <li
                  key={index}
                  className={`flex h-full w-max max-w-96 min-w-60 flex-col gap-10 rounded-lg bg-white p-4 px-7`}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-2">
                      <p className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full text-2xl">
                        {item.name.charAt(0).toUpperCase()}
                      </p>
                      <p className="text-lg font-bold lg:text-2xl">
                        {item.name}
                      </p>
                    </div>
                    {renderStars(item.rating)}
                  </div>
                  <p className="text-lg font-bold">{item.feedback}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};
