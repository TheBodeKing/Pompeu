import {
  githubLogoImg,
  gmailLogoImg,
  linkedinLogoImg,
  zapLogoImg,
} from "../utils";
import ContatoCards from "./ContatoCards";
import Linha from "./Linha";

const Contato = () => {
  return (
    <section
      id="contato"
      className="lg:px-10 px-5 py-5 dark:bg-gray-900 bg-gray-100 dark:text-amber-400 text-gray-800 
      min-h-[85vh] flex relative justify-center  transition-all"
    >
      {/* div geral, 2 pts */}
      <div className="py-10 flex flex-col jusitfy-center items-center">
        {/* geral pt1, titulo/subtitulo */}
        <div className="relative flex flex-col items-center gap-5 mb-5">
          <h2 className="text-3xl titulo">Contato</h2>
          <h3 className="text-xl dark:text-white text-black corpo">
            Sinta-se livre para entrar em contato comigo via qualquer uma das
            opções abaixo
          </h3>
        </div>
        {/* geral pt2, cards */}
        <div>
          <ContatoCards
            img={zapLogoImg}
            alt={"logo do whatssapp"}
            tit={"Me chame no zap!"}
            txt={"(75) 99202-9532"}
            link={"https://wa.me/5575992029532"}
          />
          <ContatoCards
            img={gmailLogoImg}
            alt={"logo do gmail"}
            tit={"Me mande um e-mail"}
            txt={"pompeuprogramador@gmail.com"}
            link={"mailto:pompeuprogramador@gmail.com"}
          />
          <ContatoCards
            img={githubLogoImg}
            alt={"logo do github"}
            tit={"Veja meus outros projetos"}
            txt={"https://github.com/TheBodeKing"}
            link={"https://github.com/TheBodeKing"}
          />
          <ContatoCards
            img={linkedinLogoImg}
            alt={"logo do linkedin"}
            tit={"Visite meu Linkedin"}
            txt={
              "https://www.linkedin.com/in/lucas-pompeu-de-pontes-70320718b/"
            }
            link={
              "https://www.linkedin.com/in/lucas-pompeu-de-pontes-70320718b/"
            }
          />
        </div>
      </div>
      <Linha />
    </section>
  );
};

export default Contato;
