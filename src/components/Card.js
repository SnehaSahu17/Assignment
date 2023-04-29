
function Card({src,name,company,quote}) {
    return (
      <>
      <div className="w-[430px] h-[498px] p-4 flex flex-col relative text-[#FFFFFF] leading-8 tracking-wide">
         <img src={src} className="h-full w-full"></img>
         <div className="absolute top-20 left-10 w-2/3">
            <p className="font-normal text-xl">{quote}</p>
            <h1 className="font-black text-2xl mt-20">{name}</h1>
            <h2 className="font-medium text-xl">{company}</h2>
         </div>
      </div>
      </>
    );
  }
  export default Card;