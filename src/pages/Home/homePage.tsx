const homePage = () => {
  const imageHome1 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/imageHome1.png";
  const imgDiningHome =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/diningHomeS2.png";
  const imgLivingHome =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/livingHomeS2.png";
  const imgBedrooHome =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/bedrooHomeS2.png";
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

      <section className="mt-6">
        <h2 className="font-poppins font-bold text-2xl text-customBlack2 text-center">
          Browse The Range
        </h2>
        <p className="font-poppins text-base text-customGray6 text-center mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center sm:flex sm:flex-row sm:justify-center flex-wrap text-center">
          <div className="p-5 w-96">
            <img
              className="mb-5 w-96"
              src={imgDiningHome}
              alt="image dinner space"
            />
            <p className="font-poppins font-semibold text-lg">Dining</p>
          </div>
          <div className="p-5 w-96">
            <img
              className="mb-5 w-96"
              src={imgLivingHome}
              alt="image living room"
            />
            <p className="font-poppins font-semibold text-lg">Living</p>
          </div>
          <div className="p-5 w-96">
            <img
              className="mb-5 w-96"
              src={imgBedrooHome}
              alt="image bedroom"
            />
            <p className="font-poppins font-semibold text-lg">Bedroom</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default homePage;
