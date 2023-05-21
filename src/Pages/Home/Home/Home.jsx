import { useContext } from "react";
import Slider from "../../Shared/Slider/Slider";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import { AuthContext } from "../../../Providers/AuthProvider";
import Loading from "../../Loading/Loading";
import Gallery from "../Gallery/Gallery";
import Buyers from "../Buyers/Buyers";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="custom-container px-4">
      {/* banner Section */}
      <section className="py-8">
        <Banner />
      </section>

      {/* Sponsor Slide */}
      <section className="py-12 mx-auto">
        <Slider />
      </section>

      {/* Shop by Categories */}
      <section className="my-12 bg-gray-50 px-4 py-8">
        <div className="pb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Shop By Category</h2>
          <p className="text-gray-500">
            HappyBive has a luxury Toys with a long history, and this website is
            a tribute.
          </p>
        </div>
        {/* category */}
        <Categories />
      </section>

      {/* Gallery */}
      <section className="py-8 flex items-center justify-center flex-col">
        <div className="pb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Gallery</h2>
          <p className="text-gray-500">
            HappyBive has a luxury Toys with a long history, and this website is
            a tribute.
          </p>
        </div>
        <Gallery />
      </section>

      {/* Buyers */}
      <section className="pt-16 pb-8 flex items-center justify-center flex-col">
        <div className="pb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Our Top Buyers</h2>
          <p className="text-gray-500">
            HappyBive has a luxury Toys with a long history, and this website is
            a tribute.
          </p>
        </div>
        <Buyers />
      </section>
    </div>
  );
};

export default Home;
