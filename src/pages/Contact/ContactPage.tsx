import FormContact from "./FormContact";

const ContactPage = () => {
  const imageAddress =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/address.svg";
  const imagePhone =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/phone.svg";
  const imageClock =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/clock.svg";

  return (
    <section className="mx-4 font-poppins flex flex-col items-center justify-center bg-customWhite">
      <h2 className="font-semibold text-customBlack1 text-2xl text-center mb-3 mt-14 md:mt-24">
        Get In Touch With Us
      </h2>
      <p className="text-sm text-customGray2 text-center w-full md:w-2/5">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>
      <div className="flex md:flex flex-col md:flex-row items-center md:items-start justify-center gap-12 sm:gap-28 lg:gap-64 mt-16 md:mt-24 transition-all">
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="flex items-start gap-6 w-56">
            <img src={imageAddress} />
            <div className="text-customBlack1">
              <h4 className="font-medium text-xl">Address</h4>
              <p className="text-sm ">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 w-56">
            <img src={imagePhone} />
            <div className="text-customBlack1">
              <h4 className="font-medium text-xl">Phone</h4>
              <p className="text-sm ">
              Mobile: +(84) 546-6789
              Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 w-56 ">
            <img src={imageClock} />
            <div className="text-customBlack1">
              <h4 className="font-medium text-xl">Working Time</h4>
              <p className="text-sm ">
              Monday-Friday: 9:00 - 22:00
              Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        <div>
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
