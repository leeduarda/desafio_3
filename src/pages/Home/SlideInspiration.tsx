import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SlideInspiration = () => {
  const imgFeature =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/feature.svg";
  const imgArrow =
    "https://imgsdesafio3.s3.us-east-2.amazonaws.com/icons/arrowSlide.png";

  return (
    <section className="bg-customYellow5 mb-16">
      <div className="flex justify-center items-center xl:flex xl:justify-between xl:items-center flex-wrap py-8">
        <div className=" p-8 xl:pl-32">
          <h2 className="font-poppins font-bold text-3xl text-customGray1 w-auto md:w-96">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="font-poppins font-medium text-base text-customGray5 mt-2 w-auto md:w-96">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="mt-4 px-10 py-3 bg-customPrimary text-white font-poppins font-semibold text-base transition-all hover:text-customPrimary hover:bg-customYellow5 hover:ring-1 hover:ring-customPrimary">
            Explore More
          </button>
        </div>
        <div className="w-auto xl:w-1/2">
          <Splide
            options={{
              type: "loop",
              perPage: 2.5,
              perMove: 1,
              gap: "1rem",
              breakpoints: {
                320: {
                  perPage: 1,
                },
                405: {
                  perPage: 1.2,
                },
                640: {
                  perPage: 1.5,
                },
                768: {
                  perPage: 2,
                },
                1024: {
                  perPage: 2.5,
                },
              },
            }}
            hasTrack={false}
            aria-label="..."
          >
            <SplideTrack>
              <SplideSlide>
                <div className="flex items-end absolute bottom-9 md:bottom-4 left-4 transition-all">
                  <div className="bg-customWhite opacity-75 backdrop-blur-sm px-5 py-8">
                    <p className="flex text-center gap-1">
                      01 <img src={imgFeature} alt="" /> Bed Room
                    </p>
                    <h3>Inner Peace</h3>
                  </div>
                  <div className="bg-customPrimary w-8 h-8 flex justify-center items-center cursor-pointer">
                    <img className="w-4 h-4" src={imgArrow} alt="" />
                  </div>
                </div>
                <img
                  className="h-96 lg:h-full"
                  src="https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/inspiration1S4.png"
                  alt="Image 1"
                />
              </SplideSlide>
              <SplideSlide>
                <div className="flex items-end absolute bottom-9 md:bottom-4 left-4 transition-all">
                  <div className="bg-customWhite opacity-75 backdrop-blur-sm px-5 py-8">
                    <p className="flex text-center gap-1">
                      02 <img src={imgFeature} alt="" /> Bed Room
                    </p>
                    <h3>Inner Peace</h3>
                  </div>
                  <div className="bg-customPrimary w-8 h-8 flex justify-center items-center cursor-pointer">
                    <img className="w-4 h-4" src={imgArrow} alt="" />
                  </div>
                </div>
                <img
                  className="h-96 lg:h-full"
                  src="https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/inspiration2S4.png"
                  alt="Image 2"
                />
              </SplideSlide>
              <SplideSlide>
                <div className="flex items-end absolute bottom-9 md:bottom-4 left-4 transition-all">
                  <div className="bg-customWhite opacity-75 backdrop-blur-sm px-5 py-8">
                    <p className="flex text-center gap-1">
                      03 <img src={imgFeature} alt="" /> Bed Room
                    </p>
                    <h3>Inner Peace</h3>
                  </div>
                  <div className="bg-customPrimary w-8 h-8 flex justify-center items-center cursor-pointer">
                    <img className="w-4 h-4" src={imgArrow} alt="" />
                  </div>
                </div>
                <img
                  className="h-96 lg:h-full"
                  src="https://imgsdesafio3.s3.us-east-2.amazonaws.com/homeImgs/inspiration3S4.png"
                  alt="Image 3"
                />
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default SlideInspiration;
