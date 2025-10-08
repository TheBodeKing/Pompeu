import { logoImg } from "../utils";
import { navList } from "../constants";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <header className="dark:bg-black bg-gray-300 text-amber-400 w-full relative px-10 py-5 lg:block hidden">
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
        {/*pt3, botões*/}
        <div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-gray-400 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Moon className="w-6 h-6 text-yellow-600" />
            ) : (
              <Sun className="w-6 h-6 text-yellow-500" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
