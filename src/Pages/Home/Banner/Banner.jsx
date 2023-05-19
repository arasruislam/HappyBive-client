import { FaRegPlayCircle } from "react-icons/fa";
import banner from "../../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
      {/* mobile banner img */}
      <div className="flex lg:hidden">
        <img src={banner} alt="banner image" />
      </div>
      {/* banner text */}
      <div className="space-y-8">
        <h1 className="text-2xl md:text-5xl font-bold">
          Get The <br />{" "}
          <span className="text-[#B1D22F] underline">Best Children Toy</span>{" "}
          <br /> & Quality Best Product
        </h1>

        <p className="text-gray-500 font-poppins">
          HappyBive has a luxury Toys with a long history, and this website is a
          tribute to aviation pioneers children who used the toys in their house
          for enjoying.
        </p>

        <button className="btn btn-md custom-btn text-lg">
          <FaRegPlayCircle className="h-6 w-6 mr-2" /> Watch
        </button>
      </div>

      {/* Desktop banner img */}
      <div className="hidden lg:block">
        <img src={banner} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
