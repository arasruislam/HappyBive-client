import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/sponsor/1.png";
import img2 from "../../../assets/sponsor/2.png";
import img3 from "../../../assets/sponsor/3.png";
import img4 from "../../../assets/sponsor/4.png";
import img5 from "../../../assets/sponsor/5.png";
import img6 from "../../../assets/sponsor/6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Swiper Module
import { Pagination, Navigation, Autoplay } from "swiper";

const Slider = () => {
  return (
    <>
      {/* medium device */}
      <Swiper
        className="hidden lg:flex"
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img6}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img1}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img6}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
      </Swiper>

      {/* mobile */}
      <Swiper
        className="flex lg:hidden"
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img6}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img1}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img6}
            alt="Sponsor image"
            className=" grayscale hover:grayscale-0"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
