import { ButtonCTA } from './buttonCTA';

export const FirstPage = () => {
  return (
    <section className='min-h-[calc(100dvh-56px)] w-full max-w-5xl flex justify-center items-center m-auto h-max'>
      <article className='flex w-full h-max min-h-full p-1 px-4 md:p-10 lg:items-center'>
        <div className='flex flex-col w-full justify-evenly h-max min-h-full gap-10 lg:justify-center lg:gap-10 2xl:16'>
          <h1 className='font-bold text-2xl max-w-sm  sm:max-w-lg sm:text-4xl 2xl:text-5xl 2xl:max-w-2xl font-merriweather'>
            O futuro do seu bebê começa nas escolhas que você faz hoje.
          </h1>
          <div className='flex flex-col gap-2 lg:gap-10 font-merriweather'>
            <p className='max-w-none sm:max-w-lg lg:text-lg'>
              Atendimento nutricional especializado para mulheres que desejam
              fazer escolhas mais conscientes na gestação para prevenção ou
              acompanhamento de{' '}
              <span className='font-semibold'>
                condições como diabetes gestacional, pressão alta ou alterações
                de peso.
              </span>
            </p>
            <p className='hidden sm:inline max-w-md lg:text-lg'>
              Cada consulta é um espaço de escuta e cuidado,{' '}
              <span className='hidden  sm:inline'>
                para que você viva essa fase com mais segurança e a
                tranquilidade de saber que fez o melhor possível para você e seu
                bebê.{' '}
              </span>
            </p>
          </div>
          <img
            className='rounded-lg w-52 sm:w-64 lg:hidden shadow-lg'
            src=' /apresentation.jpg'
            alt='Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável'
          />
          <a>
            <ButtonCTA text={'AGENDAR AVALIAÇÃO GRATUITA'} />
          </a>
        </div>
        <img
          className='hidden shadow-lg rounded-lg w-52 sm:w-sm lg:block'
          src=' /apresentation.jpg'
          alt='Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável'
        />
      </article>
    </section>
  );
};
