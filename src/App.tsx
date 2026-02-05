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

function App() {
  return (
    <>
      <Header />
      <a href="https://wa.me/5511921341072">
        <FaWhatsapp className="bg-background fixed right-0 bottom-0 z-50 size-20 animate-bounce rounded-4xl p-2" />
      </a>

      <main className="font-openSans relative flex w-full flex-col gap-10 max-[600px]:text-center">
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
        <FAQ />
        <FeedBack />
      </main>
      <Footer />
    </>
  );
}

export default App;
