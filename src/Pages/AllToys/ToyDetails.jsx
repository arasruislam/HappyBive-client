import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUser } from "react-icons/fa";

const ToyDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const ToyDetails = useLoaderData();
  console.log(ToyDetails);
  return (
    <div className="custom-container bg-gray-100 grid grid-cols-1 md:grid-cols-2 py-12">
      <div className="w-1/2 max-h-1/2 mx-auto p-4 bg-white rounded-lg shadow-md space-y-2">
        <img
          src={ToyDetails?.img}
          alt="Toy Image"
          className="max-h-48 mx-auto"
        />

        <h3 className="text-2xl font-semibold pt-8">{ToyDetails?.toyName}</h3>
        <p>
          <Rating
            className="max-w-[150px]"
            value={ToyDetails?.ratings}
            readOnly
          />
        </p>
        <p>Price: ${ToyDetails?.price}</p>
        <p>Quantity: {ToyDetails?.quantity}</p>
      </div>

      <div className="w-full lg:-ms-32 max-h-1/2 mx-auto px-8 py-4 bg-gray-600 rounded-lg shadow-md space-y-2">
        <p className="text-xl font-normal text-[#B1D22F]">description:</p>
        <p className=" text-justify text-gray-300">{ToyDetails?.description}</p>

        {/* Seller Info */}
        <div>
          <h4 className="text-xl pt-4 mb-4 font-normal text-[#B1D22F]">
            Seller info:
          </h4>

          <div className="flex items-center gap-2 border-l-4 pl-2 border-[#B1D22F]">
            <div>
              {user?.photoURL ? (
                <>
                  <div className="avatar">
                    <div className="w-12 mask mask-hexagon">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <FaUser className="h-6 w-6 text-[#B1D22F]" />
                  </div>
                </>
              )}
            </div>
            <div>
              <h2 className="text-gray-300 text-sm">
                {ToyDetails?.sellerName ? (
                  <>{ToyDetails.sellerName}</>
                ) : (
                  <>
                    <span>name not available</span>
                  </>
                )}
              </h2>
              <h2 className="text-md text-gray-300">
                {ToyDetails?.sellerEmail ? (
                  <>{ToyDetails.sellerEmail}</>
                ) : (
                  <>
                    <span>email not available</span>
                  </>
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
