import React, { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface FeedbackData {
  name: string;
  from: string;
  // stars?: React.ReactNode,
  feedback: string;
}

export const FeedBack = () => {
  const arrayFeedback: FeedbackData[] = [
    {
      name: "Evelyn Petrucceli",
      from: "Avaliação Google",
      // stars?:,
      feedback:
        "Ótimo atendimento! A Dra. Karen Martins me atendeu super bem, e tirou todas as minhas dúvidas.",
    },
    {
      name: "Alice Ferreira",
      from: "Avaliação Google",
      // stars?:,
      feedback:
        "Desde o primeiro atendimento, acolhimento com muito carinho, agilidade, atenção e profissionalismo. Parabéns e muito obrigada!",
    },
    {
      name: "Valquiria Aguiar",
      from: "Avaliação Google",
      // stars?:,
      feedback:
        "Uma profissional extremamente atenciosa e dedicada. Transmite segurança e esclarece as dúvidas",
    },
  ];

  const [feedbackSelected, setFeedbackSelected] = useState(
    arrayFeedback[0].feedback,
  );
  const [isSelected, setIsSelected] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSelected((prev) =>
        prev === arrayFeedback.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [arrayFeedback.length, isSelected]);

  const currentFeedback = arrayFeedback[isSelected].feedback;

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setIsSelected(index);
    setFeedbackSelected(event.target.value);
  };

  return (
    <section id="feedback" className="bg-secondary py-20">
      <article className="m-auto flex w-full max-w-5xl flex-col gap-10 p-2">
        <h2 className="font-merriweather text-xl font-bold md:text-2xl lg:text-3xl">
          O que dizem as mulheres que confiam no meu trabalho?
        </h2>
        <div className="flex flex-col justify-between gap-10 max-[600px]:m-auto md:flex-row md:gap-10">
          <div className="flex h-44 w-full max-w-sm border-b p-2 sm:pb-10 md:hidden">
            <p
              key={isSelected}
              className="font-merriweather animate-in fade-in w-full max-w-sm text-xl font-bold wrap-anywhere italic duration-700"
            >
              {`"${currentFeedback}"`}
            </p>{" "}
          </div>

          <ul className="flex flex-col gap-10 pr-0.5">
            {arrayFeedback.map((item, index) => (
              <li
                key={index}
                className={`group hover:bg-foreground hover:text-background max-w-96 rounded-lg p-4 py-3 transition-all duration-300 ${isSelected === index && "group bg-foreground text-background"}`}
              >
                <input
                  type="radio"
                  name="feedback"
                  id={`feedback-${index}`}
                  className="group hidden"
                  value={item.feedback}
                  checked={feedbackSelected === item.feedback}
                  onChange={(event) => handleInput(event, index)}
                />
                <label
                  htmlFor={`feedback-${index}`}
                  className="flex cursor-pointer flex-col gap-3"
                >
                  <div
                    className={`group-hover:border-t-background w-full border-t py-2 transition-all duration-300 ${isSelected === index ? "border-t-background" : "border-t-foreground"}`}
                  >
                    <p className="text-lg font-bold">{item.name}</p>
                    <p className="font-extralight">{item.from}</p>
                    <p className="flex gap-2">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                    </p>
                  </div>
                </label>
              </li>
            ))}
          </ul>
          <div className="hidden w-full border-l p-2 sm:pl-10 md:flex">
            <p
              key={isSelected}
              className="font-merriweather animate-in fade-in w-full max-w-sm text-xl font-bold wrap-anywhere italic duration-700"
            >
              {`"${currentFeedback}"`}
            </p>{" "}
          </div>
        </div>
      </article>
    </section>
  );
};
