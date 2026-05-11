import { lazy, Suspense, useEffect, useState } from "react";
import { FirstPage } from "./components/ui/firstPage";
import { Header } from "./components/ui/header";
import { Footer } from "./components/ui/footer";

const SecondPage = lazy(() =>
  import("./components/ui/secondPage").then((mod) => ({
    default: mod.SecondPage,
  })),
);
const ThirdPage = lazy(() =>
  import("./components/ui/thirdPage").then((mod) => ({
    default: mod.ThirdPage,
  })),
);
const FourthPage = lazy(() =>
  import("./components/ui/fourthPage").then((mod) => ({
    default: mod.FourthPage,
  })),
);
const FifthPage = lazy(() =>
  import("./components/ui/fifthPage").then((mod) => ({
    default: mod.FifthPage,
  })),
);
const SixthPage = lazy(() =>
  import("./components/ui/SixthPage").then((mod) => ({
    default: mod.SixthPage,
  })),
);
const FAQ = lazy(() =>
  import("./components/ui/faq").then((mod) => ({
    default: mod.FAQ,
  })),
);
const FeedBack = lazy(() =>
  import("./components/ui/feedback").then((mod) => ({
    default: mod.FeedBack,
  })),
);
const CarouselAuto = lazy(() =>
  import("./components/ui/carouselAuto").then((mod) => ({
    default: mod.CarouselAuto,
  })),
);
const DownloadModal = lazy(() =>
  import("./components/ui/downloadModal").then((mod) => ({
    default: mod.DownloadModal,
  })),
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  useEffect(() => {
    const autoOpenTimer = window.setTimeout(() => setIsModalOpen(true), 2000);

    type IdleCallbackHandle = number;
    type IdleCallbackOptions = { timeout: number };
    type IdleCallback = (
      callback: () => void,
      options?: IdleCallbackOptions,
    ) => IdleCallbackHandle;
    type CancelIdleCallback = (handle: IdleCallbackHandle) => void;

    const requestIdleCallback = (
      window as unknown as {
        requestIdleCallback?: IdleCallback;
      }
    ).requestIdleCallback;
    const cancelIdleCallback = (
      window as unknown as {
        cancelIdleCallback?: CancelIdleCallback;
      }
    ).cancelIdleCallback;

    const idleId =
      requestIdleCallback?.(() => setLoadBelowFold(true), { timeout: 1000 }) ??
      window.setTimeout(() => setLoadBelowFold(true), 1000);

    return () => {
      window.clearTimeout(autoOpenTimer);
      if (cancelIdleCallback) {
        cancelIdleCallback(idleId as IdleCallbackHandle);
      } else {
        window.clearTimeout(idleId as number);
      }
    };
  }, []);

  return (
    <>
      <Header />

      <main className="font-openSans relative flex w-full flex-col gap-10 overflow-hidden max-[600px]:text-center">
        <FirstPage onOpenModal={() => setIsModalOpen(true)} />

        <Suspense fallback={null}>
          {loadBelowFold ? (
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
                  <CarouselAuto />
                </article>
              </section>
              <section className="bg-primary text-background py-16">
                <div className="m-auto flex max-w-4xl flex-col px-4 last:items-center">
                  <h2 className="font-merriweather mb-4 text-2xl font-bold">
                    Um guia simples para ajudar você a se alimentar melhor na
                    gestação.
                  </h2>
                  <div className="m-auto mb-6 w-full sm:w-3/5">
                    <p>Neste guia você vai aprender:</p>
                    <p>
                      ✔ O que realmente importa na alimentação durante a
                      gestação
                    </p>
                    <p>✔ Como montar refeições equilibradas de forma simples</p>
                    <p>✔ Os principais erros que aumentam riscos na gravidez</p>
                    <p>✔ Como a nutrição pode ajudar a prevenir complicações</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-background text-primary cursor-pointer rounded-lg px-6 py-3 font-bold transition hover:bg-gray-200"
                  >
                    Baixe agora
                  </button>
                </div>
              </section>

              <FAQ />
            </>
          ) : null}
        </Suspense>

        <a
          aria-label="Link para whatsapp"
          href="https://wa.link/6mo3a2"
          className="bg-background/50 fixed right-2 bottom-2 z-50 rounded-3xl p-2 shadow-xl transition hover:scale-105 sm:right-[2%] sm:bottom-4"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-16 w-16 text-green-500 sm:h-24 sm:w-24"
          >
            <path d="M12.04 2C6.47 2 2 6.47 2 12.04c0 2.12.62 4.09 1.69 5.73L2 22l4.33-1.43A9.97 9.97 0 0012.04 22c5.57 0 10.04-4.47 10.04-9.96C22.08 6.47 17.62 2 12.04 2zm5.26 13.74c-.23.64-1.4 1.24-1.9 1.33-.49.08-1.08.11-2.16-.24-.76-.28-1.7-.81-3.03-1.87-1.12-.91-1.87-2.05-2.08-2.36-.21-.3-.48-.39-.84-.24-.36.15-1.42.52-2.14.84-.73.33-1.16.16-1.51-.15-.35-.31-1.4-1.37-1.4-3.35 0-1.98 1.24-2.94 1.68-3.33.44-.39.98-.42 1.3-.42.32 0 .7 0 1.06 0 .35 0 .82-.14 1.28.72.46.86 1.55 2.99 1.68 3.21.13.22.22.49.05.78-.17.29-.25.48-.52.75-.27.27-.56.6-.8.81-.25.22-.51.47-.23.92.28.45 1.22 2.04 2.62 3.38 1.83 1.79 2.82 2.39 3.27 2.66.44.26.7.22.96.13.26-.09 1.6-.65 1.83-1.02.22-.37.22-.86.15-.94-.08-.08-.33-.13-.69-.24z" />
          </svg>
        </a>
      </main>

      <Suspense fallback={null}>
        {isModalOpen ? (
          <DownloadModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        ) : null}
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
