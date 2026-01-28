import { ButtonCTA } from './buttonCTA';
import { Card, CardContent, CardHeader, CardTitle } from './card';

export const FourthPage = () => {
  const contents = [
    {
      title: 'Avaliação gratuita',
      text: 'Primeiro contato para entender suas necessidades, histórico clínico, rotina e objetivos. É um momento de escuta ativa, sem compromisso, onde apresento o programa ideal para você.',
    },
    {
      title: 'Escolha do plano',
      text: 'Seleção entre planos personalizados que se adequam ao seu momento e às suas necessidades específicas - desde consultas pontuais até acompanhamento completo durante toda a gestação.',
    },
    {
      title: 'Consulta oficial',
      text: 'Início do seu plano alimentar personalizado, com orientações detalhadas, ajustes para sua rotina e esclarecimento de todas as suas dúvidas. Aqui começa a transformação.',
    },
    {
      title: 'Acompanhamento contínuo',
      text: 'Suporte constante via WhatsApp e App Numax, com acesso ao seu plano alimentar, materiais complementares, histórico de evolução e canal direto para ajustes e orientações.',
    },
  ];
  return (
    <section>
      <article className='max-w-5xl m-auto flex flex-col gap-10 p-2 md:p-10 md:pb-20'>
        <h2 className='font-bold text-xl'>
          Como é o atendimento personalizado?
        </h2>
        <ul className='flex flex-wrap gap-10 m-auto justify-center'>
          {contents.map((content) => (
            <li>
              <Card className='border-none text-center transition-all duration-300 shadow-lg hover:bg-foreground hover:text-background rounded-br-[75px] rounded-tl-[75px] h-56 min-h-max'>
                <CardHeader>
                  <CardTitle className='font-semibold text-xl font-merriweather'>
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className='max-w-sm font-light '>
                  {content.text}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
        <ButtonCTA text={'AGENDAR MINHA AVALIAÇAO GRATUITA'} />
      </article>
    </section>
  );
};
