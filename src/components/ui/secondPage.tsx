import { GiStomach, GiWeightScale } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { Card } from "./card";
import { FaHandHoldingHeart } from "react-icons/fa6";

export const SecondPage = () => {
  return (
    <section className="m-auto flex w-full justify-center bg-[url(public/designBackgroundSecond.png)] bg-cover bg-center bg-no-repeat py-5 sm:items-center lg:bg-top-right">
      <article className="flex w-full max-w-5xl flex-col gap-5 p-1 px-4 sm:gap-16 sm:px-10">
        <div className="flex flex-wrap justify-between gap-5">
          <Card className="text-background flex w-max flex-1 flex-col justify-center border-none bg-linear-to-r from-[#796A52] from-50% to-[#796A52]/60 px-2 py-3 text-center font-semibold lg:text-xl">
            <p className="animate-pulse">
              {" "}
              <span className="text-2xl lg:text-4xl">+ 150</span> famílias
              acompanhadas
            </p>
          </Card>
          <Card className="text-background flex w-max flex-1 flex-col justify-center border-none bg-linear-to-r from-[#796A52] from-50% to-[#796A52]/60 px-2 py-3 text-center font-semibold lg:text-xl">
            <p className="animate-pulse">
              Nutrição pela Faculdade de Medicina do ABC
            </p>
          </Card>
          <Card className="text-background flex w-max flex-1 flex-col justify-center border-none bg-linear-to-r from-[#796A52] from-50% to-[#796A52]/60 px-2 py-3 text-center font-semibold lg:text-xl">
            <p className="animate-pulse">
              Especialista em nutrição materno infantil
            </p>
          </Card>
          <Card className="text-background flex w-max flex-1 flex-col justify-center border-none bg-linear-to-r from-[#796A52] from-50% to-[#796A52]/60 px-2 py-3 text-center font-semibold lg:text-xl">
            <p className="animate-pulse">
              <span className="text-2xl lg:text-4xl">+ 10 anos</span> de
              experiência
            </p>
          </Card>
        </div>
        <div className="flex w-full max-w-max flex-col gap-5 py-10">
          <h2 className="font-merriweather bg-background rounded-md p-2 text-2xl font-bold md:text-3xl">
            Por que cuidar da alimentação na gestação?
          </h2>
          <p className="border-primary bg-background rounded-r-md border-l-4 p-2 py-2 pl-2">
            Mais do que dietas e restrições, o cuidado nutricional na gestação
            tem como foco a prevenção e a promoção da saúde da mãe e do bebê,
            respeitando as necessidades de cada fase. <br /> Este acompanhamento
            é ideal para gestantes que querem garantir:{" "}
          </p>
        </div>
        <Card className="m-auto max-w-max border-none text-left shadow-lg">
          <ul className="flex flex-col gap-10 px-3">
            <li className="flex items-center gap-5">
              <GiWeightScale className="text-primary h-16 w-16 p-2" />
              <div>
                <p className="text-lg font-bold">Peso Saudável</p>
                <p>Ganho de peso adequado para cada fase da gestação</p>
              </div>
            </li>

            <li className="flex items-center gap-5">
              <FaHandHoldingHeart className="text-primary h-16 w-16 p-2" />
              <div>
                <p className="text-lg font-bold">Energia e bem estar</p>
                <p>
                  Melhora de sintomas como enjoos, azia, inchaços e sensação de
                  fraqueza.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-5">
              <GiStomach className="text-primary h-16 w-16 p-2" />
              <div>
                <p className="text-lg font-bold">Controle Glicêmico</p>
                <p>
                  Manutenção da glicemia em níveis seguros, previnindo
                  complicações
                </p>
              </div>
            </li>

            <li className="flex items-center gap-5">
              <FaHeartPulse className="text-primary h-16 w-16 p-2" />
              <div>
                <p className="text-lg font-bold">Pressão Equilibrada</p>
                <p>Redução de riscos relacionados à hipertensão gestacional</p>
              </div>
            </li>
            <li className="flex items-center gap-5">
              <MdOutlinePregnantWoman className="text-primary h-16 w-16 p-2" />
              <div>
                <p className="text-lg font-bold">Vínculo Fortalecido</p>
                <p>Conexão profunda com seu bebê por meio do autocuidado</p>
              </div>
            </li>
          </ul>
        </Card>
      </article>
    </section>
  );
};
