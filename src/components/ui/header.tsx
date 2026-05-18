import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

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
                  <a
                    aria-label="Link para o instagram"
                    href="https://www.instagram.com/karenmartins.nutri?igsh=MXdkNGF5ODY3OGl0Zw=="
                  >
                    <FaInstagram />
                  </a>
                  <a
                    aria-label="Link para whatsapp"
                    href="https://wa.link/6mo3a2"
                  >
                    <FaWhatsapp />
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
                <FaInstagram />
              </a>
              <a aria-label="Link para whatsapp" href="https://wa.link/6mo3a2">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
