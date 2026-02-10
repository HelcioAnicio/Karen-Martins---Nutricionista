import { ButtonCTA } from "./buttonCTA";

export const FirstPage = () => {
  return (
    <section
      id="home"
      className="m-auto flex h-max min-h-[calc(100vh-56px)] w-full max-w-5xl items-center justify-center lg:min-h-[calc(100dvh-64px)] lg:items-center"
    >
      <article className="flex h-max min-h-full w-full p-1 px-4 md:p-10 lg:items-center xl:p-0">
        <div className="flex h-max min-h-full w-full flex-col justify-evenly gap-5 min-[390px]:gap-7 min-[590px]:flex-row sm:items-center sm:gap-10 lg:justify-center lg:gap-10">
          <div className="2xl:16 flex h-max min-h-full w-full flex-col justify-evenly gap-2 min-[390px]:gap-6 sm:gap-10 lg:justify-center lg:gap-10">
            <h1 className="font-merriweather text-2xl font-bold min-[390px]:text-3xl sm:text-4xl 2xl:text-5xl">
              O futuro do seu bebê começa nas suas escolhas hoje.
            </h1>
            <div className="font-merriweather flex flex-col gap-1 min-[450px]:gap-6 md:gap-8 lg:gap-10">
              <p className="lg:text-lg">
                Atendimento nutricional especializado para gestantes, com foco
                na prevenção e no cuidado de{" "}
                <span className="font-extrabold">
                  condições como diabetes gestacional, pressão alta ou
                  alterações de peso.
                </span>{" "}
              </p>
              <p className="hidden min-[450px]:inline lg:text-lg">
                Um acompanhamento individualizado para que você viva essa fase
                com mais segurança e a tranquilidade de saber que fez o melhor
                por você e pelo seu bebê
              </p>
            </div>
            <a
              className="hidden min-[800px]:flex"
              href="https://wa.me/5511921341072"
            >
              <ButtonCTA text={"AGENDAR AVALIAÇÃO"} />
            </a>
          </div>
          <div className="m-auto flex flex-col gap-5 max-[600px]:items-center sm:gap-10">
            <img
              className="w-52 rounded-lg shadow-lg min-[390px]:w-60 min-[800px]:hidden sm:w-64 md:w-xs"
              width="208"
              height="312"
              alt="Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável"
              src=" /apresentation.webp"
            />
            <a
              className="flex min-[800px]:hidden"
              href="https://wa.me/5511921341072"
            >
              <ButtonCTA text={"AGENDAR AVALIAÇÃO"} />
            </a>
          </div>
        </div>
        <img
          className="hidden w-52 rounded-lg shadow-lg min-[800px]:block sm:w-xs lg:w-sm xl:w-md"
          width="208"
          height="312"
          alt="Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável"
          src=" /apresentation.webp"
        />
      </article>
    </section>
  );
};
