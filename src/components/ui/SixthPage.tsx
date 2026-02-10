import * as React from "react"; // Adicione o import do React
import Autoplay from "embla-carousel-autoplay"; // Importe o plugin
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdBloodtype } from "react-icons/md";
import { GiWeightScale } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { MdPregnantWoman } from "react-icons/md";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { GiHeartBeats } from "react-icons/gi";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./button";
import { CarouselAuto } from "./carouselAuto";

interface ItemCarousel {
  icon?: React.ReactNode;
  text: string;
  title: string;
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
    },
    {
      icon: (
        <GiWeightScale className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Excesso de peso",
      title:
        "Acompanhamento para ganho de peso adequado, sem restrições extremas, respeitando suas necessidades energéticas e do bebê",
    },
    {
      icon: (
        <GiKnifeFork className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Alimentação vegetariana",
      title:
        "Planejamento nutricional para gestantes vegetarianas e veganas, garantindo todos os nutrientes essenciais para mãe e bebê",
    },
    {
      icon: (
        <MdPregnantWoman className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Gestação múltipla",
      title:
        "Acompanhamento nutricional para suprir maiores demandas e favorecer o crescimento saudável de cada bebê, mantendo o bem-estar materno.",
    },
    {
      icon: (
        <FaHandsHoldingChild className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Restrição de crescimento intrauterino (RCIU).",
      title:
        "Estratégias alimentares para otimizar a oferta de nutrientes ao bebê e apoiar um desenvolvimento intrauterino mais favorável.",
    },
    {
      icon: (
        <GiHeartBeats className="text-background bg-foreground h-8! w-8! rounded-full p-2 md:h-13! md:w-13!" />
      ),
      text: "Hipertensão.",
      title:
        "Orientações nutricionais para redução e controle da pressão arterial, com menor consumo de sódio e apoio à prevenção da pré eclâmpsia.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  return (
    <section className="bg-[url(/background.webp)] bg-cover bg-fixed bg-top-right bg-no-repeat">
      <article className="bg-background/75 h-full w-full py-52">
        <div className="bg-background/80 m-auto mt-0 flex flex-col items-center justify-center gap-10 p-2 py-10 md:p-10">
          <h2 className="font-merriweather my-0 text-xl font-bold sm:text-2xl lg:text-3xl">
            Condições que acompanho com atenção especializada
          </h2>
          <div className="m-auto my-0 max-w-5xl">
            <div>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full max-w-54 sm:max-w-lg md:max-w-xl"
              >
                <CarouselContent>
                  {arrayCarousel.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="flex basis-full justify-center md:basis-1/2 lg:basis-1/3"
                    >
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            aria-label={`Abrir o contéudo sobre ${item.text}`}
                            className="flex aspect-square h-32 w-52 cursor-pointer flex-col items-center justify-center border-none bg-inherit p-3 shadow-none hover:bg-inherit"
                          >
                            {" "}
                            <p>{item.icon}</p>
                            <p className="w-full font-semibold whitespace-pre-wrap">
                              {item.text}
                            </p>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="bg-popover">
                          <PopoverHeader>
                            <PopoverTitle className="text-center">
                              <p className="font-light md:text-lg">
                                {item.title}
                              </p>
                            </PopoverTitle>
                          </PopoverHeader>
                        </PopoverContent>
                      </Popover>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="h-full w-5 border-none bg-inherit shadow-none hover:bg-inherit" />
                <CarouselNext className="h-full w-5 border-none bg-inherit shadow-none hover:bg-inherit" />
              </Carousel>
            </div>
          </div>
        </div>
        <CarouselAuto />
      </article>
    </section>
  );
};
