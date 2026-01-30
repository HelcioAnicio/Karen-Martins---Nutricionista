export const FifthPage = () => {
  return (
    <section className="m-auto w-full max-w-5xl">
      <article className="flex flex-wrap items-center gap-10 p-2 md:px-10 md:pb-20">
        <div className="flex max-w-lg flex-col gap-5 md:max-w-sm">
          <p>
            Meu trabalho vai além de entregar um cardápio. É sobre construir
            autonomia,{" "}
            <span className="font-bold">
              confiança e uma relação mais leve com a alimentação.
            </span>
          </p>
          <p>
            Aqui, você é vista como um todo — sua rotina, preferências, desafios
            e emoções.{" "}
            <span className="font-bold">
              Cada plano é único, porque cada mulher e cada gestação também são.
            </span>
          </p>
        </div>

        <img
          className="m-auto w-sm rounded-lg shadow-lg md:w-64"
          width={208}
          height={312}
          src=" /complement.jpg"
          loading="lazy"
          alt="Imagem da Karen Martins - Está em pé, ao lado de uma mesa e sorrindo de forma amigável"
        />
      </article>
    </section>
  );
};
