import { useState } from "react";

interface FeedbackData {
  name: string;
  from: string;
  feedback: string;
  rating: number;
  link?: string;
}

interface FeedbackItemProps {
  item: FeedbackData;
  renderStars: (rating: number) => React.ReactNode;
}

export const FeedbackItem = ({ item, renderStars }: FeedbackItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Limite de caracteres para exibir o botão
  const limit = 120;
  const isLongText = item.feedback.length > limit;

  return (
    <li className="ml-40 flex h-fit min-h-80 w-max max-w-96 min-w-60 flex-col gap-6 rounded-lg bg-white p-6 shadow-md transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <p className="bg-primary text-primary-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl font-bold">
            {item.name.charAt(0).toUpperCase()}
          </p>
          <p className="text-xl font-bold text-black">{item.name}</p>
        </div>
        <div>{renderStars(item.rating)}</div>
      </div>

      <blockquote className="text-left text-lg leading-relaxed font-medium text-black italic">
        &quot;
        {isExpanded || !isLongText
          ? item.feedback
          : `${item.feedback.substring(0, limit)}...`}
        &quot;
      </blockquote>

      {isLongText && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Evita interferência em cliques no container
            setIsExpanded(!isExpanded);
          }}
          className="text-primary mt-auto cursor-pointer self-start font-bold"
        >
          {isExpanded ? "Ler menos" : "Ler mais"}
        </button>
      )}
    </li>
  );
};
