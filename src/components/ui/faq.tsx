import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const FAQS = [
    {
      title: "As consultas são 100% online?",
      text: "Sim. Atendo gestantes de todo o Brasil com a mesma atenção e acolhimento de um encontro presencial. As consultas são realizadas por videochamada, em horários flexíveis, respeitando sua rotina e conforto.",
    },
    {
      title:
        "E se eu tiver uma condição clínica específica, como diabetes gestacional ou hipertensão?",
      text: "Esses são justamente os casos em que meu trabalho é mais direcionado. Tenho experiência hospitalar de mais de 10 anos no cuidado de gestantes de alto risco. Cada plano é elaborado com base em protocolos clínicos atualizados e adaptado à sua realidade individual.",
    },
    {
      title: "O atendimento é coberto por convênios médicos?",
      text: "As consultas são particulares, mas forneço toda a documentação necessária para reembolso junto ao seu plano de saúde, caso ele ofereça essa opção. Inclui nota fiscal, recibo detalhado e relatório técnico completo.",
    },
    {
      title: "Quanto tempo dura o acompanhamento?",
      text: "Depende do plano escolhido. Os atendimentos podem ser pontuais (para dúvidas ou orientações específicas) ou abranger toda a gestação, além de planos específicos para o pós‑parto e introdução alimentar. Construímos juntas o melhor caminho.",
    },
    {
      title: "Como funciona o suporte e o acesso ao plano alimentar?",
      text: "Todo o acompanhamento é feito pelo aplicativo Numax, onde você terá: seu plano alimentar personalizado, materiais e orientações complementares, histórico de exames e evolução, e espaço para compartilhar sua rotina comigo. Além disso, ofereço suporte direto via WhatsApp para dúvidas e acompanhamento contínuo entre as consultas.",
    },
  ];

  return (
    <section id="faq" className="m-auto flex w-full max-w-5xl pt-5">
      <article className="flex w-max flex-col gap-10 px-4 md:py-5">
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
                <div className="font-merriweather bg-primary absolute -top-3 -left-2 w-9 scale-125 rounded-full p-1 text-center text-xl font-bold md:-top-4 md:-left-4">
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
