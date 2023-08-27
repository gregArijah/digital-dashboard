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
                            className='my-images'
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            // navigation
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='../images/build0.jpg' className='h-64 mx-auto'></img>Slide 1</div></SwiperSlide>
                            <SwiperSlide><img src='../images/build1.jpg' className='h-64 mx-auto'></img>Slide 2</SwiperSlide>
                            <SwiperSlide><img src='../images/build2.jpg' className='h-64 mx-auto'></img>Slide 3</SwiperSlide>
                            <SwiperSlide><img src='../images/build3.jpg' className='h-64 mx-auto'></img>Slide 4</SwiperSlide>
                            <SwiperSlide><img src='../images/build4.jpg' className='h-64 mx-auto'></img>Slide 5</SwiperSlide>
                            <SwiperSlide><img src='../images/build5.jpg' className='h-64 mx-auto'></img>Slide 6</SwiperSlide>
                            <SwiperSlide><img src='../images/build6.jpg' className='h-64 mx-auto'></img>Slide 6</SwiperSlide>
                            <SwiperSlide><img src='../images/build7.jpg' className='h-64 mx-auto'></img>Slide 7</SwiperSlide>
                            <SwiperSlide><img src='../images/build8.jpg' className='h-64 mx-auto'></img>Slide 8</SwiperSlide>
                            <SwiperSlide><img src='../images/build9.jpg' className='h-64 mx-auto'></img>Slide 9</SwiperSlide>
                            <SwiperSlide><img src='../images/build10.jpg' className='h-64 mx-auto'></img>Slide 10</SwiperSlide>
                            <SwiperSlide><img src='../images/build11.jpg' className='h-64 mx-auto'></img>Slide 11</SwiperSlide>
                            <SwiperSlide><img src='../images/build12.jpg' className='h-64 mx-auto'></img>Slide 12</SwiperSlide>
                            <SwiperSlide><img src='../images/build13.jpg' className='h-64 mx-auto'></img>Slide 13</SwiperSlide>
                            <SwiperSlide><img src='../images/build14.jpg' className='h-64 mx-auto'></img>Slide 14</SwiperSlide>
                            <SwiperSlide><img src='../images/build15.jpg' className='h-64 mx-auto'></img>Slide 15</SwiperSlide>
                            <SwiperSlide><img src='../images/build16.jpg' className='h-64 mx-auto'></img>Slide 16</SwiperSlide>
                            <SwiperSlide><img src='../images/build17.jpg' className='h-64 mx-auto'></img>Slide 17</SwiperSlide>
                            <SwiperSlide><img src='../images/build18.jpg' className='h-64 mx-auto'></img>Slide 18</SwiperSlide>
                            <SwiperSlide><img src='../images/build19.jpg' className='h-64 mx-auto'></img>Slide 19</SwiperSlide>
                            <SwiperSlide><img src='../images/build20.jpg' className='h-64 mx-auto'></img>Slide 20</SwiperSlide>
                        </Swiper>

                </div>
                <div>
                    <p>VIDEOS</p> 
                        <Swiper
                                className='my-videos'
                                modules={[Navigation, Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                // navigation
                                pagination={{ clickable: true }}
                            >
                            <SwiperSlide className='flex flex-col items-center'><div className='flex flex-col pb-5'><iframe src="https://player.vimeo.com/video/858225244?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="360" height="440" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_drive"></iframe>Slide 1</div></SwiperSlide>
                            <SwiperSlide className='flex flex-col items-center'><iframe src="https://player.vimeo.com/video/858314024?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="360" height="440" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="walk_around"></iframe>Slide 2</SwiperSlide>
                            <SwiperSlide className='flex flex-col items-center'><iframe src="https://player.vimeo.com/video/858225184?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="360" height="440" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_menus"></iframe>Slide 3</SwiperSlide>
                            <SwiperSlide className='flex flex-col items-center'><iframe src="https://player.vimeo.com/video/858225163?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="440" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_idle"></iframe>Slide 4</SwiperSlide>
                            <SwiperSlide className='flex flex-col items-center'><iframe src="https://player.vimeo.com/video/858225218?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="440" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_revlimiter"></iframe>Slide 5</SwiperSlide>
                            <SwiperSlide className='flex flex-col items-center'><iframe src="https://player.vimeo.com/video/858314055?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="360" height="440" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_launchcontrol"></iframe>Slide 6</SwiperSlide>
                        </Swiper>
                </div>
            </div>
        </div>
    )
}