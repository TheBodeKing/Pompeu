import Linha from "./Linha";

const Sobre = () => {
  return (
    <section
      id="sobre"
      className="px-10 py-5 dark:bg-gray-900 bg-white dark:text-amber-400 text-gray-800 
      min-h-fit flex relative justify-center "
    >
      {/* div geral, 2 partes */}
      <div className="flex flex-col items-center gap-10 py-10 relative">
        {/* pt1, titulo */}
        <h2 className="text-3xl">SOBRE</h2>
        {/* pt2, conteudo */}
        <div className="max-w-[70%] text-xl dark:text-white flex flex-col gap-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            distinctio, neque nesciunt qui nam numquam facilis. Animi quidem
            doloribus eos tenetur recusandae. Soluta illum esse dolor atque
            excepturi iusto? Eligendi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            distinctio, neque nesciunt qui nam numquam facilis. Animi quidem
            doloribus eos tenetur recusandae. Soluta illum esse dolor atque
            excepturi iusto? Eligendi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            distinctio, neque nesciunt qui nam numquam facilis. Animi quidem
            doloribus eos tenetur recusandae. Soluta illum esse dolor atque
            excepturi iusto? Eligendi?
          </p>
        </div>
      </div>
      <Linha />
    </section>
  );
};

export default Sobre;
