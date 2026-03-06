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
import { FaWhatsapp } from "react-icons/fa6";
import { onLCP } from "web-vitals";

function App() {
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
        {/* <div className="absolute top-0 left-0 -z-10 h-screen min-h-screen w-full bg-[url(public/backgroundInitial.jpg)] bg-cover bg-center bg-no-repeat object-fill"></div> */}
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
        <FAQ />
        <FeedBack />
        <a aria-label="Link para whatsapp" href="https://wa.link/6mo3a2">
          <FaWhatsapp className="bg-background/50 fixed right-2 bottom-2 z-50 size-16 animate-bounce rounded-3xl p-1 text-green-500 sm:size-24 lg:right-1/12" />
        </a>
      </main>
      <Footer />
    </>
  );
}

export default App;
