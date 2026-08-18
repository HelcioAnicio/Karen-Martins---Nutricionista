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

function scheduleIdlePrefetch(callback: () => void, timeout?: number) {
  const ric = window.requestIdleCallback as
    | typeof window.requestIdleCallback
    | undefined;
  if (ric) {
    const id = ric(callback, timeout ? { timeout } : undefined);
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(callback, 1);
  return () => window.clearTimeout(id);
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBelowFoldReady, setIsBelowFoldReady] = useState(false);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  useEffect(() => {
    // Rendering the below-fold sections (accordion, carousel, review list,
    // etc.) synchronously alongside the hero is enough main-thread work
    // under CPU throttling to delay painting the hero's own LCP image.
    // Deferring the mount to idle time lets the hero paint first.
    return scheduleIdlePrefetch(() => setIsBelowFoldReady(true), 1500);
  }, []);

  useEffect(() => {
    // Prefetch the modal chunk during idle time so it's ready to render
    // instantly once the visitor clicks a "baixar o guia" CTA.
    return scheduleIdlePrefetch(() => {
      downloadModalImport();
    });
  }, []);

  return (
    <>
      <Header />

      <main className="font-openSans relative flex w-full flex-col gap-10 overflow-hidden max-[600px]:text-center">
        <FirstPage />
        {isBelowFoldReady && (
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center">
                <div className="border-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent" />
              </div>
            }
          >
            <BelowFoldContent onOpenModal={handleOpenModal} />
          </Suspense>
        )}
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
