const FooterQualityService = () => {
  const imgTrophy =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/trophy.svg";
  const imgGuarantee =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/guarantee.svg";
  const imgShipping =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/shipping.svg";
  const imgSupport =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/support.svg";

  return (
    <footer className="bg-customYellow4 py-16 flex md:flex flex-col md:flex-row gap-14 justify-center items-center flex-wrap">
      <div className="flex flex-col md:flex md:flex-row gap-2 items-center text-center md:text-start">
        <div>
          <img src={imgTrophy} alt="" />
        </div>
        <div>
          <h3 className="font-poppins text-lg font-semibold text-customBlack3">
            High Quality
          </h3>
          <p className="font-poppins font-medium text-base text-customGray3">
            Crafted from top materials
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex md:flex-row gap-2 items-center text-center md:text-start">
        <div>
          <img src={imgGuarantee} alt="" />
        </div>
        <div>
          <h3 className="font-poppins text-lg font-semibold text-customBlack3">
            Warranty Protection
          </h3>
          <p className="font-poppins font-medium text-base text-customGray3">
            Over 2 years
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex md:flex-row gap-2 items-center text-center md:text-start">
        <div>
          <img src={imgShipping} alt="" />
        </div>
        <div>
          <h3 className="font-poppins text-lg font-semibold text-customBlack3">
            Free Shipping
          </h3>
          <p className="font-poppins font-medium text-base text-customGray3">
            Order over 150 $
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex md:flex-row gap-2 items-center text-center md:text-start">
        <div>
          <img src={imgSupport} alt="" />
        </div>
        <div>
          <h3 className="font-poppins text-lg font-semibold text-customBlack3">
            24 / 7 Support
          </h3>
          <p className="font-poppins font-medium text-base text-customGray3">
            Dedicated support
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterQualityService;
