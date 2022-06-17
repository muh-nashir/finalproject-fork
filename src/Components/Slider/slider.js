import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import  './slider.css'

// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// import { Pagination } from "swiper";


function slider() {
  return (
    <div className='banner'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block img-banner w-90"
            src="/asset/img-banner.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-block slider slider-1'></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-block slider slider-2'></div>
        </Carousel.Item>
      </Carousel>

        {/* <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className=" d-block img-banner w-100"
            src="/asset/img-banner.png"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper> */}

    </div>
  );
}

export default slider;