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
      <section className="my-8">
        <Categories />
      </section>
    </div>
  );
};

export default Home;
