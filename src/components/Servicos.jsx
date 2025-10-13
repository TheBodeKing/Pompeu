import { useState } from "react";
import Carousel from "./Carousel";
import Linha from "./Linha";

const Servicos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const txt = "aa ";
  return (
    <section
      id="servicos"
      className="px-10 py-5 dark:bg-gray-900 bg-gray-100 dark:text-amber-400 text-gray-800 
      min-h-fit flex relative justify-center lg:items-center  transition-all"
    >
      {/* div geral, 2 partes */}
      <div className="flex flex-col py-5 gap-15 items-center">
        {/* geral pt1, titulo */}
        <h1 className="text-3xl pt-5 titulo">SERVIÇOS</h1>
        {/* geral pt2, div conteudo , 2 partes */}
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:items-start gap-10 lg:gap-[10%] relative lg:w-[1140px] corpo pb-10 lg:pb-0 border-3 border-black">
          {/* conteudo pt1, descrição */}
          <div>
            <p className="text-xl dark:text-white lg:w-[40%] max-w-[90%] pt-4">
              {txt}
            </p>
          </div>
          {/* conteudo pt2, carossel */}
          <div className="lg:w-[45%] max-w-[90%] w-full">
            <Carousel
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>
      </div>
      <Linha />
    </section>
  );
};

export default Servicos;
