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
            <div className="text-center space-y-5">
                <div className=''>
                    <p>IMAGES</p>
                        <Swiper
                            className='my-images'
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            navigation
                            pagination={{ clickable: true, dynamicBullets: true }}
                        >
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1ItwW93XH7WVQRiuk9kZxDbY19WmZ3KsW' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 1: Every project should begin with a relatively clear blueprint or guiding idea and this was no different.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1B8KhGPdHOpUR_tFwD4Kgsy1Mm5SF3Bqf' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 2: Started to weld the frame together. Remember the trike I mentioned? You can see it hidden under the table.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1Tweh1GLDGWjJm7LL385igv4x0S6YcdEK' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 3: Mocking up the front suspension and locating the gas tank above the engine for gravity fed fuel.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1jkgUYsJF1A-VAfJJNxS5OT9Kuk0Zn0gm' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 4: Almost fully assembled, here I'm building the steering system to conform to Ackermann steering geometry, which allows left and right wheels to trace different radii when cornering </span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1UuLm5GYRsMeKnufWEGkVZRzBXjrDeND8' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 5: At this point I took a break and gave myself a pat on the back, not bad..if I may say so myself.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1oAv2ZkfiwX-2Lz7b5l7rEWHyDAmaqahG' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 6: Not bad at all!</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1cSwrbu8YBbPzSfQ8Un-Pnf4RPZx0y8UU' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 7: Returned home one Saturday morning with a bagful of goodies from Sayal. Let make a dashboard. </span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1tapYznWyp1EpP3DXwFAvlfVqd7K672qr' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 8: Mocked up the system on a breadboard, and simulated the wheel and engine speed inputs by using a magnet attached to a spinning drill bit.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=19nx8BlGQ6bzFi7ssANJwlAuik93-gXKO' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 9: Made a second dashboard to continue prototyping after the other one was permanantly soldered together.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1XHp0A9mOv0g8KPvG8WQk8QOukH_q8B1C' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 10: Moving from the breadboard to prototyping pcb. This was also my first time soldering, its alot like tig welding.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1tGfqw00Y3wV2kf_8_vg6NE9Ni51w4j_c' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 11: The completed circuit board. The only change the that was made after this was relocating the relay away from the board to reduce emf interference.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1cRye2Wwh5TsF0bcPO4ItghAoD1k0_9Kl' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 12: Testing the dashboard - Screen capture from a video where the go kart was idling around 1100rpm.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1K6Dn_yfwg1sEpZg_OweDc9iqx4IjocZn' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 13: The project was basically complete at this point as far as the dashboard goes. However I decided the change the engine to the engine taken from the motorcycle pictured.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1cId1RV9VujD8Hvz2U2lQw5F33y_EVEQt' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 14: The two powerplants pictured side by side</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1AJfoMDh5mJmJ-Yz9fsM2DmdgYO9N-5wl' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 15: The sun seems to be about to rise. Test fitting the engine and radiator. </span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1hBR8nS-hKXctsOLuZQIyYxIIMz647ZNU' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 16: Upgrading to the motorcycle brakes as well. What a massive difference!</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1_d7KCUXfOdamszbpcs0oczZ3lmRJn2FJ' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 17: There&apos;s some concern about the lack of ground clearance around the brakes but it&apos;ll be fine for on-road use.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1pRJoxJljo-VaRziIETSCCiVZfixw_Cq5' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 18: Final step is to find a nice route for the exhaust to travel to the muffler, and a nice spot for the muffler to hang.</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1754ISMCx0CA9Z_nK8AYc8JFt1QofSjUv' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 19: Ready to roll with a new engine and 6 gears</span></div></SwiperSlide>
                            <SwiperSlide><div className='flex flex-col pb-5'><img src='https://drive.google.com/uc?id=1Q2fp3GK7gBxfk-yb1X6nTumo_VnwWkcG' className='h-64 mx-auto' /><span className='mx-10 md:mx-20'>Slide 20: THE END</span></div></SwiperSlide>
                        </Swiper>

                </div>
                <div>
                    <p>VIDEOS</p> 
                        <Swiper
                                className='my-videos'
                                modules={[Navigation, Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                navigation
                                pagination={{ clickable: true, dynamicBullets: true }}
                            >
                            <SwiperSlide className='flex flex-col items-center'><div className='flex flex-col pb-5 items-center'><iframe className='h-96' src="https://player.vimeo.com/video/858225244?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="360" height="440" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_drive"></iframe><span className='mx-10 md:mx-20'>Slide 1: Test driving around the compound and enjoying the backfire noises. :&#41;</span></div></SwiperSlide>
                            <SwiperSlide className='flex flex-col items-center'><div className='flex flex-col pb-5 items-center'><iframe className='h-96' src="https://player.vimeo.com/video/858314024?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="360" height="440" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_drive"></iframe><span className='mx-10 md:mx-20'>Slide 2: Walk around the go kart.</span></div></SwiperSlide>
                            <SwiperSlide className='flex flex-col items-center'><div className='flex flex-col pb-5 items-center'><iframe className='h-96' src="https://player.vimeo.com/video/858225218?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="360" height="440" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_revlimiter"></iframe><span className='mx-10 md:mx-20'>Slide 3: Testing the rev-limiter, set at 5000rpm for testing.</span></div></SwiperSlide>
                            <SwiperSlide className='flex flex-col items-center'><div className='flex flex-col pb-5 items-center'><iframe className='h-96' src="https://player.vimeo.com/video/858314055?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="360" height="440" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_launchcontrol"></iframe><span className='mx-10 md:mx-20'>Slide 4: Testing the launch control, set at 2000rpm for testing.</span></div></SwiperSlide>
                            <SwiperSlide className='flex flex-col items-center'><div className='flex flex-col pb-5 items-center'><iframe className='h-96' src="https://player.vimeo.com/video/858225184?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="360" height="440" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_menus"></iframe><span className='mx-10 md:mx-20'>Slide 5: Idle testing.</span></div></SwiperSlide>
                            <SwiperSlide className='flex flex-col items-center'><div className='flex flex-col pb-5 items-center'><iframe className='h-96' src="https://player.vimeo.com/video/858225163?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="360" height="440" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="test_idle"></iframe><span className='mx-10 md:mx-20'>Slide 6: Testing the display menus.</span></div></SwiperSlide>
                        </Swiper>
                </div>
            </div>
        </div>
    )
}