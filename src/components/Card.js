
function Card({src,name,company,quote}) {
    return (
      <>
      <div className="sm:w-[430px] sm:h-[498px] w-[370px] h-[498px] sm:p-4 flex flex-col relative text-[#FFFFFF] leading-8 tracking-wide">
         <img src={src} className="h-full w-full"></img>
         <div className="absolute top-20 left-10 w-full">
            <p className="font-normal text-xl w-[80%]">{quote}</p>
            <h1 className="font-black text-4xl mt-20">{name}</h1>
            <h2 className="font-medium text-xl text-[#DBDBDB] mt-2">{company}</h2>
         </div>
      </div>
      </>
    );
  }
  export default Card;