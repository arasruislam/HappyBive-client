import Slider from "../../Shared/Slider/Slider";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
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
    </div>
  );
};

export default Home;
