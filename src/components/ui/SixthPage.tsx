import * as React from "react"; // Adicione o import do React
import { MdBloodtype } from "react-icons/md";
import { GiWeightScale } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { MdPregnantWoman } from "react-icons/md";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { GiHeartBeats } from "react-icons/gi";
import { Card } from "./card";

interface ItemCarousel {
  icon?: React.ReactNode;
  text: string;
  title: string;
  img?: string;
}

export const SixthPage = () => {
  const arrayCarousel: ItemCarousel[] = [
    {
      icon: (
        <MdBloodtype className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Diabetes gestacional",
      title:
        "Plano alimentar para controle glicêmico, prevenindo complicações e evitando o uso de insulina sempre que possível",
      img: "/candy.webp",
    },
    {
      icon: (
        <GiWeightScale className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Excesso de peso",
      title:
        "Acompanhamento para ganho de peso adequado, sem restrições extremas, respeitando suas necessidades energéticas e do bebê",
      img: "/pregnant.webp",
    },
    {
      icon: (
        <GiKnifeFork className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Alimentação vegetariana",
      title:
        "Planejamento nutricional para gestantes vegetarianas e veganas, garantindo todos os nutrientes essenciais para mãe e bebê",
      img: "/food.webp",
    },
    {
      icon: (
        <MdPregnantWoman className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Gestação múltipla",
      title:
        "Acompanhamento nutricional para suprir maiores demandas e favorecer o crescimento saudável de cada bebê, mantendo o bem-estar materno.",
      img: "/baby.webp",
    },
    {
      icon: (
        <FaHandsHoldingChild className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Restrição de crescimento intrauterino (RCIU)",
      title:
        "Estratégias alimentares para otimizar a oferta de nutrientes ao bebê e apoiar um desenvolvimento intrauterino mais favorável.",
      img: "/babys.webp",
    },
    {
      icon: (
        <GiHeartBeats className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Hipertensão",
      title:
        "Orientações nutricionais para redução e controle da pressão arterial, com menor consumo de sódio e apoio à prevenção da pré eclâmpsia.",
      img: "/machine.webp",
    },
  ];

  return (
    <section className="relative">
      <article className="h-full w-full">
        <div className="bg-background/80 m-auto mt-0 flex flex-col items-center justify-center gap-10 p-2 py-10 md:p-10">
          <h2 className="font-merriweather my-0 text-xl font-bold sm:text-2xl lg:text-3xl">
            Condições que acompanho com atenção especializada
          </h2>
          <div className="m-auto my-0 max-w-5xl">
            <div className="flex flex-wrap justify-center gap-10">
              {arrayCarousel.map((item, index) => (
                <Card
                  key={index}
                  style={{ backgroundImage: `url(${item.img})` }}
                  className={`bg- w-xs border-none bg-contain bg-center bg-no-repeat shadow-none`}
                >
                  <div
                    aria-label={`Abrir o contéudo sobre ${item.text}`}
                    className="m-auto flex h-32 w-48 cursor-pointer flex-col items-center justify-center border-none bg-inherit p-3 text-center shadow-none hover:font-bold"
                  >
                    <p className="text-background">{item.icon}</p>
                    <p className="text-background font-semibold">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
