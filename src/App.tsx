import { FirstPage } from "./components/ui/firstPage";
import { Header } from "./components/ui/header";
import { SecondPage } from "./components/ui/secondPage";
import { ThirdPage } from "./components/ui/thirdPage";
import { FourthPage } from "./components/ui/fourthPage";
import { FifthPage } from "./components/ui/fifthPage";
import { SixthPage } from "./components/ui/SixthPage";
import { FAQ } from "./components/ui/faq";

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
      </main>
      {/* <footer>Rodapé</footer> */}
    </>
  );
}

export default App;
