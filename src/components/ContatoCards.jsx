import { placeholderImg } from "../utils";

const ContatoCards = () => {
  {
    /* cards de titulo para ser usado na seção contato*/
  }
  return (
    <div className="flex flex-row items-center justify-center px-5 py-2 my-7 group gap-5 cursor-pointer">
      <img
        src={placeholderImg}
        alt="img"
        className="w-[70px] h-[70px] group-hover:scale-110 rounded-full"
      />
      <div className="flex flex-col justify-between h-full">
        <h3 className="text-xl dark:text-white text-black">
          Entre em contato comigo por aqui
        </h3>
        <p className="text-lg">Meu numero do zap</p>
      </div>
    </div>
  );
};

export default ContatoCards;
