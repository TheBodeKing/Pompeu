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
        start: "top 60%",
        once: true,
      },
    });
    tl.fromTo(
      [p1.current, p2.current, p3.current],
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.5, // 0.3s delay between each
      }
    );
  }, []);

  return (
    <section
      id="sobre"
      className="lg:px-10 px-5 py-5 dark:bg-gray-900 bg-gray-100 dark:text-amber-400 text-gray-800 
      flex relative justify-center transition-all"
    >
      {/* div geral, 2 partes */}
      <div className="flex flex-col items-center gap-10 py-10 relative">
        {/* pt1, titulo */}
        <h2 className="text-3xl titulo">SOBRE</h2>
        {/* pt2, conteudo */}
        <div
          className="lg:max-w-[70%] max-w-[90%] text-xl dark:text-white flex flex-col gap-5 corpo text-justify"
          ref={boxRef}
        >
          <p ref={p1} className="opacity-0">
            Meu nome é Lucas Pompeu de Pontes, tenho 25 anos e sou desenvolvedor
            web especializado em criar experiências digitais modernas e
            funcionais. Minha paixão por tecnologia me motiva a estar sempre
            aprendendo e explorando novas formas de resolver problemas através
            do código.
          </p>
          <p ref={p2} className="opacity-0">
            Trabalho com linguagens e frameworks modernos, sempre priorizando
            código limpo, performance e interfaces intuitivas. Acredito que o
            desenvolvimento web vai além da técnica: é sobre entender
            necessidades, criar soluções eficientes e entregar valor real para
            usuários e negócios.
          </p>
          <p ref={p3} className="opacity-0">
            Estou aberto a novos desafios e colaborações que me permitam aplicar
            minhas habilidades em projetos impactantes. Se você tem uma ideia ou
            precisa de um desenvolvedor dedicado para sua equipe, ficarei feliz
            em conversar e explorar como posso contribuir.
          </p>
        </div>
      </div>
      <Linha />
    </section>
  );
};

export default Sobre;
