import { logoImg } from "../utils";
import { navList } from "../constants";

const Header = () => {
  return (
    <header className="bg-black text-amber-400 w-full relative px-10 py-5 lg:block hidden">
      {/*div geral, 3 partes*/}
      <div className="flex flex-row justify-between items-center">
        {/*pt1, imagem*/}
        <img
          src={logoImg}
          alt="Logo da pompeu programador"
          className="w-12 h-12"
        />
        {/*pt2, navbar*/}
        <div>
          <ul className="flex gap-5 uppercase">
            {navList.map(({ nome, id }) => (
              <li
                key={id}
                className="cursor-pointer py-2 px-4 bg-gray-800 rounded-md
                hover:bg-gray-900 hover:-translate-y-1 transition-all"
              >
                {nome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
