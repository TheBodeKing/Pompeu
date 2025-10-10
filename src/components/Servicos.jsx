import { placeholderImg } from "../utils";
import Carousel from "./Carousel";
import Linha from "./Linha";

const Servicos = () => {
  return (
    <section
      id="servicos"
      className="px-10 py-5 dark:bg-gray-900 bg-white dark:text-amber-400 text-gray-800 
      min-h-fit flex relative justify-center lg:items-center "
    >
      {/* div geral, 2 partes */}
      <div className="flex flex-col py-5 gap-15 items-center">
        {/* geral pt1, titulo */}
        <h1 className="text-3xl pt-5 titulo">SERVIÇOS</h1>
        {/* geral pt2, div conteudo , 2 partes */}
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:items-start gap-10 lg:gap-[10%] relative max-w-[1140px] corpo pb-10 lg:pb-0">
          {/* conteudo pt1, descrição */}
          <p className="text-xl dark:text-white lg:w-[40%] max-w-[90%] pt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet velit
            qui quisquam nihil quae, sint odit, iusto cum accusamus commodi
            earum necessitatibus iure molestias esse voluptate, id in.
            Inventore, consectetur.
          </p>
          {/* conteudo pt2, imagem */}
          <div className="lg:w-[45%] max-w-[90%] w-full">
            <Carousel />
          </div>
        </div>
      </div>
      <Linha />
    </section>
  );
};

export default Servicos;
