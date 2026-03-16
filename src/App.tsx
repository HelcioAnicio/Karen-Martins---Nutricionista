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

  // Exemplo de chamada no servidor (Server Action ou API Route)
  // const GOOGLE_MAPS_API_KEY = "AIzaSyBFWWYwTqp-NEo1r7l5mEvIbfZtDi9Y6O8";
  // const PLACE_ID = "7872526946686050572";
  // const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_MAPS_API_KEY}&language=pt-BR`;

  return (
    <>
      <Header />

      <main className="font-openSans relative flex w-full flex-col gap-10 max-[600px]:text-center">
        {/* <div className="absolute top-0 left-0 -z-10 h-screen min-h-screen w-full bg-[url(/backgroundInitial.jpg)] bg-cover bg-center bg-no-repeat object-fill"></div> */}
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
          <div className="m-auto max-w-4xl px-4 text-center">
            <h2 className="font-merriweather mb-4 text-2xl font-bold">
              Um guia simples para ajudar você a se alimentar melhor na
              gestação.
            </h2>
            <p className="mb-6">
              Neste guia você vai aprender:
              <br />
              ✔ O que realmente importa na alimentação durante a gestação
              <br />
              ✔ Como montar refeições equilibradas de forma simples
              <br />
              ✔ Os principais erros que aumentam riscos na gravidez
              <br />✔ Como a nutrição pode ajudar a prevenir complicações
            </p>
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
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </>
  );
}

export default App;
