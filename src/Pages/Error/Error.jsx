import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorImg from "../../../public/error.json";

const Error = () => {
  const { error } = useRouteError();
  console.log(error);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center flex-col">
        <Lottie animationData={errorImg} loop={true} className="h-96" />

        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-600 mb-4">
            {error.message}
          </h2>
          <Link to="/">
            <button className="btn custom-btn">Back to Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
