import { placeholderImg } from "../utils";
import Linha from "./Linha";

const Servicos = () => {
  return (
    <section
      id="servicos"
      className="px-10 py-5 dark:bg-gray-900 bg-white dark:text-amber-400 text-gray-800 
      min-h-[85vh] flex relative justify-center items-center"
    >
      {/* div geral, 2 partes */}
      <div className="flex flex-col py-5 gap-15 items-center">
        {/* geral pt1, titulo */}
        <h1 className="text-3xl pt-5">SERVIÇOS</h1>
        {/* geral pt2, div conteudo , 2 partes */}
        <div className="flex flex-row justify-center gap-[10%] relative max-w-[1140px]">
          {/* conteudo pt1, descrição */}
          <p className="text-xl dark:text-white max-w-[40%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet velit
            qui quisquam nihil quae, sint odit, iusto cum accusamus commodi
            earum necessitatibus iure molestias esse voluptate, id in.
            Inventore, consectetur.
          </p>
          {/* conteudo pt2, imagem */}
          <div className="max-w-[40%]">
            <img
              src={placeholderImg}
              alt="Imagem1"
              className="w-full h-[80%]"
            />
          </div>
        </div>
      </div>
      <Linha />
    </section>
  );
};

export default Servicos;
