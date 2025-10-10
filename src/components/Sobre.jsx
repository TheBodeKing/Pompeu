import { useEffect, useRef } from "react";
import Linha from "./Linha";
import gsap from "gsap";

const Sobre = () => {
  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!p1.current || !p2.current || !p3.current || !boxRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top bottom",
        once: true,
      },
    });
    tl.fromTo(
      p1.current,
      {
        x: "-100%",
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    )
      .fromTo(
        p2.current,
        {
          x: "-100%",
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        p3.current,
        {
          x: "-100%",
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        }
      );
  }, []);

  return (
    <section
      id="sobre"
      className="lg:px-10 px-5 py-5 dark:bg-gray-900 bg-white dark:text-amber-400 text-gray-800 
      min-h-fit flex relative justify-center "
    >
      {/* div geral, 2 partes */}
      <div
        className="flex flex-col items-center gap-10 py-10 relative"
        ref={boxRef}
      >
        {/* pt1, titulo */}
        <h2 className="text-3xl titulo">SOBRE</h2>
        {/* pt2, conteudo */}
        <div className="lg:max-w-[70%] max-w-[90%] text-xl dark:text-white flex flex-col gap-5 corpo text-justify">
          <p ref={p1} className="opacity-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            distinctio, neque nesciunt qui nam numquam facilis. Animi quidem
            doloribus eos tenetur recusandae. Soluta illum esse dolor atque
            excepturi iusto? Eligendi?
          </p>
          <p ref={p2} className="opacity-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            distinctio, neque nesciunt qui nam numquam facilis. Animi quidem
            doloribus eos tenetur recusandae. Soluta illum esse dolor atque
            excepturi iusto? Eligendi?
          </p>
          <p ref={p3} className="opacity-0">
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
