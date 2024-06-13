import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const logoUrl =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/soon.svg";
  const userUrl =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/user.svg";
  const cartUrl =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/cart.svg";
  const btnMenuUrl =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/btnMenu.svg";
  const btnCloseUrl =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/btnClose.svg";

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className=" bg-customWhite md:flex md:justify-between px-0 md:px-5 lg:px-12 items-center text-center md:h-20 text-customBlack1 transition">
      <div className="flex items-center justify-between p-4 md:p-0">
        <Link
          to="/"
          className="flex justify-center items-end gap-y-1"
        >
          <img className=" w-12 h-8" src={logoUrl} alt="project icon" />
          <h1 className=" font-montserrat font-bold text-3xl">Furniro</h1>
        </Link>
        <button
          className="md:hidden transition-all"
          onClick={handleClick}
        >
          {click ? (
            <img className="w-8 h-8 opacity-85" src={btnCloseUrl} alt="button close menu" />
          ) : (
            <img className="w-8 h-8 opacity-85" src={btnMenuUrl} alt="button open menu" />
          )}
        </button>
      </div>

      <nav
        className={`${click ? "block bg-customWhite mb-3" : "hidden"} md:flex`}
      >
        <ul className="md:flex md:flex-row gap-4 md:gap-10 lg:gap-20 leading-10 flex flex-col transition-all font-poppins font-medium text-base ">
          <Link className="transition-all hover:scale-110" to="/" onClick={() => setClick(false)}>
            Home
          </Link>
          <Link className="transition-all hover:scale-110" to="/shop" onClick={() => setClick(false)}>
            Shop
          </Link>
          <Link className="transition-all hover:scale-110" to="/about" onClick={() => setClick(false)}>
            About
          </Link>
          <Link className="transition-all hover:scale-110" to="/contact" onClick={() => setClick(false)}>
            Contact
          </Link>
        </ul>
      </nav>

      <div
        className={`${
          click ? "block bg-customWhite" : "hidden"
        } md:flex flex items-center gap-8 justify-center`}
      >
        <Link to="/">
          <img src={userUrl} alt="user icon" />
        </Link>
        <Link to="/">
          <img src={cartUrl} alt="cart icon" />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
