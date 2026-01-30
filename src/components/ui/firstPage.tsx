import { ButtonCTA } from "./buttonCTA";

export const FirstPage = () => {
  return (
    <section
      id="home"
      className="m-auto flex h-max min-h-[calc(100dvh-56px)] w-full max-w-5xl justify-center lg:min-h-[calc(100dvh-64px)] lg:items-center"
    >
      <article class="flex h-max min-h-full w-full p-1 px-4 md:p-10 lg:items-center"><div class="2xl:16 flex h-max min-h-full w-full flex-col justify-evenly gap-10 sm:flex-row sm:items-center lg:justify-center lg:gap-10">
        <div class="2xl:16 flex h-max min-h-full w-full flex-col justify-evenly gap-10 lg:justify-center lg:gap-10"> 
          <h1 class="font-merriweather max-w-sm text-2xl font-bold sm:max-w-lg sm:text-4xl 2xl:max-w-2xl 2xl:text-5xl">O futuro do seu bebê começa nas escolhas que você faz hoje.</h1>
          <div class="font-merriweather flex flex-col gap-2 md:gap-6 lg:gap-10">
            <p class="max-w-sm sm:max-w-lg lg:text-lg">Atendimento nutricional especializado para mulheres que desejam fazer escolhas mais conscientes na gestação para prevenção ou acompanhamento de <span class="font-semibold">condições como diabetes gestacional, pressão                alta ou alterações de peso.</span>
            </p>
            <p class="hidden max-w-sm sm:inline lg:text-lg">Cada consulta é um espaço de escuta e cuidado, <span class="hidden sm:inline">para que você viva essa fase com mais segurança e a tranquilidade de saber que fez o melhor possível para você e seu bebê. </span>
            </p>
            </div>
          </div>
          <div class="flex flex-col gap-10">
            <img class="w-52 rounded-lg shadow-lg sm:w-64 lg:hidden" width="208" height="312" alt="Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável" src=" /apresentation.jpg" />
            <a>
              <button data-slot="button" data-variant="default" data-size="default" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 min-h-max w-max cursor-pointer shadow-lg md:text-lg lg:px-5 lg:py-2">AGENDAR AVALIAÇÃO GRATUITA</button>
            </a>
          </div>
        </div> 
        <img class="hidden w-52 rounded-lg shadow-lg sm:w-sm lg:block" width="208" height="312" alt="Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável" src=" /apresentation.jpg" />
      </article>
    </section>
  );
};


