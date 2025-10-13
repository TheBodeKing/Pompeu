const ContatoCards = ({ img, alt, tit, txt, link }) => {
  return (
    // Cards de titulo para ser usado na seção contato
    <a
      className="flex relative flex-row items-center justify-start lg:px-5 px-2 py-2 my-7 group lg:gap-5 gap-2 cursor-pointer lg:w-[540px] "
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${tit} - ${txt}`}
    >
      <img
        src={img}
        alt={alt}
        className="lg:w-[70px] w-[50px] lg:h-[70px] h-[50px] group-hover:scale-110 rounded-full  transition-all"
      />
      <span className="flex flex-col justify-between h-full">
        <p className="lg:text-xl text-lg dark:text-white text-black titulo">
          {tit}
        </p>
        <p className="lg:text-lg text-base corpo">{txt}</p>
      </span>
    </a>
  );
};

export default ContatoCards;
