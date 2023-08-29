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
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1ItwW93XH7WVQRiuk9kZxDbY19WmZ3KsW' className='h-64 mx-auto'></img>Slide 1</div></SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1B8KhGPdHOpUR_tFwD4Kgsy1Mm5SF3Bqf' className='h-64 mx-auto' />Slide 2</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1Tweh1GLDGWjJm7LL385igv4x0S6YcdEK' className='h-64 mx-auto' />Slide 3</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1jkgUYsJF1A-VAfJJNxS5OT9Kuk0Zn0gm' className='h-64 mx-auto' />Slide 4</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=14Tcca26QpErJBUtTsR0Y3thdZ6_-WukF' className='h-64 mx-auto' />Slide 5</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1UuLm5GYRsMeKnufWEGkVZRzBXjrDeND8' className='h-64 mx-auto' />Slide 6</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1oAv2ZkfiwX-2Lz7b5l7rEWHyDAmaqahG' className='h-64 mx-auto' />Slide 6</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1cSwrbu8YBbPzSfQ8Un-Pnf4RPZx0y8UU' className='h-64 mx-auto' />Slide 7</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1tapYznWyp1EpP3DXwFAvlfVqd7K672qr' className='h-64 mx-auto' />Slide 8</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=19nx8BlGQ6bzFi7ssANJwlAuik93-gXKO' className='h-64 mx-auto' />Slide 9</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1XHp0A9mOv0g8KPvG8WQk8QOukH_q8B1C' className='h-64 mx-auto' />Slide 10</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1tGfqw00Y3wV2kf_8_vg6NE9Ni51w4j_c' className='h-64 mx-auto' />Slide 11</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1cRye2Wwh5TsF0bcPO4ItghAoD1k0_9Kl' className='h-64 mx-auto' />Slide 12</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1K6Dn_yfwg1sEpZg_OweDc9iqx4IjocZn' className='h-64 mx-auto' />Slide 13</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1cId1RV9VujD8Hvz2U2lQw5F33y_EVEQt' className='h-64 mx-auto' />Slide 14</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1AJfoMDh5mJmJ-Yz9fsM2DmdgYO9N-5wl' className='h-64 mx-auto' />Slide 15</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1hBR8nS-hKXctsOLuZQIyYxIIMz647ZNU' className='h-64 mx-auto' />Slide 16</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1_d7KCUXfOdamszbpcs0oczZ3lmRJn2FJ' className='h-64 mx-auto' />Slide 17</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1pRJoxJljo-VaRziIETSCCiVZfixw_Cq5' className='h-64 mx-auto' />Slide 18</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1754ISMCx0CA9Z_nK8AYc8JFt1QofSjUv' className='h-64 mx-auto' />Slide 19</SwiperSlide>
                            <SwiperSlide><img src='https://drive.google.com/uc?id=1Q2fp3GK7gBxfk-yb1X6nTumo_VnwWkcG' className='h-64 mx-auto' />Slide 20</SwiperSlide>
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