import { ButtonCTA } from "./buttonCTA";

export const ThirdPage = () => {
  return (
    <>
      <section className="bg-secondary w-full pb-20">
        <div className="max-w-5xl lg:m-auto">
          <h2 className="text-secondary-foreground font-merriweather max-w-sm p-1 py-5 text-xl font-bold sm:max-w-lg sm:px-10 sm:text-xl lg:max-w-3xl lg:text-4xl">
            Quem vai cuidar de você e do seu bebê com ciência, sensibilidade e
            presença?
          </h2>
        </div>
        <article className="bg-background w-full">
          <div className="bg-background m-auto flex max-w-5xl flex-col gap-5 p-2 py-10 sm:flex-row sm:px-10 lg:items-center lg:justify-between">
            <img
              className="hidden rounded-lg shadow-lg sm:w-80 lg:flex"
              src=" /aboutMe.jpg"
              alt="Imagem da Karen Martins - Está sentada encostada em um sofá, olhando para a câmera, com um olhar amigavel e acolhedor."
            />
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start lg:flex-col">
              <div className="">
                <p className="font-merriweather text-2xl font-semibold">
                  Karen Martins
                </p>
                <img
                  className="w-52 rounded-lg shadow-lg sm:w-64 lg:hidden"
                  src=" /aboutMe.jpg"
                  alt="Imagem da Karen Martins - Está sentada encostada em um sofá, olhando para a câmera, com um olhar amigavel e acolhedor."
                />
              </div>

              <div className="flex flex-col gap-5">
                <p className="max-w-lg">
                  Nutricionista formada pela Faculdade de Medicina do ABC, com{" "}
                  <span className="font-bold">
                    especialização em Nutrição Materno-Infantil e certificação
                    como Consultora em Amamentação{" "}
                  </span>
                  pelo Instituto Mame Bem.
                </p>
                <p className="max-w-lg">
                  Há mais de <span className="font-bold">10 anos</span>,
                  acompanho{" "}
                  <span className="font-bold">
                    gestantes, puérperas, bebês e crianças{" "}
                  </span>
                  nos contextos hospitalar e ambulatorial, atuando do cuidado
                  nutricional na gestação à introdução alimentar do bebê.
                </p>
                <p className="max-w-lg">
                  Cada mulher é única, e meu trabalho é nutrir com propósito.
                  Aqui, ciência, escuta e afeto caminham juntos, respeitando as
                  singularidades de cada fase da vida. <br />
                  Nutrição que começa na gestação e promove um bebê bem nutrido
                  desde a barriga da mamãe.
                </p>
                <ButtonCTA text={"AGENDAR AVALIAÇÃO COM A NUTRI"} />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
