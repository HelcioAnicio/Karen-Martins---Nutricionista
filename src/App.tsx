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

function App() {
  return (
    <>
      <Header />
      <main className="font-openSans flex w-full flex-col gap-10">
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
