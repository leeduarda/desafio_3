const homePage = () => {
  const imageHome1 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/imageHome1.png";
  const imgDiningHome =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/diningHomeS2.png";
  const imgLivingHome =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/livingHomeS2.png";
  const imgBedrooHome =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/bedrooHomeS2.png";
  const imgProduct1 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsImgs/product1.png";
  const imgProduct2 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsImgs/product2.png";
  const imgProduct3 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsImgs/product3.png";
  const imgProduct4 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsImgs/product4.png";
  const imgProduct5 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsImgs/product5.png";
  const imgProduct6 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsImgs/product6.png";
  const imgProduct7 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsImgs/product7.png";
  const imgProduct8 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsImgs/product8.png";
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

      <section className="mt-6 mb-6">
        <h2 className="font-poppins font-bold text-2xl text-customBlack2 text-center">
          Browse The Range
        </h2>
        <p className="font-poppins text-base text-customGray6 text-center mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center sm:flex sm:flex-row flex-wrap text-center">
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

      <section className="mb-16">
        <h2 className="font-poppins font-bold text-3xl text-customGray1 text-center">
          Our Products
        </h2>
        <div className="p-10 flex flex-col justify-center gap-8 items-center flex-wrap md:flex md:flex-row ">
          <div className="bg-customGray8">
            <img src={imgProduct1} alt="" />
            <div className="p-5 pb-5 pt-2 px-5">
              <h4 className="font-poppins text-2xl text-customGray1 font-semibold mb-2">
                Syltherine
              </h4>
              <p className="font-poppins text-base font-medium text-customGray3 mb-2">
                Stylish cafe chair
              </p>

              <div className="bg-customGray8 flex justify-between flex-wrap">
                <p className="font-poppins text-xl text-customGray1 font-semibold">
                  Rp 2.500.000
                </p>
                <p className="text-base text-customGray4 line-through">
                  Rp 3.500.000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-customGray8">
            <img src={imgProduct2} alt="" />
            <div className="p-5 pb-5 pt-2 px-5">
              <h4 className="font-poppins text-2xl text-customGray1 font-semibold mb-2">
                Leviosa
              </h4>
              <p className="font-poppins text-base font-medium text-customGray3 mb-2">
                Stylish cafe chair
              </p>

              <div className="bg-customGray8 flex justify-between">
                <p className="font-poppins text-xl text-customGray1 font-semibold">
                  Rp 2.500.000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-customGray8">
            <img src={imgProduct3} alt="" />

            <div className="p-5 pb-5 pt-2 px-5">
              <h4 className="font-poppins text-2xl text-customGray1 font-semibold mb-2">
                Lolito
              </h4>
              <p className="font-poppins text-base font-medium text-customGray3 mb-2">
                Luxury big sofa
              </p>

              <div className="bg-customGray8 flex justify-between flex-wrap">
                <p className="font-poppins text-xl text-customGray1 font-semibold">
                  Rp 7.000.000
                </p>
                <p className="text-base text-customGray4 line-through">
                  Rp 14.000.000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-customGray8">
            <img src={imgProduct4} alt="" />
            <div className="p-5 pb-5 pt-2 px-5">
              <h4 className="font-poppins text-2xl text-customGray1 font-semibold mb-2">
                Respira
              </h4>
              <p className="font-poppins text-base font-medium text-customGray3 mb-2">
                Outdoor bar table and stool
              </p>

              <div className="bg-customGray8 flex justify-between">
                <p className="font-poppins text-xl text-customGray1 font-semibold">
                  Rp 500.000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-customGray8">
            <img src={imgProduct5} alt="" />
            <div className="p-5 pb-5 pt-2 px-5">
              <h4 className="font-poppins text-2xl text-customGray1 font-semibold mb-2">
                Grifo
              </h4>
              <p className="font-poppins text-base font-medium text-customGray3 mb-2">
                Night lamp
              </p>

              <div className="bg-customGray8 flex justify-between">
                <p className="font-poppins text-xl text-customGray1 font-semibold">
                  Rp 1.500.000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-customGray8">
            <img src={imgProduct6} alt="" />
            <div className="p-5 pb-5 pt-2 px-5">
              <h4 className="font-poppins text-2xl text-customGray1 font-semibold mb-2">
                Muggo
              </h4>
              <p className="font-poppins text-base font-medium text-customGray3 mb-2">
                Small mug
              </p>

              <div className="bg-customGray8 flex justify-between">
                <p className="font-poppins text-xl text-customGray1 font-semibold">
                  Rp 150.000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-customGray8">
            <img src={imgProduct7} alt="" />
            <div className="p-5 pb-5 pt-2 px-5">
              <h4 className="font-poppins text-2xl text-customGray1 font-semibold mb-2">
                Pingky
              </h4>
              <p className="font-poppins text-base font-medium text-customGray3">
                Cute bed set
              </p>

              <div className="bg-customGray8 flex justify-between  flex-wrap">
                <p className="font-poppins text-xl text-customGray1 font-semibold mb-2">
                  Rp 7.000.000
                </p>
                <p className="text-base text-customGray4 line-through">
                  Rp 14.000.000
                </p>
              </div>
            </div>
          </div>

          <div className="bg-customGray8">
            <img src={imgProduct8} alt="" />
            <div className="p-5 pb-5 pt-2 px-5">
              <h4 className="font-poppins text-2xl text-customGray1 font-semibold mb-2">
                Potty
              </h4>
              <p className="font-poppins text-base font-medium text-customGray3 mb-2">
                Minimalist flower pot
              </p>

              <div className="bg-customGray8 flex justify-between">
                <p className="font-poppins text-xl text-customGray1 font-semibold">
                  Rp 500.000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
        <button className=" border border-customPrimary py-3 px-14 md:px-20 font-poppins text-base text-center font-bold text-customPrimary transition-all hover:text-customWhite hover:bg-customPrimary">
          Show More
        </button>
        </div>
      </section>
    </>
  );
};

export default homePage;
