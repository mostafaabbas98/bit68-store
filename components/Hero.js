import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper';

const Hero = ({ sliders }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="relative w-full h-[220px] md:h-[400px] bg-[#F1F1F1]"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <Image src={slider.img} alt="" layout="fill" objectFit="contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
