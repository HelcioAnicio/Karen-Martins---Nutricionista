import { ButtonCTA } from "./buttonCTA";

export const FirstPage = () => {
  return (
    <section
      id="home"
      className="m-auto flex min-h-[calc(100vh-56px)] w-full items-center justify-center bg-[url(public/designBackgroundFirst.png)] bg-cover bg-bottom bg-no-repeat lg:min-h-[calc(100dvh-64px)] lg:items-center"
    >
      <article className="flex w-full max-w-5xl px-4 md:p-10 lg:items-center xl:p-0">
        <div className="flex flex-col gap-3 lg:gap-10">
          <h1 className="font-merriweather text-primary text-xl font-bold min-[400px]:text-3xl sm:text-4xl 2xl:text-5xl">
            Controle o Diabetes gestacional, Pré eclampsia e Excesso de peso,
            dessa forma garanta uma gravidez segura agora
          </h1>
          <div className="flex h-max w-full flex-col gap-5 min-[390px]:gap-7 sm:gap-10 lg:flex-row-reverse lg:justify-center lg:gap-10">
            <div className="lg:bg-background flex min-h-max w-full flex-col gap-2 min-[390px]:gap-6 sm:gap-10 lg:mt-auto lg:flex-row lg:flex-wrap lg:items-end lg:justify-start lg:gap-3 lg:rounded-md lg:p-3 lg:py-5">
              <p className="font-merriweather w-full text-sm font-semibold min-[400px]:text-base sm:text-lg md:w-4/5 lg:w-full lg:text-xl">
                Acompanhamento nutricional especializado para diminuir riscos,
                controlar o peso e garantir a saúde do seu bebê sem dietas
                restritivas.
              </p>
              <a
                className="hidden w-full lg:flex"
                href="https://wa.link/6mo3a2"
              >
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
        </div>
      </article>
    </section>
  );
};
