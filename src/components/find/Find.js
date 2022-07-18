import React from "react";
import styles from "./Find.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your VHCL</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            //! Window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            //! Window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            //! Window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1616549972169-0a0d961c9905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              make='Audi'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1626340980877-ed76ce4651b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJtd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='BMW'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hldnJvbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Chevrolet'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1608994751987-e647252b1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lcmNlZGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Mercedes-Benz'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Nissan'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1600718042170-36ac0c42e203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='Toyota'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1591105327764-4c4b76f9e6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
              make='Jeep'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1582467029213-ce71667c2e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              make='Ford'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1636060889550-20762f149c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHRlc2xhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Tesla'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
