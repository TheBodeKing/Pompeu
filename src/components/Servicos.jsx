import { placeholderImg } from "../utils";

const Servicos = () => {
  return (
    <section
      id="servicos"
      className="px-10 py-5 dark:bg-gray-900 bg-white dark:text-amber-400 text-gray-800 
      min-h-[85vh] flex relative justify-center items-center"
    >
      {/* div geral, 2 partes */}
      <div className="flex flex-col py-5 gap-15">
        {/* pt1, titulo */}
        <h1 className="text-3xl">SERVIÇOS</h1>
        {/* pt2, conteudo, 2 partes */}
        <div className="flex flex-row ">
          {/* pt1, descrição */}
          <p className="text-xl dark:text-white max-w-[40%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet velit
            qui quisquam nihil quae, sint odit, iusto cum accusamus commodi
            earum necessitatibus iure molestias esse voluptate, id in.
            Inventore, consectetur.
          </p>
          {/* pt2, imagem */}
          <div>
            <img
              src={placeholderImg}
              alt="Imagem1"
              className="w-[40%] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
