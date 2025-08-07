import { logoImg } from "../utils";
import { navLists } from "../constants";

const Header = ({ luz, setLuz, pt, setPt }) => {
  return (
    <header className="w-full min-h-[70px] h-fit relative bg-black">
      <div className="w-full flex relative px-10 py-5">
        <img
          src={logoImg}
          alt="Logo de Pompeu Programador"
          className="h-[50px] w-[50px] absolute left-20 top-1/2 -translate-y-1/2"
        />
        <nav className="flex mx-auto flex-row gap-6 justify-center">
          {navLists.map(({ nome, id }) => (
            <div
              key={id}
              className="py-2 h-fit w-fit px-4 cinza-escuro text-xl ouro rounded-xl cursor-pointer
              hover:scale-110 transition-all"
            >
              {nome}
            </div>
          ))}
        </nav>
        <div className="absolute flex flex-row gap-5 right-2 top-1/2 -translate-y-1/2">
          <button
            className="cinza-escuro ouro py-2 px-4 rounded-xl cursor-pointer"
            onClick={() => {
              setLuz(!luz);
              console.log(luz);
            }}
          >
            Luz
          </button>
          <button
            className="cinza-escuro ouro py-2 px-4 rounded-xl cursor-pointer"
            onClick={() => {
              setPt(!pt);
              console.log(pt);
            }}
          >
            pt-en
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
