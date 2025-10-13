import { logoImg } from "../utils";
import { navList } from "../constants";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    const isDarkMode = saved ? saved === "dark" : true; // Default to dark if nothing saved

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return isDarkMode;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
    <header
      className="dark:bg-black bg-gray-300 dark:text-amber-400 text-gray-800
     w-full relative px-10 py-5 lg:flex hidden min-h-[15vh] items-center justify-center  transition-all"
    >
      {/*div geral, 3 partes*/}
      <div className="flex w-full flex-row justify-between items-center">
        {/*pt1, imagem*/}
        <a href="/">
          <img
            src={logoImg}
            alt="Logo da pompeu programador"
            className="w-12 h-12 hover:scale-110 transition-all"
          />
        </a>
        {/*pt2, navbar*/}
        <div>
          <ul className="flex gap-5 uppercase">
            {navList.map(({ nome, id }) => (
              <a href={id} key={id}>
                <li
                  className="cursor-pointer py-2 px-4 dark:bg-gray-700 bg-gray-400 rounded-md
            dark:hover:bg-gray-900 dark:hover:text-amber-400 hover:bg-gray-800 hover:text-white hover:-translate-y-1 transition-all titulo font-light "
                >
                  {nome}
                </li>
              </a>
            ))}
          </ul>
        </div>
        {/*pt3, botões*/}
        <div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg dark:bg-gray-800 bg-gray-400 dark:hover:bg-gray-700
             hover:bg-gray-800 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Moon className="w-6 h-6 text-amber-400" />
            ) : (
              <Sun className="w-6 h-6 text-amber-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
