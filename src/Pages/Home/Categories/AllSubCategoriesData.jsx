import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";


const AllSubCategoriesData = ({ categories }) => {
  return (
    <div className="card card-compact lg:w-96 max-w-96 bg-base-100 shadow-xl">
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
          <button className="btn custom-btn2">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllSubCategoriesData;
