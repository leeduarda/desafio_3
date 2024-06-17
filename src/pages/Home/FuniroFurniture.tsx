const FuniroFurniture = () => {
  const imgFurniture1 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/furniture1S5.png";
  const imgFurniture2 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/furniture2S5.png";
  const imgFurniture3 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/furniture3S5.png";
  const imgFurniture4 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/furniture4S5.png";
  const imgFurniture5 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/furniture5S5.png";
  const imgFurniture6 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/furniture6S5.png";
  const imgFurniture7 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/furniture7S5.png";
  const imgFurniture8 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/furniture8S5.png";
  const imgFurniture9 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/furniture9S5.png";

  return (
    <section>
      <p className="font-poppins font-semibold text-base text-customGray5 text-center">
        Share your setup with
      </p>
      <h2 className="font-poppins font-bold text-3xl text-customGray1 text-center break-words">
        #FuniroFurniture
      </h2>

      <div className="relative flex flex-wrap p-2 gap-y-3 justify-center items-center">
        <div className="flex flex-col gap-y-3 md:flex-row md:justify-between md:w-full ">
          <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-6 justify-center items-center md:items-end flex-wrap">
            <img className="hidden md:block w-20" src={imgFurniture1} alt="" />
            <img className="h-auto md:h-72" src={imgFurniture2} alt="" />
          </div>
          <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-6 justify-center items-center md:items-end flex-wrap">
            <img className="h-auto md:h-80" src={imgFurniture4} alt="" />
            <img className="h-auto md:h-96" src={imgFurniture5} alt="" />
          </div>
        </div>

        <div className="hidden xl:block xl:absolute">
          <img src={imgFurniture3} alt="" />
        </div>

        <div className="flex flex-col gap-y-3 md:flex-row md:justify-between md:w-full">
          <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-6 justify-center items-center md:items-start flex-wrap">
            <img className="w-44" src={imgFurniture6} alt="" />
            <img className="w-80" src={imgFurniture7} alt="" />
          </div>
          <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-6 justify-center items-center md:items-start flex-wrap md:pr-16">
            <img src={imgFurniture8} alt="" />
            <img src={imgFurniture9} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuniroFurniture;
