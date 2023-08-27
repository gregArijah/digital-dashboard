import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../ui_components/swiper.css'

export default function Gallery() {

    return(
        <div>
            <div className="text-lg text-center mb-3">GALLERY</div>            
            <div className="text-center space-y-3">
                <div className=''>
                    <p>IMAGES</p>
                        <Swiper
                            className='my-pagination my-navigation'
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}

                        >
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='/images/build0.jpg' className='h-64 mx-auto'></img>dfhdfhdhdhd dhdhdhdhd   dhdhdhddhdhd   hddhdhdhdhdhdhd  dhddhdhdhddhdhd hdhdddhdhdhdhd </div></SwiperSlide>
                            <SwiperSlide><img src='/images/build1.jpg' className='h-64 mx-auto'></img>Slide 2</SwiperSlide>
                            <SwiperSlide><img src='/images/build2.jpg' className='h-64 mx-auto'></img>Slide 3</SwiperSlide>
                            <SwiperSlide><img src='/images/build3.jpg' className='h-64 mx-auto'></img>Slide 4</SwiperSlide>
                            <SwiperSlide><img src='/images/build4.jpg' className='h-64 mx-auto'></img>Slide 5</SwiperSlide>
                            <SwiperSlide><img src='/images/build5.jpg' className='h-64 mx-auto'></img>Slide 6</SwiperSlide>
                            <SwiperSlide><img src='/images/build6.jpg' className='h-64 mx-auto'></img>Slide 6</SwiperSlide>
                            <SwiperSlide><img src='/images/build7.jpg' className='h-64 mx-auto'></img>Slide 7</SwiperSlide>
                            <SwiperSlide><img src='/images/build8.jpg' className='h-64 mx-auto'></img>Slide 8</SwiperSlide>
                            <SwiperSlide><img src='/images/build9.jpg' className='h-64 mx-auto'></img>Slide 9</SwiperSlide>
                            <SwiperSlide><img src='/images/build10.jpg' className='h-64 mx-auto'></img>Slide 10</SwiperSlide>
                            <SwiperSlide><img src='/images/build11.jpg' className='h-64 mx-auto'></img>Slide 11</SwiperSlide>
                            <SwiperSlide><img src='/images/build12.jpg' className='h-64 mx-auto'></img>Slide 12</SwiperSlide>
                            <SwiperSlide><img src='/images/build13.jpg' className='h-64 mx-auto'></img>Slide 13</SwiperSlide>
                            <SwiperSlide><img src='/images/build14.jpg' className='h-64 mx-auto'></img>Slide 14</SwiperSlide>
                            <SwiperSlide><img src='/images/build15.jpg' className='h-64 mx-auto'></img>Slide 15</SwiperSlide>
                            <SwiperSlide><img src='/images/build16.jpg' className='h-64 mx-auto'></img>Slide 16</SwiperSlide>
                            <SwiperSlide><img src='/images/build17.jpg' className='h-64 mx-auto'></img>Slide 17</SwiperSlide>
                            <SwiperSlide><img src='/images/build18.jpg' className='h-64 mx-auto'></img>Slide 18</SwiperSlide>
                            <SwiperSlide><img src='/images/build19.jpg' className='h-64 mx-auto'></img>Slide 19</SwiperSlide>
                            <SwiperSlide><img src='/images/build20.jpg' className='h-64 mx-auto'></img>Slide 20</SwiperSlide>
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