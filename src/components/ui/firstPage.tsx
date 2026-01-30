import { ButtonCTA } from "./buttonCTA";

export const FirstPage = () => {
  return (
    <section
      id="home"
      className="m-auto flex h-max min-h-[calc(100dvh-56px)] w-full max-w-5xl justify-center lg:min-h-[calc(100dvh-64px)] lg:items-center"
    >
      <article className="flex h-max min-h-full w-full p-1 px-4 md:p-10 lg:items-center">
        <div className="2xl:16 flex h-max min-h-full w-full flex-col justify-evenly gap-10 lg:justify-center lg:gap-10">
          <h1 className="font-merriweather max-w-sm text-2xl font-bold sm:max-w-lg sm:text-4xl 2xl:max-w-2xl 2xl:text-5xl">
            O futuro do seu bebê começa nas escolhas que você faz hoje.
          </h1>
          <div className="font-merriweather flex flex-col gap-2 md:gap-6 lg:gap-10">
            <p className="max-w-sm sm:max-w-lg lg:text-lg">
              Atendimento nutricional especializado para mulheres que desejam
              fazer escolhas mais conscientes na gestação para prevenção ou
              acompanhamento de{" "}
              <span className="font-semibold">
                condições como diabetes gestacional, pressão alta ou alterações
                de peso.
              </span>
            </p>
            <p className="hidden max-w-sm sm:inline lg:text-lg">
              Cada consulta é um espaço de escuta e cuidado,{" "}
              <span className="hidden sm:inline">
                para que você viva essa fase com mais segurança e a
                tranquilidade de saber que fez o melhor possível para você e seu
                bebê.{" "}
              </span>
            </p>
          </div>
          <img
            className="w-52 rounded-lg shadow-lg sm:w-64 lg:hidden"
            width={208}
            height={312}
            src=" /apresentation.jpg"
            alt="Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável"
          />
          <a>
            <ButtonCTA text={"AGENDAR AVALIAÇÃO GRATUITA"} />
          </a>
        </div>
        <img
          className="hidden w-52 rounded-lg shadow-lg sm:w-sm lg:block"
          width={208}
          height={312}
          src=" /apresentation.jpg"
          alt="Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável"
        />
      </article>
    </section>
  );
};
