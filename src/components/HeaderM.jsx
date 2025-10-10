import { logoImg } from "../utils";
import { useState, useEffect, useRef } from "react";
import { navList } from "../constants";
import { Menu, X, Sun, Moon } from "lucide-react";
import { gsap } from "gsap";

const HeaderM = () => {
  const [btn, setBtn] = useState(true);
  const navRef = useRef(null);
  const [isFirst, setIsFirst] = useState(true);

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

  useEffect(() => {
    if (!navRef.current) return;
    if (isFirst) {
      gsap.set(navRef.current, { x: "100%" });
      setIsFirst(false);
      return;
    }

    if (!btn) {
      gsap.fromTo(
        navRef.current,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        }
      );
    } else {
      gsap.fromTo(
        navRef.current,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: "100%",
          opacity: 0,
          duration: 0.5,
        }
      );
    }
  }, [btn]);
  return (
    <header
      className="block lg:hidden dark:bg-black bg-gray-200 dark:text-amber-400 text-gray-800
     w-full relative px-5 py-5 items-center justify-center"
    >
      {/*div geral, 2 partes*/}
      <div className="flex flex-row justify-between items-center">
        <a href="/">
          <img
            src={logoImg}
            alt="Logo da pompeu programador"
            className="w-12 h-12 hover:scale-110 transition-all"
          />
        </a>

        <button
          className={`z-20 p-2 relative ${
            btn ? "dark:bg-gray-700 bg-gray-400 rounded-md" : ""
          }`}
          onClick={() => {
            setBtn(!btn);
          }}
        >
          <span className="w-10 h-6 inline-block relative ">
            {btn ? (
              <Menu
                strokeWidth={2.5}
                size={35}
                className="w-full h-full scale-x-200 scale-y-150 my-1 text-black dark:text-white "
              />
            ) : (
              <X
                strokeWidth={2}
                size={45}
                className="fixed right-[25px] top-[22px] text-black dark:text-white dark:bg-gray-700 bg-gray-400 rounded-md"
              />
            )}
          </span>
        </button>

        <div
          className="fixed right-0 top-0 min-h-screen min-w-screen dark:bg-gray-900 bg-white z-10 opacity-0"
          ref={navRef}
        >
          <ul className="flex flex-col items-center justify-center h-screen gap-5 uppercase">
            {navList.map(({ nome, id }) => (
              <a
                href={id}
                onClick={() => {
                  setBtn(!btn);
                }}
              >
                <li
                  key={id}
                  className="cursor-pointer py-2 px-4 dark:bg-gray-700 bg-gray-400 rounded-md
                        dark:hover:bg-gray-900 dark:hover:text-amber-400 hover:bg-gray-800 hover:text-white hover:-translate-y-1 transition-all titulo font-light "
                >
                  {nome}
                </li>
              </a>
            ))}
          </ul>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg dark:bg-gray-800 bg-gray-400 dark:hover:bg-gray-700
             hover:bg-gray-300 transition-colors fixed top-[21px] right-[90px]"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Moon className="w-10 h-[31px] text-amber-400" />
            ) : (
              <Sun className="w-10 h-[31px] text-amber-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderM;
