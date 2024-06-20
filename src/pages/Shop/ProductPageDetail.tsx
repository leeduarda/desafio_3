import { Link } from "react-router-dom";

const ProductPageDetail = () => {
  const imageVector =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/vector.svg";
  const imageLine =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/line.png";

  return (
    <section className="">
      <div className=" bg-customYellow2 font-poppins sm:pl-20 p-5 transition-all">
        <ul className="flex flex-row items-center gap-3 md:gap-8">
          <Link className="font-medium text-sm text-customGray2" to="/">
            Home
          </Link>
          <img className="mr-1" src={imageVector} alt="" />
          <Link className="font-medium text-sm text-customGray2" to="/shop">
            Shop
          </Link>
          <img className="mr-1" src={imageVector} alt="" />
          <img className="" src={imageLine} />
          <li className="text-sm text-customBlack1">Asgaard sofa</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductPageDetail;
