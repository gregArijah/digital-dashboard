import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
  
export default function Gallery() {
    return(
        <div>
            <div className="text-lg text-center mb-3">SPECIFICATIONS</div>            
            <div className="text-center space-y-3">
                <div>
                    <p>IMAGES</p>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper>

                </div>
                <div>
                    <p>VIDEOS</p> 
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper>
                </div>
            </div>
        </div>
    )
}