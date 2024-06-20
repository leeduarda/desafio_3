const ShopFilter = () => {
  const iconFilter1 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/filter1.svg";
  const iconFilter2 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/filter2.svg";
  const iconFilter3 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/filter3.svg";
  const imageLine =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/line.png";

  return (
    <section className="bg-customYellow2 flex md:flex flex-col md:flex-row md:justify-around justify-center items-center gap-5 px-2 py-5 font-poppins">
      <div className="flex flex-col md:flex md:flex-row md:gap-8 justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <button><img src={iconFilter1} /></button>
          <p className="text-base md:text-xl text-customBlack1">Filter</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button><img src={iconFilter2} /></button>
          <button><img src={iconFilter3} /></button>
        </div>
        <div>
          <img className="hidden md:flex" src={imageLine} />
        </div>
        <div className="mt-5 md:mt-0 text-xs md:text-base text-customBlack1">

            <p>
              Showing <span>1</span> - <span>16</span> of <span>32</span>{" "}
              results
            </p>
   
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col md:flex md:flex-row md:items-center gap-3">
          <p className="text-base md:text-xl text-customBlack1">Show</p>
          <div  className="bg-customWhite px-4 py-2 text-customGray2">16</div>
        </div>
        <div className="flex flex-col md:flex md:flex-row md:items-center gap-3">
          <p className="text-base md:text-xl text-customBlack1">Short by</p>
          <div className="bg-customWhite pl-4 pr-12 py-2 text-customGray2">Default</div>
        </div>
      </div>
    </section>
  );
};

export default ShopFilter;
