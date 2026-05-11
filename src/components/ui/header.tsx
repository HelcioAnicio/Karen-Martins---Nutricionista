import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="bg-primary text-background sticky top-0 z-50 m-auto w-full px-2 py-4">
      <div className="m-auto w-full max-w-5xl">
        <nav className="text-background flex w-full justify-end">
          <Sheet>
            <SheetTrigger>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 cursor-pointer lg:hidden"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </SheetTrigger>
            <SheetContent className="bg-primary h-max rounded-b-lg pb-10">
              <SheetHeader>
                <SheetTitle className="font-merriweather text-background text-xl font-bold">
                  Karen Martins
                </SheetTitle>
              </SheetHeader>
              <ul className="text-foreground flex flex-col items-end gap-3 p-3 pr-10">
                <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                  <a aria-label="Direcionar para a seção Inicial" href="#home">
                    Home
                  </a>
                </li>
                <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                  <a
                    aria-label="Direcionar para a seção Sobre mim"
                    href="#aboutMe"
                  >
                    Sobre mim
                  </a>
                </li>
                <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                  <a
                    aria-label="Direcionar para a seção Como funciona?"
                    href="#howWorks"
                  >
                    Como funciona?
                  </a>
                </li>
                <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                  <a
                    aria-label="Direcionar para a seção diferenciais"
                    href="#diferenciais"
                  >
                    Diferenciais
                  </a>
                </li>
                <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                  <a aria-label="Direcionar para a seção Dúvidas" href="#faq">
                    Dúvidas
                  </a>
                </li>
                <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                  <a
                    aria-label="Direcionar para a seção feedback"
                    href="#feedback"
                  >
                    Feedback
                  </a>
                </li>
                <li className="text-background flex gap-4 p-1 text-4xl">
                  {" "}
                  <a
                    aria-label="Link para o instagram"
                    href="https://www.instagram.com/karenmartins.nutri?igsh=MXdkNGF5ODY3OGl0Zw=="
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-7 w-7"
                    >
                      <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM20 7C20 5.34315 18.6569 4 17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7Z" />
                      <path d="M12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7Z" />
                      <path d="M17.5 6.5H17.51" />
                    </svg>
                  </a>
                  <a
                    aria-label="Link para whatsapp"
                    href="https://wa.link/6mo3a2"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-7 w-7"
                    >
                      <path d="M16.24 7.76a6.72 6.72 0 00-9.49 0c-2.62 2.63-2.62 6.88 0 9.51l.16.16-.96 3.5 3.6-.95.14.16A6.71 6.71 0 0017.5 8.4a6.7 6.7 0 00-1.26-4.64zm-8.83 9.6l-.15-.16a5.35 5.35 0 01-.81-6.12 5.3 5.3 0 017.31-1.28 5.36 5.36 0 011.31 6.74l-1.17 2.13-.2.4-.4.1-2.78.75-.7-.46z" />
                      <path d="M13.31 11.33c-.21-.03-.9-.33-1.04-.37-.13-.04-.23-.05-.33.05-.1.1-.4.37-.5.45-.1.08-.2.09-.37.03-.16-.06-.67-.25-1.27-.79-.47-.42-.79-.93-.88-1.08-.09-.15-.01-.23.06-.3.06-.06.14-.16.21-.24.07-.08.1-.14.15-.23.04-.08.02-.16-.01-.22-.03-.06-.32-.77-.44-1.06-.12-.28-.24-.24-.33-.24-.09-.01-.2-.01-.31-.01-.1 0-.26.04-.4.18-.14.13-.55.54-.55 1.32 0 .77.56 1.5.64 1.6.08.1 1.11 1.7 2.69 2.38.37.16.66.26.88.34.37.13.71.11.98.07.3-.05.9-.35 1.03-.69.12-.33.12-.61.08-.67-.04-.06-.15-.09-.32-.15z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
        <nav className="text-background hidden justify-end lg:flex">
          <ul className="text-foreground flex items-center gap-5 pr-5 text-xl">
            <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
              <a aria-label="Direcionar para a seção Inicial" href="#home">
                Home
              </a>
            </li>
            <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
              <a aria-label="Direcionar para a seção Sobre mim" href="#aboutMe">
                Sobre mim
              </a>
            </li>
            <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
              <a
                aria-label="Direcionar para a seção Como funciona?"
                href="#howWorks"
              >
                Como funciona?
              </a>
            </li>
            <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
              <a
                aria-label="Direcionar para a seção diferenciais"
                href="#diferenciais"
              >
                Diferenciais
              </a>
            </li>
            <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
              <a aria-label="Direcionar para a seção Dúvidas" href="#faq">
                Dúvidas
              </a>
            </li>
            <li className="hover:border-b-background drop-shadow-red text-background border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
              <a aria-label="Direcionar para a seção feedback" href="#feedback">
                Feedback
              </a>
            </li>
            <li className="text-background flex gap-8 text-2xl">
              <a
                aria-label="Link para o instagram"
                href="https://www.instagram.com/karenmartins.nutri?igsh=MXdkNGF5ODY3OGl0Zw=="
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM20 7C20 5.34315 18.6569 4 17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7Z" />
                  <path d="M12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7Z" />
                  <path d="M17.5 6.5H17.51" />
                </svg>
              </a>
              <a aria-label="Link para whatsapp" href="https://wa.link/6mo3a2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M16.24 7.76a6.72 6.72 0 00-9.49 0c-2.62 2.63-2.62 6.88 0 9.51l.16.16-.96 3.5 3.6-.95.14.16A6.71 6.71 0 0017.5 8.4a6.7 6.7 0 00-1.26-4.64zm-8.83 9.6l-.15-.16a5.35 5.35 0 01-.81-6.12 5.3 5.3 0 017.31-1.28 5.36 5.36 0 011.31 6.74l-1.17 2.13-.2.4-.4.1-2.78.75-.7-.46z" />
                  <path d="M13.31 11.33c-.21-.03-.9-.33-1.04-.37-.13-.04-.23-.05-.33.05-.1.1-.4.37-.5.45-.1.08-.2.09-.37.03-.16-.06-.67-.25-1.27-.79-.47-.42-.79-.93-.88-1.08-.09-.15-.01-.23.06-.3.06-.06.14-.16.21-.24.07-.08.1-.14.15-.23.04-.08.02-.16-.01-.22-.03-.06-.32-.77-.44-1.06-.12-.28-.24-.24-.33-.24-.09-.01-.2-.01-.31-.01-.1 0-.26.04-.4.18-.14.13-.55.54-.55 1.32 0 .77.56 1.5.64 1.6.08.1 1.11 1.7 2.69 2.38.37.16.66.26.88.34.37.13.71.11.98.07.3-.05.9-.35 1.03-.69.12-.33.12-.61.08-.67-.04-.06-.15-.09-.32-.15z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
