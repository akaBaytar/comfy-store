// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import image1 from '../../assets/hero/hero1.webp';
import image2 from '../../assets/hero/hero2.webp';
import image3 from '../../assets/hero/hero3.webp';
import image4 from '../../assets/hero/hero4.webp';

const carousel = [image1, image2, image3, image4];

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      modules={[Pagination, A11y, Autoplay]}
      pagination={{ clickable: true }}>
      {carousel.map((img) => (
        <SwiperSlide key={img} className='h-[28rem]'>
          <img src={img} className='rounded-box object-cover w-full h-full' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
