import { useEffect, useRef } from "react";
import { minhaFotoImg } from "../utils";
import Linha from "./Linha";
import gsap from "gsap";

const Inicio = () => {
  const imgRef = useRef(null);
  const tituloRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current || !tituloRef.current) return;
    if (window.innerWidth < 1024) {
      gsap.set([imgRef.current, tituloRef.current], {
        opacity: 1,
        webkitTextStrokeWidth: 0,
        color: "#fbbf24",
      });
      return;
    }

    gsap.to(imgRef.current, {
      opacity: 1,
      duration: 1,
      delay: 1.3,
    });
    const tl = gsap.timeline();

    tl.to(tituloRef.current, {
      opacity: 1,
      duration: 0,
      delay: 0.3,
      y: "75px",
    })
      .to(tituloRef.current, {
        opacity: 0,
        duration: 0,
        delay: 0.2,
      })
      .to(tituloRef.current, {
        opacity: 1,
        duration: 0,
        delay: 0.2,
        y: "-75px",
      })
      .to(tituloRef.current, {
        opacity: 0,
        duration: 0,
        delay: 0.2,
      })
      .to(tituloRef.current, {
        opacity: 1,
        duration: 0,
        delay: 0.2,
        scale: 1.02,
        y: 0,
        color: "#fbbf24 ",
        webkitTextStrokeWidth: 0,
      });
  }, []);

  return (
    <section
      id="inicio"
      className="lg:px-10 px-5 py-5 dark:bg-gray-900 bg-gray-100 dark:text-amber-400 text-gray-800 
      min-h-[85vh] flex relative justify-center items-center  transition-all"
    >
      {/* div geral, 2 partes */}
      <div className="flex lg:flex-row flex-col-reverse lg:gap-25 gap-15 items-center justify-center max-w-[1140px]">
        {/* pt1, imagem*/}
        <img
          src={minhaFotoImg}
          alt="Foto de Pompeu"
          className="w-[300px] h-[400px] lg:opacity-0"
          ref={imgRef}
        />
        {/* pt2, texto*/}
        <div className="flex flex-col lg:gap-[100px] gap-5 items-start justify-center">
          <h1
            className="lg:text-7xl text-4xl max-w-[9ch] titulo uppercase lg:opacity-0 text-stroke text-gray-900"
            ref={tituloRef}
          >
            Pompeu Programador
          </h1>
          <p className="lg:text-2xl text-xl corpo">
            Desenvolvedor web full stack. <br /> Sites rápidos e responsivos,
            mas nunca faltando estilo
          </p>
        </div>
      </div>
      <Linha />
    </section>
  );
};

export default Inicio;
