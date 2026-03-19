import { FirstPage } from "./components/ui/firstPage";
import { Header } from "./components/ui/header";
import { SecondPage } from "./components/ui/secondPage";
import { ThirdPage } from "./components/ui/thirdPage";
import { FourthPage } from "./components/ui/fourthPage";
import { FifthPage } from "./components/ui/fifthPage";
import { SixthPage } from "./components/ui/SixthPage";
import { FAQ } from "./components/ui/faq";
import { FeedBack } from "./components/ui/feedback";
import { Footer } from "./components/ui/footer";
import { DownloadModal } from "./components/ui/downloadModal";
import { FaWhatsapp } from "react-icons/fa6";
import { onLCP } from "web-vitals";
import { CarouselAuto } from "./components/ui/carouselAuto";
import { useState, useEffect } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log("LCP candidate:", entry.startTime, entry);
    }
  }).observe({ type: "largest-contentful-paint", buffered: true });

  onLCP(console.log);

  return (
    <>
      <Header />

      <main className="font-openSans relative flex w-full flex-col gap-10 max-[600px]:text-center">
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FeedBack />

        <FourthPage />
        <FifthPage />
        <SixthPage />
        <section className="relative">
          <img
            src="background.webp"
            alt="Descritivo"
            loading="lazy"
            decoding="async"
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
              <p>✔ O que realmente importa na alimentação durante a gestação</p>
              <p>✔ Como montar refeições equilibradas de forma simples</p>
              <p>✔ Os principais erros que aumentam riscos na gravidez</p>
              <p>✔ Como a nutrição pode ajudar a prevenir complicações</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-background text-primary rounded-lg px-6 py-3 font-bold transition hover:bg-gray-200"
            >
              Baixe agora
            </button>
          </div>
        </section>

        <FAQ />
        <a aria-label="Link para whatsapp" href="https://wa.link/6mo3a2">
          <FaWhatsapp className="bg-background/50 fixed right-2 bottom-2 z-50 size-16 animate-bounce rounded-3xl p-1 text-green-500 sm:size-24 lg:right-[2%] 2xl:right-[8%]" />
        </a>
      </main>
      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
      />
      <Footer />
    </>
  );
}

export default App;
