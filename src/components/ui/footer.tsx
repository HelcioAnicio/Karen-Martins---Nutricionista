import { ButtonCTA } from "./buttonCTA";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="m-auto w-full max-w-5xl p-2 py-20 md:px-5">
      <div className="flex flex-col gap-20">
        <div className="flex max-w-2xl flex-col gap-5">
          <h2 className="font-merriweather max-w-xs text-xl font-bold md:max-w-lg md:text-2xl lg:text-3xl">
            Cuidar da sua nutriçaõ, é cuidar do futuro do seu bebê
          </h2>
          <p className="text-lg">
            Este é o momento de se colocar em primeiro lugar, de nutrir seu
            corpo e sua alma com o mesmo carinho que você já dedica ao bebê que
            está crescendo dentro de você. Você merece um acompanhamento que une
            ciência, sensibilidade e presença real.
          </p>
          <p className="text-lg">
            Dê o primeiro passo para uma gestação mais leve, saudável e cheia de
            confiança. Estou aqui para caminhar ao seu lado, com todo o
            acolhimento e expertise que você e seu bebê merecem.
          </p>
          <ButtonCTA text={"AGENDE AVALIAÇAO GRATUITA"} />
        </div>
        <div className="-mb-12 flex flex-col gap-7 font-light italic sm:gap-1">
          <div className="flex flex-wrap items-center gap-5 text-xl">
            <div className="flex flex-wrap items-center">
              <p>Karen Martins 4 Nutricionista CRN3 44547</p>
              <p>Especialista em Nutrição Materno Infantil</p>
            </div>
            <div className="flex gap-2">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <p className="text-xs font-extralight md:text-base">
            As informações desta página não substituem acompanhamento médico.
            Consulte sempre seu obstetra.
          </p>
        </div>
      </div>
    </footer>
  );
};
