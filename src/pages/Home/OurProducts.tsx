

const OurProducts = () => {
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
            <p className="font-poppins text-base font-medium text-customGray3 mb-2">
              Cute bed set
            </p>

            <div className="bg-customGray8 flex justify-between  flex-wrap">
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
  );
};

export default OurProducts;
