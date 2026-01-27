import { FirstPage } from './components/ui/firstPage';
import { Header } from './components/ui/header';
import { SecondPage } from './components/ui/secondPage';
import { ThirdPage } from './components/ui/thirdPage';
import { FourthPage } from './components/ui/fourthPage';

function App() {
  return (
    <>
      <Header />
      <main className='flex w-full flex-col gap-10 font-openSans'>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
      </main>
      {/* <footer>Rodapé</footer> */}
    </>
  );
}

export default App;
