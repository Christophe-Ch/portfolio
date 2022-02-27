import Link from "next/link";
import styles from "../styles/components/slider.module.scss";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        className={styles.slider}
        pagination
        navigation
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className={styles.slide}>
          <div>
            <span className={styles.title}>company</span>
            <span className={styles.date}>September 2020 - December 2020</span>
          </div>

          <div className={styles.body}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link href="/">
              <a className={styles.link}>Read more</a>
            </Link>
          </div>

          <div className={styles.skills}>
            <span>skill 1</span>
            <span>skill 2</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div>
            <span className={styles.title}>company</span>
            <span className={styles.date}>September 2020 - December 2020</span>
          </div>

          <div className={styles.body}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="/">
              <a className={styles.link}>Read more</a>
            </Link>
          </div>

          <div className={styles.skills}>
            <span>skill 1</span>
            <span>skill 2</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
