const homePage = () => {
  const imageHome1 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/imageHome1.png";
  return (
    <>
      <section className="relative">
        <img
          className="w-full bg-cover object-contain"
          src={imageHome1}
          alt=""
        />

        <div className="xl:absolute xl:bottom-32 xl:right-32 xl:max-w-xl p-6 md:px-10 md:pb-9 md:pt-12 w-full bg-customYellow3">
          <h4 className=" font-poppins text-base font-semibold text-customBlack2 mb-1">
            New Arrival
          </h4>
          <h1 className="xl:w-80 font-poppins text-4xl font-bold text-customPrimary mb-4">
            Discover Our New Collection
          </h1>
          <p className="leading-6 font-poppins text-base font-medium text-customBlack2 mb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-customPrimary py-4 px-11 font-poppins text-base font-bold text-customWhite transition-all hover:text-customPrimary hover:bg-customYellow4 hover:ring-1 hover:ring-customPrimary">
            BUY NOW
          </button>
        </div>
      </section>
    </>
  );
};

export default homePage;
