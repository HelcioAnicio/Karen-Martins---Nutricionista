import { FirstPage } from './components/ui/firstPage';
import { Header } from './components/ui/header';
import { SecondPage } from './components/ui/secondPage';

function App() {
  return (
    <>
      <Header />
      <main className='h-[calc(100dvh-56px)] flex w-full flex-wrap gap-16'>
        <FirstPage />
        <SecondPage />
      </main>
      {/* <footer>Rodapé</footer> */}
    </>
  );
}

export default App;
