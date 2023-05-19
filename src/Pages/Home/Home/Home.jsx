import Slider from "../../Shared/Slider/Slider";
import Banner from "../Banner/Banner";

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
    </div>
  );
};

export default Home;
