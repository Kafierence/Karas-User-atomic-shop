import dynamic from "next/dynamic";
import Image from "next/image";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5"; // requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageCarousel = ({ images, handleChangeImage, prevRef, nextRef }) => {
  return (
    <>

      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={1}
        navigation={true}
        allowTouchMove={false}
        loop={true}
        slidesPerView={4}
        modules={[Navigation]}
        className="mySwiper image-carousel"
      >
        {images?.map((img, i) => (
          <SwiperSlide key={i + 1} className="group">
            <button onClick={() => handleChangeImage(img)}>
              <Image
                className="border inline-flex items-center justify-center px-3 py-1 mt-2"
                src={img}
                alt="product"
                width={100}
                height={100}
              />
            </button>
          </SwiperSlide>
        ))}
        <button ref={prevRef} className="prev">
          <IoChevronBackOutline />
        </button>
        <button ref={nextRef} className="next">
          <IoChevronForward />
        </button>
      </Swiper>
    </>
  );
};

export default dynamic(() => Promise.resolve(ImageCarousel), { ssr: false });
