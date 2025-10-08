import { placeholderImg } from "../utils";
import Linha from "./Linha";

const Inicio = () => {
  return (
    <section
      id="inicio"
      className="px-10 py-5 dark:bg-gray-900 bg-white dark:text-amber-400 text-gray-800 
      min-h-[85vh] flex relative justify-center items-center"
    >
      {/* div geral, 2 partes */}
      <div className="flex flex-row gap-25 items-center justify-center">
        {/* pt1, imagem*/}
        <img
          src={placeholderImg}
          alt="Foto de Pompeu"
          className="w-[300px] h-[400px]"
        />
        {/* pt2, texto*/}
        <div className="flex flex-col gap-5 items-start justify-center">
          <h1 className="text-7xl max-w-[13ch]">Pompeu Programador</h1>
          <p className="text-2xl">
            Desenvolvedor web full stack. <br /> Sites rápidos e responsivos,
            mas sem nunca faltar estilo
          </p>
        </div>
      </div>
      <Linha />
    </section>
  );
};

export default Inicio;
