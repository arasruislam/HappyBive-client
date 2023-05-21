import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-341px)] pt-16 font-poppins">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
