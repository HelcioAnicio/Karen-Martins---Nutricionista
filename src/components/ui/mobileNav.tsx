import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MobileNav({ open, onOpenChange }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
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
          <li className="text-background flex gap-4 p-1 text-4xl">
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
      </SheetContent>
    </Sheet>
  );
}
