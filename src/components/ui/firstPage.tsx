import { ButtonCTA } from "./buttonCTA";

export const FirstPage = () => {
  return (
    <section
      id="home"
      className="from-background m-auto flex min-h-[calc(100vh-56px)] w-full items-center justify-center bg-linear-to-r bg-[url(public/designBackgroundFirst.png)] from-70% bg-cover bg-center bg-no-repeat lg:min-h-[calc(100dvh-64px)] lg:items-center lg:bg-bottom-right"
    >
      <article className="flex h-max min-h-full w-full max-w-5xl p-1 px-4 md:p-10 lg:items-center xl:p-0">
        <div className="flex h-max flex-col gap-2 min-[600px]:gap-4 lg:gap-10">
          <h1 className="font-merriweather text-center text-2xl leading-20 font-bold min-[400px]:text-3xl sm:text-5xl 2xl:text-6xl">
            Seu bebê pode ser afetado pela sua alimentação e você nem sabe
            disso.
          </h1>
          <div className="flex h-max min-h-full w-full flex-col justify-evenly gap-5 min-[390px]:gap-7 sm:gap-10 lg:flex-row-reverse lg:items-end lg:justify-center lg:gap-10">
            <div className="flex w-full flex-col justify-evenly gap-2 min-[390px]:gap-6 sm:gap-10 lg:w-3/5 lg:flex-row lg:flex-wrap lg:items-end lg:justify-start lg:gap-10">
              <p className="font-merriweather bg-background m-auto rounded-md p-2 text-center text-sm min-[400px]:text-base md:w-4/5 md:text-lg lg:w-full lg:text-3xl">
                Descubra como evitar danos silenciosos na gestação com um
                acompanhamento nutricional estratégico.
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
            <div className="flex w-full flex-col items-center gap-5 max-[640px]:m-auto sm:gap-10 lg:flex-row lg:items-center">
              <img
                className="w-full max-w-60 flex-4 rounded-lg shadow-lg min-[390px]:max-w-xl lg:max-w-4xl"
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
