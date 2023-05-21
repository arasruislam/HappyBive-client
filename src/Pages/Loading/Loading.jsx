import loading from "../../../public/loading.json";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div>
        <Lottie animationData={loading} loop={true} className="h-96" />
      </div>
      <div>
        <h2>Data Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
