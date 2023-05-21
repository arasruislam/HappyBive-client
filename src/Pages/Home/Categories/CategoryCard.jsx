import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const CategoryCard = ({ category }) => {
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
        <img src={category?.img} alt="Shoes" className="h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category?.toyName}</h2>
        <p>
          <Rating
            className="max-w-[100px]"
            value={category?.ratings}
            readOnly
          />
        </p>
        <p className="text-lg text-red-500 font-bold">${category?.price}</p>
        <div className="card-actions justify-end">
          <Link to={`/subCategories/${category._id}`}>
            <button onClick={viewDetailsHandler} className="btn custom-btn2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
