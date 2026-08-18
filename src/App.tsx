import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { FirstPage } from "./components/ui/firstPage";
import { Header } from "./components/ui/header";
import { FaWhatsapp } from "react-icons/fa";

const BelowFoldContent = lazy(() => import("./components/ui/belowFoldContent"));
const downloadModalImport = () => import("./components/ui/downloadModal");
const DownloadModal = lazy(() =>
  downloadModalImport().then((mod) => ({
    default: mod.DownloadModal,
  })),
);

const MODAL_AUTO_OPEN_DELAY_MS = 15000;
const MODAL_SHOWN_KEY = "guia-modal-shown";

function scheduleIdlePrefetch(callback: () => void) {
  const ric = window.requestIdleCallback as
    | typeof window.requestIdleCallback
    | undefined;
  if (ric) {
    const id = ric(callback);
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(callback, 1);
  return () => window.clearTimeout(id);
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  useEffect(() => {
    if (sessionStorage.getItem(MODAL_SHOWN_KEY)) return;

    // Prefetch the modal chunk during idle time so it's ready to render
    // instantly once the timer below fires, instead of fetching on demand.
    const cancelIdlePrefetch = scheduleIdlePrefetch(() => {
      downloadModalImport();
    });

    const timerId = window.setTimeout(() => {
      sessionStorage.setItem(MODAL_SHOWN_KEY, "1");
      setIsModalOpen(true);
    }, MODAL_AUTO_OPEN_DELAY_MS);

    return () => {
      cancelIdlePrefetch();
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <Header />

      <main className="font-openSans relative flex w-full flex-col gap-10 overflow-hidden max-[600px]:text-center">
        <FirstPage />
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

      <Analytics />
    </>
  );
}

export default App;
