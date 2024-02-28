import React from 'react';
// Import Swiper React components

import photo1 from '../../assets/photos/1.jpg'
import photo2 from '../../assets/photos/2.jpg'
import photo3 from '../../assets/photos/3.jpg'
import photo4 from '../../assets/photos/4.jpg'
import photo5 from '../../assets/photos/5.jpg'
import photo6 from '../../assets/photos/6.jpg'
import photo7 from '../../assets/photos/7.jpg'
import photo8 from '../../assets/photos/8.jpg'
import photo9 from '../../assets/photos/9.jpg'
import photo10 from '../../assets/photos/10.jpg'
import photo11 from '../../assets/photos/11.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Title from '../../ui/title/Title';
import styles from './slider.module.scss'
import useSize from '../../hooks/useSize';

export default function Slider() {
    const { width } = useSize();
    const countSlides = Math.floor(width/(350 + 50))
  return (
    <section className={styles.slider}>
        <Title>Фото со спектакля</Title>
        <Swiper
            slidesPerView={countSlides < 1 ? 1 : countSlides}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src={photo1} width={350} height={250} alt='scene'></img></SwiperSlide>
            <SwiperSlide><img src={photo2} width={350} height={250} alt='scene'></img></SwiperSlide>
            <SwiperSlide><img src={photo3} width={350} height={250} alt='scene'></img></SwiperSlide>
            <SwiperSlide><img src={photo4} width={350} height={250} alt='scene'></img></SwiperSlide>
            <SwiperSlide><img src={photo5} width={350} height={250} alt='scene'></img></SwiperSlide>
            <SwiperSlide><img src={photo6} width={350} height={250} alt='scene'></img></SwiperSlide>
            <SwiperSlide><img src={photo7} width={350} height={250} alt='scene'></img></SwiperSlide>
            <SwiperSlide><img src={photo8} width={350} height={250} alt='scene'></img></SwiperSlide>
            <SwiperSlide><img src={photo9} width={350} height={250} alt='scene'></img></SwiperSlide>
            <SwiperSlide><img src={photo10} width={350} height={250} alt='scene'></img></SwiperSlide>
            <SwiperSlide><img src={photo11} width={350} height={250} alt='scene'></img></SwiperSlide>
        </Swiper>
    </section>
  );
}
