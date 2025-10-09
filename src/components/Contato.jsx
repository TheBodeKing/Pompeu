import ContatoCards from "./ContatoCards";
import Linha from "./Linha";

const Contato = () => {
  return (
    <section
      id="contato"
      className="px-10 py-5 dark:bg-gray-900 bg-white dark:text-amber-400 text-gray-800 
      min-h-[85vh] flex relative justify-center"
    >
      {/* div geral, 2 pts */}
      <div className="py-10 flex flex-col jusitfy-center items-center">
        {/* geral pt1, titulo/subtitulo */}
        <div className="relative flex flex-col items-center gap-5 mb-5">
          <h2 className="text-3xl">Contato</h2>
          <h3 className="text-xl dark:text-white text-black">
            Sinta-se livre para entrar em contato comigo via qualquer uma das
            opções abaixo
          </h3>
        </div>
        {/* geral pt2, cards */}
        <div>
          <ContatoCards />
          <ContatoCards />
          <ContatoCards />
          <ContatoCards />
        </div>
      </div>
      <Linha />
    </section>
  );
};

export default Contato;
