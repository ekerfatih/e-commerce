import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

const SwipeComponent = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const imgs = Array.isArray(images) ? images : [];
    if (imgs.length === 0) return null;

    return (
        <div className="mx-auto py-10 sm:max-w-5/12">
            <Swiper
                style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff'}}
                loop={imgs.length > 1}
                spaceBetween={10}
                navigation
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {imgs.map((it, i) => (
                    <SwiperSlide key={`main-${i}`}>
                        <img src={it.url} alt="product" className="w-full h-auto object-contain" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="py-5">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode
                    watchSlidesProgress
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {imgs.map((it, i) => (
                        <SwiperSlide key={`thumb-${i}`}>
                            <img src={it.url} alt="thumb" className="aspect-square object-cover object-top w-full h-full" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SwipeComponent
