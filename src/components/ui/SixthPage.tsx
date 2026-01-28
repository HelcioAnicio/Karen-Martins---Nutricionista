import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MdBloodtype } from 'react-icons/md';
import { GiWeightScale } from 'react-icons/gi';
import { GiKnifeFork } from 'react-icons/gi';
import { MdPregnantWoman } from 'react-icons/md';
import { FaHandsHoldingChild } from 'react-icons/fa6';
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from './button';

interface ItemCarousel {
  icon?: React.ReactNode;
  text: string;
  title: string;
}

const arrayCarousel: ItemCarousel[] = [
  {
    icon: (
      <MdBloodtype className='!w-8 !h-8 md:!w-13 md:!h-13 text-background bg-foreground rounded-full p-2' />
    ),
    text: 'Diabetes gestacional',
    title:
      'Plano alimentar para controle glicêmico, prevenindo complicações e evitando o uso de insulina sempre que possível',
  },
  {
    icon: (
      <GiWeightScale className='!w-8 !h-8 md:!w-13 md:!h-13 text-background bg-foreground rounded-full p-2' />
    ),
    text: 'Excesso de peso',
    title:
      'Acompanhamento para ganho de peso adequado, sem restrições extremas, respeitando suas necessidades energéticas e do bebê',
  },
  {
    icon: (
      <GiKnifeFork className='!w-8 !h-8 md:!w-13 md:!h-13 text-background bg-foreground rounded-full p-2' />
    ),
    text: 'Alimentação vegetariana',
    title:
      'Planejamento nutricional para gestantes vegetarianas e veganas, garantindo todos os nutrientes essenciais para mãe e bebê',
  },
  {
    icon: (
      <MdPregnantWoman className='!w-8 !h-8 md:!w-13 md:!h-13 text-background bg-foreground rounded-full p-2' />
    ),
    text: 'Gestação múltipla',
    title:
      'Acompanhamento nutricional para suprir maiores demandas e favorecer o crescimento saudável de cada bebê, mantendo o bem-estar materno.',
  },
  {
    icon: (
      <FaHandsHoldingChild className='!w-8 !h-8 md:!w-13 md:!h-13 text-background bg-foreground rounded-full p-2' />
    ),
    text: 'Restrição de crescimento intrauterino (RCIU).',
    title:
      'Estratégias alimentares para otimizar a oferta de nutrientes ao bebê e apoiar um desenvolvimento intrauterino mais favorável.',
  },
];

export const SixthPage = () => {
  return (
    <section className=' bg-[url(/background.jpg)] bg-cover bg-bottom-right bg-no-repeat bg-fixed'>
      <article className='w-full backdrop-blur-sm backdrop-grayscale-25 h-full py-20'>
        <div className='flex gap-10 items-center justify-center flex-col m-auto mt-0 bg-background/80 py-10 p-2 md:p-10 '>
          <h2 className='font-bold text-xl font-merriweather my-0 '>
            Condições que acompanho com atenção especializada
          </h2>
          <div className='m-auto my-0 max-w-5xl'>
            <div>
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className='w-full max-w-54 sm:max-w-lg md:max-w-xl '>
                <CarouselContent>
                  {arrayCarousel.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className='basis-full md:basis-1/2 lg:basis-1/3 flex justify-center'>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant='outline'
                            className='flex aspect-square flex-col items-center w-52 justify-center hover:bg-secondary cursor-pointer p-3 h-32 border-none bg-inherit shadow-none'>
                            {' '}
                            <p>{item.icon}</p>
                            <p className='w-full whitespace-pre-wrap font-semibold '>
                              {item.text}
                            </p>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className='bg-popover'>
                          <PopoverHeader>
                            <PopoverTitle className='text-center'>
                              <p className='md:text-lg font-light'>
                                {item.title}
                              </p>
                            </PopoverTitle>
                          </PopoverHeader>
                        </PopoverContent>
                      </Popover>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className='hover:bg-secondary border-none bg-inherit w-5 h-full' />
                <CarouselNext className='hover:bg-secondary border-none bg-inherit w-5 h-full' />
              </Carousel>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
