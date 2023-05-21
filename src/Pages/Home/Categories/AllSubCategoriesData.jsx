import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const AllSubCategoriesData = ({ categories }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate;

  const viewDetailsHandler = () => {
    if (!user) {
      toast.error("You have to log in first to view details");
      navigate("/login");
    }
  };
  return (
    <div className="card card-compact max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={categories?.img} alt="Shoes" className="h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{categories?.toyName}</h2>
        <p>
          <Rating
            className="max-w-[100px]"
            value={categories?.ratings}
            readOnly
          />
        </p>
        <p className="text-lg text-red-500 font-bold">${categories?.price}</p>
        <div className="card-actions justify-end">
          <Link to={`/subCategories/${categories._id}`}>
            <button onClick={viewDetailsHandler} className="btn custom-btn2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllSubCategoriesData;
