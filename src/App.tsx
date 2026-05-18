import { lazy, Suspense, useCallback, useState } from "react";
import { FirstPage } from "./components/ui/firstPage";
import { Header } from "./components/ui/header";
import { FaWhatsapp } from "react-icons/fa";

const BelowFoldContent = lazy(() => import("./components/ui/belowFoldContent"));
const DownloadModal = lazy(() =>
  import("./components/ui/downloadModal").then((mod) => ({
    default: mod.DownloadModal,
  })),
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <Header />

      <main className="font-openSans relative flex w-full flex-col gap-10 overflow-hidden max-[600px]:text-center">
        <FirstPage onOpenModal={handleOpenModal} />
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <div className="border-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent" />
            </div>
          }
        >
          <BelowFoldContent onOpenModal={handleOpenModal} />
        </Suspense>
        <a aria-label="Link para whatsapp" href="https://wa.link/6mo3a2">
          <FaWhatsapp className="bg-background/50 fixed right-2 bottom-2 z-50 size-16 animate-bounce rounded-3xl p-1 text-green-500 sm:size-24 lg:right-[2%] 2xl:right-[8%]" />
        </a>{" "}
      </main>

      {isModalOpen && (
        <Suspense fallback={null}>
          <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </Suspense>
      )}
    </>
  );
}

export default App;
