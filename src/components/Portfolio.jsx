import { useEffect, useRef, useState } from "react";
import { portList, portImgList, btnList } from "../constants";
import { gsap } from "gsap";

const Portfolio = () => {
  const [ativo, setAtivo] = useState();
  const desRef = useRef({});
  const imgRef = useRef({});

  useEffect(() => {
    const desEl = desRef.current[ativo];
    const imgEl = imgRef.current[ativo];

    if (!ativo || !desEl || !imgEl) return;

    gsap.set([desEl, imgEl], {
      display: "none",
    });
  }, [ativo]);

  return (
    <section className="w-full min-h-[90vh] relative">
      <div>
        <h2>Confira aqui meus trabalhos anteriores</h2>
        <div>
          <div>
            {portList.map(({ descricao, id }) => (
              <div key={id} ref={(el) => (desRef.current[id] = el)}>
                {descricao}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <div>
              {portImgList.map(({ nome, alt, id }) => (
                <div key={id} ref={(el) => (imgRef.current[id] = el)}>
                  <img src={nome} alt={alt} className="w-[100px] h-[100px]" />
                </div>
              ))}
            </div>
            <div>
              {btnList.map(({ nome, id }) => (
                <div key={id}>
                  <button
                    onClick={() => {
                      setAtivo(id);
                    }}
                  >
                    {nome}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
