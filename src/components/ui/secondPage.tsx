import { GiStomach, GiWeightScale } from 'react-icons/gi';
import { FaHeartPulse } from 'react-icons/fa6';
import { MdOutlinePregnantWoman } from 'react-icons/md';
import { Card } from './card';
import { FaHandHoldingHeart } from 'react-icons/fa6';

export const SecondPage = () => {
  return (
    <section className='m-auto w-full max-w-5xl flex py-5 sm:items-center justify-center'>
      <article className='flex flex-col w-full gap-5 sm:gap-16 p-1 px-4'>
        <div className='flex flex-col w-full max-w-max gap-5'>
          <h2 className='font-bold text-2xl'>
            Por que cuidar da alimentação na gestação?
          </h2>
          <p className='border-l pl-2 border-foreground py-2 max-w-lg lg:max-w-3xl'>
            Mais do que dietas e restrições, o cuidado nutricional na gestação
            tem como foco a prevenção e a promoção da saúde da mãe e do bebê,
            respeitando as necessidades de cada fase. <br /> Este acompanhamento
            é ideal para gestantes que querem garantir:{' '}
          </p>
        </div>
        <Card className='max-w-max m-auto border-none shadow-2xl'>
          <ul className='flex flex-col gap-10 px-3'>
            <li className='flex items-center gap-5'>
              <GiWeightScale className='w-16 h-16 p-2' />
              <div>
                <p className='font-bold text-lg'>Peso Saúdavel</p>
                <p>Ganho de peso adequado para cada fase da gestação</p>
              </div>
            </li>

            <li className='flex items-center gap-5'>
              <FaHandHoldingHeart className='w-16 h-16 p-2' />
              <div>
                <p className='font-bold text-lg'>Energia e bem estar</p>
                <p>
                  Melhora de sintomas como enjoos, azia, inchaços e sensação de
                  fraqueza.
                </p>
              </div>
            </li>
            <li className='flex items-center gap-5'>
              <GiStomach className='w-16 h-16 p-2' />
              <div>
                <p className='font-bold text-lg'>Controle Glicêmico</p>
                <p>
                  Manuntenção da glicemia em níveis seguros, previnindo
                  complicações
                </p>
              </div>
            </li>

            <li className='flex items-center gap-5'>
              <FaHeartPulse className='w-16 h-16 p-2' />
              <div>
                <p className='font-bold text-lg'>Pressão Equilbrada</p>
                <p>Redução de riscos relacionados à hipertensão gestacional</p>
              </div>
            </li>
            <li className='flex items-center gap-5'>
              <MdOutlinePregnantWoman className='w-16 h-16 p-2' />
              <div>
                <p className='font-bold text-lg'>Vínculo Fortalecido</p>
                <p>Conexão profunda com seu bebê através do autocuidado</p>
              </div>
            </li>
          </ul>
        </Card>
      </article>
    </section>
  );
};
