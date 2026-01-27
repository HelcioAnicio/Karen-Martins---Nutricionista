import { ButtonCTA } from './buttonCTA';

export const ThirdPage = () => {
  return (
    <>
      <section className='bg-secondary w-full pb-10 '>
        <div className='max-w-5xl lg:m-auto '>
          <h2 className='text-secondary-foreground p-1 py-5 max-w-sm font-bold sm:px-10 sm:max-w-lg sm:text-xl lg:text-2xl lg:max-w-2xl'>
            Quem vai cuidar de você e do seu bebê com ciência, sensibilidade e
            presença?
          </h2>
        </div>
        <article className='bg-background w-full'>
          <div className='bg-background flex flex-col m-auto gap-5 p-2 py-10 sm:px-10 sm:flex-row lg:items-center max-w-5xl lg:justify-between'>
            <img
              className='hidden rounded-lg sm:w-80 lg:flex'
              src=' /aboutMe.jpg'
              alt='Imagem da Karen Martins - Está sentada encostada em um sofá, olhando para a câmera, com um olhar amigavel e acolhedor.'
            />
            <div className='flex flex-col gap-5 sm:flex-row sm:items-start lg:flex-col'>
              <div className=''>
                <p className='font-semibold text-lg'>Karen Martins</p>
                <img
                  className='rounded-lg w-52 sm:w-64 lg:hidden'
                  src=' /aboutMe.jpg'
                  alt='Imagem da Karen Martins - Está sentada encostada em um sofá, olhando para a câmera, com um olhar amigavel e acolhedor.'
                />
              </div>

              <div className='flex flex-col gap-5 '>
                <p className='max-w-lg'>
                  Nutricionista formada pela Faculdade de Medicina do ABC, com{' '}
                  <span className='font-bold'>
                    especialização em Nutrição Materno-Infantil e certificação
                    como Consultora em Amamentação{' '}
                  </span>
                  pelo Instituto Mame Bem.
                </p>
                <p className='max-w-lg'>
                  Há mais de <span className='font-bold'>10 anos</span>,
                  acompanho{' '}
                  <span className='font-bold'>
                    gestantes, puérperas, bebês e crianças{' '}
                  </span>
                  nos contextos hospitalar e ambulatorial, atuando do cuidado
                  nutricional na gestação à introdução alimentar do bebê.
                </p>
                <p className='max-w-lg'>
                  Cada mulher é única, e meu trabalho é nutrir com propósito.
                  Aqui, ciência, escuta e afeto caminham juntos, respeitando as
                  singularidades de cada fase da vida. <br />
                  Nutrição que começa na gestação e promove um bebê bem nutrido
                  desde a barriga da mamãe.
                </p>
                <ButtonCTA text={'AGENDAR AVALIAÇÃO COM A NUTRI'} />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
