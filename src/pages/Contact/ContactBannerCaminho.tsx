import { Link } from "react-router-dom";

const BannerCaminho = () => {
  const logoUrl =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/soon.svg";
  const imageBanner2 =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/banners/banner2.png";
  const imageVector =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/vector.svg";
  return (
    <section className="relative">
      <img
        className="w-full bg-cover object-contain"
        src={imageBanner2}
        alt=""
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-customBlack1 gap-y-0 md:gap-y-3">
        <img src={logoUrl} alt="" />
        <h2 className="font-poppins font-medium text-2xl md:text-5xl text-center">
          Contact
        </h2>
        <ul className="flex flex-row items-center gap-3">
          <Link
            className="font-poppins font-medium text-sm md:text-base"
            to="/"
          >
            Home
          </Link>
          <img className="mr-1" src={imageVector} alt="" />
          <li className="font-poppins font-light text-sm md:text-base">Contact</li>
        </ul>
      </div>
    </section>
  );
};

export default BannerCaminho;
