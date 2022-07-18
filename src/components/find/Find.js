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
              image='https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
              make='BMW'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hldnJvbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
              make='Chevrolet'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
              make='Mercedes-Benz'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
              make='Nissan'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              make='Toyota'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amVlcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              make='Jeep'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              make='Ford'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              make='Tesla'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              make='Porsche'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
