import React, { useState, useEffect, useCallback } from "react";
import {
  Stethoscope,
  Smartphone,
  MessageCircle,
  Heart,
  GraduationCap,
  Eye,
} from "lucide-react";

const data = [
  {
    title: "Avaliação completa",
    icon: <Stethoscope />,
    desc: "Análise detalhada de exames, histórico clínico, rotina alimentar e objetivos individuais para criar um plano verdadeiramente personalizado.",
  },
  {
    title: "Tecnologia integrada",
    icon: <Smartphone />,
    desc: "Acesso fácil ao seu plano pelo App Numax, com atualizações em tempo real, materiais de apoio e histórico completo de evolução.",
  },
  {
    title: "Suporte contínuo",
    icon: <MessageCircle />,
    desc: "Contato direto via WhatsApp para dúvidas, ajustes e acolhimento sempre que precisar, sem esperar pela próxima consulta.",
  },
  {
    title: "Acolhimento humano",
    icon: <Heart />,
    desc: "Escuta ativa, empatia genuína e presença real em cada etapa da sua jornada. Você nunca estará sozinha neste processo.",
  },
  {
    title: "Educação nutricional",
    icon: <GraduationCap />,
    desc: "Aprenda sobre alimentação saudável para aplicar durante a gestação, no pós-parto e na vida toda, construindo hábitos sustentáveis.",
  },
  {
    title: "Visão integral",
    icon: <Eye />,
    desc: "Cuidado que considera não só a nutrição, mas também seu bem-estar emocional, qualidade do sono, rotina e contexto familiar.",
  },
];

export function CarouselAuto() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % data.length);
  }, []);

  // const prev = useCallback(() => {
  //   setIndex((prev) => (prev - 1 + data.length) % data.length);
  // }, []);

  // Autoplay com pausa para leitura
  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  // Lógica para definir a classe de cada card baseado no índice ativo
  const getCardClass = (i: number) => {
    const total = data.length;
    // Cálculo de distância circular
    const diff = (i - index + total) % total;

    if (diff === 0) return "z-30 scale-100 opacity-100 translate-x-0 "; // Central
    if (diff === 1)
      return "z-20 scale-75 opacity-60 translate-x-[40%] md:translate-x-[60%]"; // Próximo
    if (diff === total - 1)
      return "z-20 scale-75 opacity-60 -translate-x-[40%] md:-translate-x-[60%]"; // Anterior

    // Escondidos (Hide)
    if (diff === 2 || diff === total - 2)
      return "z-10 scale-50 opacity-0 translate-x-[80%] opacity-0";
    return "z-0 scale-50 opacity-0 pointer-events-none";
  };

  return (
    <div className="bg-background/80 relative mt-40 flex w-full flex-col items-center overflow-hidden py-10">
      <h2 className="mb-16 px-4 text-center font-serif text-2xl font-semibold text-[#6d5d4b] md:text-3xl">
        Diferenciais do acompanhamento individual
      </h2>

      <div className="relative flex h-112.5 w-full max-w-7xl items-center justify-center">
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`absolute w-72 cursor-pointer transition-all duration-700 ease-in-out md:w-xs ${getCardClass(i)} `}
          >
            <div className="flex h-80 flex-col items-center rounded-lg bg-[#9a8a78] p-8 text-center text-white shadow-2xl">
              <div className="mb-6 rounded-2xl">
                {React.cloneElement(item.icon as React.ReactElement, {
                  // size: 32,
                })}
              </div>
              <h3 className="font-merriweather mb-4 text-2xl leading-tight font-semibold">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed font-light opacity-90 md:text-lg">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores/Buttons
      <div className='flex gap-4 mt-8'>
        <button
          onClick={prev}
          className='p-2 rounded-full border border-[#9a8a78] text-[#9a8a78] hover:bg-[#9a8a78] hover:text-white transition-colors'>
          ←
        </button>
        <button
          onClick={next}
          className='p-2 rounded-full border border-[#9a8a78] text-[#9a8a78] hover:bg-[#9a8a78] hover:text-white transition-colors'>
          →
        </button>
      </div> */}
    </div>
  );
}
