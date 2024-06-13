import { Link } from "react-router-dom";

const Footer = () => {
  const facebookUrl =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/facebookFooter.svg";
  const instagramUrl =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/instagramFooter.svg";
  const twitterUrl =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/twitterFooter.svg";
  const linkedinUrl =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/linkedinFooter.svg";

  return (
    <footer className="bg-customWhite border-t-2 border-customBlack1 border-opacity-15 pb-5">
      <div className="md:flex md:justify-around">
      <div className="text-center mt-12 p-2 md:text-start md:items-start md:flex md:flex-col ">
        <h2 className=" md-6 md:mb-14 font-poppins font-bold text-2xl text-customBlack1">
          Funiro.
        </h2>
        <p className=" font-poppins text-base text-customGray2 mb-6 md:mb-14 md:w-72 flex-wrap">
          400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
        </p>

        <div className="flex justify-center">
          <a href="https://www.facebook.com/" target="_blank">
            <img className="transition-all hover:scale-150" src={facebookUrl} alt="icon facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img className="transition-all hover:scale-150" src={instagramUrl} alt="icon instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img className="transition-all hover:scale-150" src={twitterUrl} alt="icon twitter" />
          </a>
          <a href="https://br.linkedin.com/" target="_blank">
            <img className="transition-all hover:scale-150" src={linkedinUrl} alt="icon linkedin" />
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-evenly mt-12 p-2 md:gap-x-24">
        <div className="">
          <h4 className="mb-6 md:mb-14 text-customGray2 font-poppins text-base font-medium">
            Links
          </h4>

          <ul className="flex flex-col text-customBlack1 text-base font-medium">
            <Link to="/" className="mb-6 md:mb-12 transition-all hover:scale-110">
              Home
            </Link>
            <Link to="/shop" className="mb-6 md:mb-12 transition-all hover:scale-110">
              Shop
            </Link>
            <Link to="/about" className="mb-6 md:mb-12 transition-all hover:scale-110">
              About
            </Link>
            <Link to="/contact" className="transition-all hover:scale-110">Contact</Link>
          </ul>
        </div>
        <div className="">
          <h4 className="mb-6 md:mb-14 text-customGray2 font-poppins text-base font-medium">
            Help
          </h4>

          <ul className="flex flex-col text-customBlack1 text-base font-medium">
            <Link to="/" className="mb-6 md:mb-12 transition-all hover:scale-110">
              Payment Options
            </Link>
            <Link to="/" className="mb-6 md:mb-12 transition-all hover:scale-110">
              Returns
            </Link>
            <Link to="/" className="transition-all hover:scale-110">Privacy Policies</Link>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12 mb-2 p-2 md:text-start">
        <h4 className="mb-6 md:mb-14 text-customGray2 font-poppins text-base font-medium">
          Newsletter
        </h4>
        <form className="flex gap-3 justify-center flex-wrap">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className=" font-poppins border-b border-customBlack1 focus:outline-none "
          />
          <button className=" border-b border-customBlack1  text-base font-medium">
            SUBSCRIBE
          </button>
        </form>
      </div>
      </div>

      <div className="flex justify-center mt-10">
        <hr className="border-t-2 border-customBlack1 border-opacity-15 mb-5 w-11/12 h-1" />
      </div>
      <p className="text-center text-base font-poppins md:text-start md:ml-16">2023 furino. All rights reverved</p>
    </footer>
    
  );
};

export default Footer;
