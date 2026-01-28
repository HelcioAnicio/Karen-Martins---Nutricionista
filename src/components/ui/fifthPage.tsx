export const FifthPage = () => {
  return (
    <section className='max-w-5xl m-auto w-full'>
      <article className='flex flex-wrap gap-10 p-2 md:pb-10 items-center'>
        <div className=' max-w-lg md:max-w-sm flex flex-col gap-5'>
          <p>
            Meu trabalho vai além de entregar um cardápio. É sobre construir
            autonomia,{' '}
            <span className='font-bold'>
              confiança e uma relação mais leve com a alimentação.
            </span>
          </p>
          <p>
            Aqui, você é vista como um todo — sua rotina, preferências, desafios
            e emoções.{' '}
            <span className='font-bold'>
              Cada plano é único, porque cada mulher e cada gestação também são.
            </span>
          </p>
        </div>

        <img
          className='rounded-lg w-sm m-auto md:w-64 shadow-lg'
          src=' /complement.jpg'
          alt='Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável'
        />
      </article>
    </section>
  );
};
