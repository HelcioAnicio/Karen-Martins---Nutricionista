import { ButtonCTA } from "./buttonCTA";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export const FourthPage = () => {
  const contents = [
    {
      title: "Consulta diagnóstica",
      text: "Um momento de escuta para compreender sua história, necessidades e expectativas. Com base nessa conversa, você recebe direcionamento profissional claro e decide, com segurança, sobre o formato de acompanhamento ideal para você.",
    },
    {
      title: "Escolha do plano",
      text: "Seleção entre planos personalizados que se adequam ao seu momento e às suas necessidades específicas - desde consultas pontuais até acompanhamento completo durante toda a gestação.",
    },
    {
      title: "Consulta oficial",
      text: "Início do seu plano alimentar personalizado, com orientações detalhadas, ajustes para sua rotina e esclarecimento de todas as suas dúvidas. Aqui começa a transformação.",
    },
    {
      title: "Acompanhamento contínuo",
      text: "Suporte constante via WhatsApp e App Numax, com acesso ao seu plano alimentar, materiais complementares, histórico de evolução e canal direto para ajustes e orientações.",
    },
  ];
  return (
    <section id="howWorks" className="m-auto w-full max-w-5xl">
      <article className="flex w-full flex-col items-center gap-10 p-2 md:px-10 md:py-5">
        <h2 className="self-start text-xl font-bold md:text-2xl lg:text-3xl">
          Como é o atendimento personalizado?
        </h2>
        <ul className="m-auto flex flex-wrap justify-center gap-10">
          {contents.map((content, index) => (
            <li key={index}>
              <Card className="hover:bg-foreground hover:text-background h-56 min-h-max rounded-tl-[75px] rounded-br-[75px] border-none text-center shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-merriweather text-xl font-semibold">
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="max-w-sm font-light">
                  {content.text}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
        <a aria-label="Link para whatsapp" href="https://wa.link/6mo3a2">
          <ButtonCTA
            ariaLabel="Link para conversar com o profissional"
            text={"QUERO SABER MAIS"}
          />
        </a>
      </article>
    </section>
  );
};
