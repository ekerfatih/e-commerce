import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Limiter from "../Homepage/layout/Limiter.jsx";

const SwipeComponent = ({image}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={"mx-auto py-10 sm:max-w-5/12"}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img className={""} src={image} alt={"f"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt={"f"}/>
                </SwiperSlide>
            </Swiper>
            <div className={"py-5 "}>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className={" aspect-square object-cover object-top"} src={image} alt={"f"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={" aspect-square object-cover object-top"} src={image} alt={"f"}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>);
};

export default SwipeComponent