import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';


// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


export default function Swipera() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    spaceBetween={20}
    navigation
    autoplay={{delay:3000}}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <SwiperSlide>  <img src="/gi1.gif"></img></SwiperSlide>
    <SwiperSlide>
    <img src="/sp3.webp"></img>
    </SwiperSlide>
    <SwiperSlide>  <img src="/sp2.jpg"></img></SwiperSlide>
    <SwiperSlide>  <img src="/gi1.gif"></img></SwiperSlide>
    <SwiperSlide><img src="/sp3.webp"></img></SwiperSlide>
    <SwiperSlide><img src="/sp2.jpg"></img></SwiperSlide>
    
  </Swiper>
  );
}
