import { useState } from "react";
import Carousel from "./Carousel";
import Linha from "./Linha";
import { serv } from "../constants";

const Servicos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section
      id="servicos"
      className="px-10 py-5 dark:bg-gray-900 bg-gray-100 dark:text-amber-400 text-gray-800 
      min-h-fit flex relative justify-center lg:items-center  transition-all"
    >
      {/* div geral, 2 partes */}
      <div className="flex flex-col py-5 gap-15 items-center">
        {/* geral pt1, titulo */}
        <h2 className="text-3xl pt-5 titulo">SERVIÇOS</h2>
        {/* geral pt2, div conteudo , 2 partes */}
        <div
          className="flex lg:flex-row flex-col-reverse justify-center
         items-center lg:items-start gap-10 lg:gap-[10%] relative lg:w-[1040px] corpo pb-10 lg:pb-5"
        >
          {/* conteudo pt1, descrição */}
          <p className="text-xl dark:text-white lg:w-[40%] max-w-[90%] pt-4">
            {serv[currentIndex].txt}
          </p>
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
