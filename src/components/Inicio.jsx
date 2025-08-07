import { inicioImg } from "../utils";

const Inicio = () => {
  return (
    <section className="w-full min-h-[90vh] relative">
      <div className="flex relative flex-row px-35 py-15 justify-center gap-25">
        <img
          src={inicioImg}
          alt="Foto de Pompeu"
          className="h-[450px] w-[300px]"
        />
        <div className="relative flex flex-col justify-center items-start gap-10">
          <h1 className="max-w-[11ch] text-8xl text-white">
            Pompeu Programador
          </h1>
          <h2 className="max-w-[35ch] text-4xl">
            Desenvolvedor web full stack, focado em fazer sites rápidos,
            responsivos e sem nunca faltar estilo.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
