import img1 from "../../../assets/buyer/1.jpg";
import img2 from "../../../assets/buyer/2.jpg";
import img3 from "../../../assets/buyer/3.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Buyers = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 duration-300">
        <figure>
          <img src={img2} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">David Conway</h2>

          <div className="card-actions">
            <FaFacebook className="h-6 w-6 text-blue-500" />
            <FaTwitter className="h-6 w-6 text-blue-400" />
            <FaInstagram className="h-6 w-6 text-red-400" />
            <FaLinkedin className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 duration-300">
        <figure>
          <img src={img1} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">Mcbruney Kurl</h2>

          <div className="card-actions">
            <FaFacebook className="h-6 w-6 text-blue-500" />
            <FaTwitter className="h-6 w-6 text-blue-400" />
            <FaInstagram className="h-6 w-6 text-red-400" />
            <FaLinkedin className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 duration-300">
        <figure>
          <img src={img3} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">Mack Tayson</h2>

          <div className="card-actions">
            <FaFacebook className="h-6 w-6 text-blue-500" />
            <FaTwitter className="h-6 w-6 text-blue-400" />
            <FaInstagram className="h-6 w-6 text-red-400" />
            <FaLinkedin className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyers;
