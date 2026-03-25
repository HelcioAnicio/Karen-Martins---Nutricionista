import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const FAQS = [
    {
      title: "O atendimento é online ou presencial?",
      text: "100% online, por videochamada. Você é atendida com toda atenção de qualquer lugar do Brasil e do mundo como Europa, EUA e Canadá.",
    },
    {
      title: "Quanto custa o acompanhamento?",
      text: "O investimento varia conforme o nível de suporte. Na sessão de diagnóstico apresento as opções com valores claros para você decidir com tranquilidade.",
    },
    {
      title: "O atendimento é coberto por convênios médicos?",
      text: "As consultas são particulares, mas forneço toda a documentação necessária para reembolso junto ao seu plano de saúde, caso ele ofereça essa opção. Inclui nota fiscal, recibo detalhado e relatório técnico completo.",
    },
    {
      title: "Posso começar em qualquer semana de gestação?",
      text: "Sim. Atendo desde o pré-natal até o pós-parto. Quanto mais cedo começar, melhor — mas nunca é tarde.",
    },
    {
      title: "E se eu tiver enjoos e não conseguir seguir o plano?",
      text: "O plano é feito para a sua realidade, inclusive para os dias difíceis. Ajustamos sempre que necessário",
    },
    {
      title: "Como funciona o suporte e o acesso ao plano alimentar?",
      text: "Todo o acompanhamento é feito pelo aplicativo Numax, onde você terá: seu plano alimentar personalizado, materiais e orientações complementares, histórico de exames e evolução, e espaço para compartilhar sua rotina comigo. Além disso, ofereço suporte direto via WhatsApp para dúvidas e acompanhamento contínuo entre as consultas.",
    },
  ];

  return (
    <section id="faq" className="m-auto flex w-full max-w-5xl pt-5">
      <article className="m-auto flex w-max flex-col items-center gap-10 px-4 md:py-5">
        <h2 className="font-merriweather text-lg font-bold md:text-2xl lg:text-3xl">
          Perguntas frequentes
        </h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="flex w-full flex-col gap-8 border-none"
        >
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i + 1}`}
              className="w-full max-w-3xl cursor-pointer border-none"
            >
              <AccordionTrigger className="bg-primary text-background relative rounded-b-none pl-10 md:text-lg lg:text-xl">
                <div className="font-merriweather text-secondary bg-primary absolute -top-3 -left-2 w-9 scale-125 rounded-full p-1 text-center text-xl font-bold md:-top-4 md:-left-4">
                  {i + 1}
                </div>
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="bg-secondary-foreground/80 text-background rounded-t-none rounded-b-lg p-2 text-sm font-light md:p-10 md:text-lg">
                {faq.text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </article>
    </section>
  );
};
