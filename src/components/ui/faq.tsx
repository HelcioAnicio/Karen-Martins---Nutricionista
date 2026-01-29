import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQ = () => {
  return (
    <section className='w-full max-w-5xl flex m-auto'>
      <article className='flex flex-col gap-10 p-2 px-4 md:p-10 w-max'>
        <h2 className='font-bold font-merriweather text-lg lg:text-3xl'>
          Perguntas frequentes
        </h2>
        <Accordion
          type='single'
          collapsible
          defaultValue='item-1'
          className='w-full flex flex-col gap-8 border-none'>
          <AccordionItem
            value='item-1'
            className='w-full max-w-3xl border-none'>
            <AccordionTrigger className='bg-foreground relative text-background pl-10 rounded-b-none'>
              <div className='absolute -top-3 font-bold font-merriweather -left-2 md:-top-4 md:-left-4 p-1 w-9 text-center scale-125 text-xl bg-foreground rounded-full'>
                1
              </div>
              A avaliação gratuita é realmente sem custo?
            </AccordionTrigger>
            <AccordionContent className='bg-secondary-foreground/80  rounded-t-none rounded-b-lg text-background p-2 md:p-10'>
              Sim - é um momento de escuta e acolhimento, onde conversamos sobre
              suas necessidades, histórico e objetivos. Não há compromisso
              algum, apenas a oportunidade de nos conhecermos e entendermos se
              meu trabalho faz sentido para você neste momento.{' '}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-2'
            className='w-full max-w-3xl border-none'>
            <AccordionTrigger className='bg-foreground relative text-background pl-10 rounded-b-none'>
              <div className='absolute -top-3 font-bold font-merriweather -left-2 md:-top-4 md:-left-4 p-1 w-9 text-center scale-125 text-xl bg-foreground rounded-full'>
                2
              </div>
              As consultas são 100% online?
            </AccordionTrigger>
            <AccordionContent className='bg-secondary-foreground/80 rounded-t-none rounded-b-lg text-background p-2 md:p-10'>
              Sim. Atendo gestantes de todo o Brasil com a mesma atenção e
              acolhimento de um encontro presencial. As consultas são realizadas
              por videochamada, em horários flexíveis, respeitando sua rotina e
              conforto.{' '}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-3'
            className='w-full max-w-3xl border-none'>
            <AccordionTrigger className='bg-foreground relative text-background pl-10 rounded-b-none'>
              <div className='absolute -top-3 font-bold font-merriweather -left-2 md:-top-4 md:-left-4 p-1 w-9 text-center scale-125 text-xl bg-foreground rounded-full'>
                3
              </div>
              E se eu tiver uma condição clínica específica, como diabetes
              gestacional ou hipertensão?{' '}
            </AccordionTrigger>
            <AccordionContent className='bg-secondary-foreground/80 rounded-t-none rounded-b-lg text-background p-2 md:p-10'>
              Esses são justamente os casos em que meu trabalho é mais
              direcionado. Tenho experiência hospitalar de mais de 10 anos no
              cuidado de gestantes de alto risco. Cada plano é elaborado com
              base em protocolos clínicos atualizados e adaptado à sua realidade
              individual.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-4'
            className='w-full max-w-3xl border-none'>
            <AccordionTrigger className='bg-foreground relative text-background pl-10 rounded-b-none'>
              <div className='absolute -top-3 font-bold font-merriweather -left-2 md:-top-4 md:-left-4 p-1 w-9 text-center scale-125 text-xl bg-foreground rounded-full'>
                4
              </div>
              O atendimento é coberto por convênios médicos?
            </AccordionTrigger>
            <AccordionContent className='bg-secondary-foreground/80 rounded-t-none rounded-b-lg text-background p-2 md:p-10'>
              As consultas são particulares, mas forneço toda a documentação
              necessária para reembolso junto ao seu plano de saúde, caso ele
              ofereça essa opção. Inclui nota fiscal, recibo detalhado e
              relatório técnico completo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-5'
            className='w-full max-w-3xl border-none'>
            <AccordionTrigger className='bg-foreground relative text-background pl-10 rounded-b-none'>
              <div className='absolute -top-3 font-bold font-merriweather -left-2 md:-top-4 md:-left-4 p-1 w-9 text-center scale-125 text-xl bg-foreground rounded-full'>
                5
              </div>
              Quanto tempo dura o acompanhamento?
            </AccordionTrigger>
            <AccordionContent className='bg-secondary-foreground/80 rounded-t-none rounded-b-lg text-background p-2 md:p-10'>
              Depende do plano escolhido. Os atendimentos podem ser pontuais
              (para dúvidas ou orientações específicas) ou abranger toda a
              gestação, além de planos específicos para o pós-parto e introdução
              alimentar. Construímos juntas o melhor caminho.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-6'
            className='w-full max-w-3xl border-none'>
            <AccordionTrigger className='bg-foreground relative text-background pl-10 rounded-b-none'>
              <div className='absolute -top-3 font-bold font-merriweather -left-2 md:-top-4 md:-left-4 p-1 w-9 text-center scale-125 text-xl bg-foreground rounded-full'>
                6
              </div>
              Como funciona o suporte e o acesso ao plano alimentar?
            </AccordionTrigger>
            <AccordionContent className='bg-secondary-foreground/80 rounded-t-none rounded-b-lg text-background p-2 md:p-10'>
              Todo o acompanhamento é feito pelo aplicativo Numax, onde você
              terá: seu plano alimentar personalizado, materiais e orientações
              complementares, histórico de exames e evolução, e espaço para
              compartilhar sua rotina comigo. Além disso, ofereço suporte direto
              via WhatsApp para dúvidas e acompanhamento contínuo entre as
              consultas.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </section>
  );
};
