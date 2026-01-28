import React, { useState, useEffect, useCallback } from 'react';
import {
  Stethoscope,
  Smartphone,
  MessageCircle,
  Heart,
  GraduationCap,
  Eye,
} from 'lucide-react';

const data = [
  {
    title: 'Avaliação completa',
    icon: <Stethoscope />,
    desc: 'Análise detalhada de exames, histórico clínico e objetivos individuais.',
  },
  {
    title: 'Tecnologia integrada',
    icon: <Smartphone />,
    desc: 'Acesso fácil ao seu plano pelo App Numax com atualizações em tempo real.',
  },
  {
    title: 'Suporte contínuo',
    icon: <MessageCircle />,
    desc: 'Contato direto via WhatsApp para dúvidas e ajustes sempre que precisar.',
  },
  {
    title: 'Acolhimento humano',
    icon: <Heart />,
    desc: 'Escuta ativa, empatia genuína e presença real em cada etapa.',
  },
  {
    title: 'Educação nutricional',
    icon: <GraduationCap />,
    desc: 'Aprenda sobre alimentação saudável para aplicar em toda a vida.',
  },
  {
    title: 'Visão integral',
    icon: <Eye />,
    desc: 'Cuidado que considera seu bem-estar emocional e contexto familiar.',
  },
];

export function CarouselAuto() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % data.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  }, []);

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

    if (diff === 0) return 'z-30 scale-100 opacity-100 translate-x-0'; // Central
    if (diff === 1)
      return 'z-20 scale-75 opacity-70 translate-x-[40%] md:translate-x-[60%]'; // Próximo
    if (diff === total - 1)
      return 'z-20 scale-75 opacity-70 -translate-x-[40%] md:-translate-x-[60%]'; // Anterior

    // Escondidos (Hide)
    if (diff === 2 || diff === total - 2)
      return 'z-10 scale-50 opacity-0 translate-x-[80%] opacity-0';
    return 'z-0 scale-50 opacity-0 pointer-events-none';
  };

  return (
    <div className='relative w-full overflow-hidden bg-[#fdfaf6] py-20 flex flex-col items-center'>
      <h2 className='text-[#6d5d4b] text-3xl font-serif mb-16 text-center px-4'>
        Diferenciais do acompanhamento individual
      </h2>

      <div className='relative w-full max-w-[1200px] h-[450px] flex items-center justify-center'>
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`
              absolute transition-all duration-700 ease-in-out cursor-pointer
              w-72 md:w-xs
              ${getCardClass(i)}
            `}>
            <div className='bg-[#9a8a78] rounded-t-[5rem] rounded-b-2xl p-8 text-white h-[400px] flex flex-col items-center text-center shadow-2xl'>
              <div className='bg-white/20 p-4 rounded-2xl mb-6'>
                {React.cloneElement(item.icon as React.ReactElement, {
                  // size:32,
                })}
              </div>
              <h3 className='text-2xl font-semibold mb-4 leading-tight'>
                {item.title}
              </h3>
              <p className='text-sm opacity-90 leading-relaxed font-light'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores/Buttons */}
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
      </div>
    </div>
  );
}
