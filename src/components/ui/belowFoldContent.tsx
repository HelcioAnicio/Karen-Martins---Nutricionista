import { lazy, Suspense } from "react";

const Footer = lazy(() =>
  import("./footer").then((mod) => ({ default: mod.Footer })),
);
const SecondPage = lazy(() =>
  import("./secondPage").then((mod) => ({ default: mod.SecondPage })),
);
const ThirdPage = lazy(() =>
  import("./thirdPage").then((mod) => ({ default: mod.ThirdPage })),
);
const FourthPage = lazy(() =>
  import("./fourthPage").then((mod) => ({ default: mod.FourthPage })),
);
const FifthPage = lazy(() =>
  import("./fifthPage").then((mod) => ({ default: mod.FifthPage })),
);
const SixthPage = lazy(() =>
  import("./SixthPage").then((mod) => ({ default: mod.SixthPage })),
);
const FAQ = lazy(() => import("./faq").then((mod) => ({ default: mod.FAQ })));
const FeedBack = lazy(() =>
  import("./feedback").then((mod) => ({ default: mod.FeedBack })),
);
const CarouselAuto = lazy(() =>
  import("./carouselAuto").then((mod) => ({ default: mod.CarouselAuto })),
);

interface BelowFoldContentProps {
  onOpenModal: () => void;
}

export default function BelowFoldContent({
  onOpenModal,
}: BelowFoldContentProps) {
  return (
    <>
      <SecondPage />
      <ThirdPage />
      <FeedBack />
      <FourthPage />
      <FifthPage />
      <SixthPage />

      <section className="relative">
        <img
          src="background.webp"
          alt="Background with waves"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 700px) 400px, 570px"
          className="absolute top-0 right-0 -z-10 h-full w-full object-cover"
        />
        <article className="bg-background/30 h-full w-full py-16">
          <Suspense fallback={<div className="h-64" />}>
            <CarouselAuto />
          </Suspense>
        </article>
      </section>

      <section className="bg-primary text-background py-16">
        <div className="m-auto flex max-w-4xl flex-col px-4 last:items-center">
          <h2 className="font-merriweather mb-4 text-2xl font-bold">
            Um guia simples para ajudar você a se alimentar melhor na gestação.
          </h2>
          <div className="m-auto mb-6 w-full sm:w-3/5">
            <p>Neste guia você vai aprender:</p>
            <p>✔ O que realmente importa na alimentação durante a gestação</p>
            <p>✔ Como montar refeições equilibradas de forma simples</p>
            <p>✔ Os principais erros que aumentam riscos na gravidez</p>
            <p>✔ Como a nutrição pode ajudar a prevenir complicações</p>
          </div>
          <button
            onClick={onOpenModal}
            className="bg-background text-primary cursor-pointer rounded-lg px-6 py-3 font-bold transition hover:bg-gray-200"
          >
            Baixe agora
          </button>
        </div>
      </section>

      <FAQ />

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
