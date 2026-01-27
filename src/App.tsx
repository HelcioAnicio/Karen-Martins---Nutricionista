import { FirstPage } from './components/ui/firstPage';
import { Header } from './components/ui/header';
import { SecondPage } from './components/ui/secondPage';
import { ThirdPage } from './components/ui/thirdPage';
import { FourthPage } from './components/ui/fourthPage';
import { FifthPage } from './components/ui/fifthPage';
import { SixthPage } from './components/ui/SixthPage';

function App() {
  return (
    <>
      <Header />
      <main className='flex w-full flex-col gap-10 font-openSans'>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
      </main>
      {/* <footer>Rodapé</footer> */}
    </>
  );
}

export default App;
