import { ButtonCTA } from "./buttonCTA";

export const FirstPage = () => {
  return (
    <section
      id="home"
      className="m-auto flex h-max min-h-[calc(100vh-56px)] w-full max-w-5xl items-center justify-center bg-transparent lg:min-h-[calc(100dvh-64px)] lg:items-center"
    >
      <article className="flex h-max min-h-full w-full p-1 px-4 md:p-10 lg:items-center xl:p-0">
        <div className="flex h-max min-h-full w-full flex-col justify-evenly gap-5 min-[390px]:gap-7 sm:gap-10 lg:flex-row lg:justify-center lg:gap-10">
          <div className="2xl:16 flex h-max min-h-full w-full flex-col justify-evenly gap-2 min-[390px]:gap-6 sm:gap-10 lg:justify-center lg:gap-10">
            <h1 className="font-merriweather text-primary text-xl font-bold min-[390px]:text-xl sm:text-4xl 2xl:text-5xl">
              Controle o Diabetes gestacional, Pré eclampsia e Excesso de peso,
              dessa forma garanta uma gravidez segura agora
            </h1>
            <div className="font-merriweather flex flex-col gap-1 min-[450px]:gap-6 md:w-1/2 md:gap-8 lg:w-full lg:gap-10">
              <p className="text-sm lg:text-lg">
                Acompanhamento nutricional especializado para diminuir riscos,
                controlar o peso e garantir a saúde do seu bebê sem dietas
                restritivas.
              </p>
            </div>
            <a className="hidden lg:flex" href="https://wa.link/6mo3a2">
              <ButtonCTA
                ariaLabel="Link para conversar com o profissional"
                text={"AGENDAR CONSULTA"}
              />
            </a>
          </div>
          <div className="md: flex w-full flex-col items-center gap-5 max-[640px]:m-auto sm:gap-10 md:items-start lg:flex-row lg:items-center">
            <img
              className="w-full max-w-60 flex-4 rounded-lg shadow-lg min-[390px]:max-w-xl lg:max-w-2xl"
              height={400}
              width={600}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              alt="Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável"
              src="/newApresentation.webp"
            />
            <a
              className="flex w-4/5 sm:w-1/2 lg:hidden"
              href="https://wa.link/6mo3a2"
            >
              <ButtonCTA
                ariaLabel="Link para conversar com o profissional"
                text={"AGENDAR CONSULTA"}
              />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
