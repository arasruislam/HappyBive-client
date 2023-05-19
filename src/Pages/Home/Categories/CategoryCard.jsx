import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const CategoryCard = ({ category }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={category?.img} alt="Shoes" className="h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category?.toyName}</h2>
        <p className="text-lg text-red-500 font-bold">${category?.price}</p>
        <div className="card-actions justify-end">
          <button className="btn custom-btn2">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
