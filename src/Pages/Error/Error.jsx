import { useRouteError } from "react-router-dom";
import errorImg from "../../../public/error.json"

const Error = () => {
    const { error } = useRouteError();
    console.log(error);
    return (
      <div className="flex h-screen items-center justify-center">
        <div>
          <img src={errorImg} alt="error" />
        </div>
      </div>
    );
};

export default Error;