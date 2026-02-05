import { ButtonCTA } from "./buttonCTA";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="m-auto w-full max-w-5xl p-2 py-20 max-[600px]:text-center md:px-5">
      <div className="flex flex-col gap-20">
        <div className="flex max-w-2xl flex-col gap-5">
          <h2 className="font-merriweather max-w-xs text-xl font-bold max-[600px]:m-auto md:max-w-lg md:text-2xl lg:text-3xl">
            Cuidar da sua nutriçaõ, é cuidar do futuro do seu bebê
          </h2>
          <p className="text-lg">
            Seu corpo está gerando uma vida e merece ser cuidado com a mais alta
            excelência. Um acompanhamento que integra ciência, sensibilidade e
            presença transforma a gestação em uma experiência mais leve e
            segura.
          </p>
          <p className="text-lg">
            Dê o primeiro passo para uma gestação mais saudável e cheia de
            confiança. Estou aqui para caminhar ao seu lado, com todo o
            acolhimento e expertise que você e seu bebê merecem.
          </p>
          <a href="https://wa.me/5511921341072">
            <ButtonCTA text={"QUERO COMEÇAR AGORA"} />
          </a>
        </div>
        <div className="-mb-12 flex flex-col gap-7 font-light italic sm:gap-1">
          <div className="flex flex-wrap items-center gap-5 text-xl">
            <div className="flex flex-wrap items-center gap-1">
              <p>Karen Martins - Nutricionista CRN3 44547</p>
              <p>Especializada em Nutrição Materno Infantil</p>
            </div>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/karenmartins.nutri?igsh=MXdkNGF5ODY3OGl0Zw==">
                <FaInstagram />
              </a>
              <a href="https://wa.me/5511921341072">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <p className="w-4/5 text-xs font-extralight md:text-base">
            As informações desta página não substituem acompanhamento médico.
            Consulte sempre seu obstetra.
          </p>
        </div>
      </div>
    </footer>
  );
};
