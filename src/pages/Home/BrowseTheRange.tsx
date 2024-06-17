const BrowseTheRange = () => {
  const imgDiningHome =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/diningHomeS2.png";
  const imgLivingHome =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/livingHomeS2.png";
  const imgBedrooHome =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/bedrooHomeS2.png";

  return (
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
          <img className="mb-5 w-96" src={imgBedrooHome} alt="image bedroom" />
          <p className="font-poppins font-semibold text-lg">Bedroom</p>
        </div>
      </div>
    </section>
  );
};

export default BrowseTheRange;
