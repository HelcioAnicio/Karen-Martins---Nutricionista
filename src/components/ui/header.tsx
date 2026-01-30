import { IoMenu } from "react-icons/io5";
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
    <header className="bg-background sticky top-0 z-50 w-full px-2 py-4">
      <nav className="flex w-full justify-end">
        <Sheet>
          <SheetTrigger>
            <IoMenu className="h-6 w-6 lg:hidden" />
          </SheetTrigger>
          <SheetContent className="h-max rounded-b-lg pb-10">
            <SheetHeader>
              <SheetTitle className="font-merriweather text-xl font-bold">
                Karen Martins
              </SheetTitle>
            </SheetHeader>
            <ul className="text-foreground flex flex-col items-end gap-3 p-3 pr-10">
              <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                <a href="#home">Home</a>
              </li>
              <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                <a href="#aboutMe">Sobre mim</a>
              </li>
              <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                <a href="#howWorks">Como funciona?</a>
              </li>
              <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                <a href="#diferenciais">Diferenciais</a>
              </li>
              <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                <a href="#faq">Dúvidas</a>
              </li>
              <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
                <a href="#feedback">Feedback</a>
              </li>
              <li className="flex gap-4 p-1 text-4xl">
                {" "}
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
      <nav className="hidden justify-end lg:flex">
        <ul className="text-foreground flex items-center gap-5 pr-5">
          <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
            <a href="#home">Home</a>
          </li>
          <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
            <a href="#aboutMe">Sobre mim</a>
          </li>
          <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
            <a href="#howWorks">Como funciona?</a>
          </li>
          <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
            <a href="#diferenciais">Diferenciais</a>
          </li>
          <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
            <a href="#faq">Dúvidas</a>
          </li>
          <li className="hover:border-b-foreground border-b border-b-transparent p-0.5 transition-all duration-500 ease-in-out">
            <a href="#feedback">Feedback</a>
          </li>
          <li className="flex gap-8 text-2xl">
            {" "}
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
