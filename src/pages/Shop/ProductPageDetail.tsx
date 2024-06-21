const ProductPageDetail = () => {
  const imageProduct1 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsDetailImgs/productDetail1.png";
  const imageProduct2 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsDetailImgs/productDetail2.png";
  const imageProduct3 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsDetailImgs/productDetail3.png";
  const imageProduct4 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsDetailImgs/productDetail4.png";
  const imageProductDestaque =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsDetailImgs/productDetailDestaque.png";

  const imageStars =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/star.png";

  const imageLine1 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsDetailImgs/line1.png";
  const imageLine2 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/productsDetailImgs/line2.png";
  return (
    <section className=" my-5 flex flex-col gap-32 md:flex md:flex-row">
      <div className="flex flex-col justify-center items-center sm:items-start gap-6 sm:flex sm:flex-row">
        <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-5 sm:flex sm:flex-col">
          <div className="flex justify-center items-center bg-customYellow2 w-20 h-20 rounded-lg">
            <img src={imageProduct1} />
          </div>
          <div className="flex justify-center items-center bg-customYellow2 w-20 h-20 rounded-lg">
            <img src={imageProduct2} />
          </div>
          <div className="flex justify-center items-center bg-customYellow2 w-20 h-20 rounded-lg">
            <img src={imageProduct3} />
          </div>
          <div className="flex justify-center items-center bg-customYellow2 w-20 h-20 rounded-lg">
            <img src={imageProduct4} />
          </div>
        </div>

        <div className="flex flex-wrap items-center bg-customYellow2 w-1/2 h-2/6 sm:h-60 rounded-lg">
          <img src={imageProductDestaque} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-1 md:flex md:items-start md:justify-start">
        <h2 className="font-normal text-4xl text-customBlack1">Asgaard sofa</h2>
        <p className="font-medium text-2xl text-customGray2">Rs. 250,000.00</p>
        <div className="flex flex-row items-center gap-3">
          <img src={imageStars} />
          <img className="hidden md:block h-5" src={imageLine1} />
          <p className="text-xs text-customGray2">5 Customer Review</p>
        </div>
        <div className="w-1/2 text-customBlack1 text-xs mb-5">
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
        </div>
        <div className="text-start mb-5">
          <p className="text-sm text-customGray2 mb-4">Size</p>
          <div className="flex gap-2">
            <button className="bg-customPrimary px-4 py-2 text-center rounded-md text-customWhite">L</button>
            <button className="bg-customYellow2 px-3 py-2 text-center rounded-md text-customBlack1">XL</button>
            <button className="bg-customYellow2 px-3 py-2 text-center rounded-md text-customBlack1">XS</button>
          </div>
        </div>
        <div>
          <p className="text-sm text-customGray2 mb-4">Color</p>
          <div className="flex gap-2">
            <button className="bg-customBlue w-8 h-8 rounded-full"></button>
            <button className="bg-customBlack1 w-8 h-8 rounded-full"></button>
            <button className="bg-customPrimary w-8 h-8 rounded-full"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPageDetail;
