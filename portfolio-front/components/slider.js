import Link from "next/link";
import styles from "../styles/components/slider.module.scss";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider(props) {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        className={styles.slider}
        pagination
        navigation
        modules={[Pagination, Navigation]}
      >
        {props.items.map((item) => (
          <SwiperSlide className={styles.slide} key={item.slug}>
            <div>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.date}>
                {parseDates(item.from, item.to)}
              </span>
            </div>

            <div className={styles.body}>
              <p>{item.excerpt}</p>
              <Link href={`/${item.type}/${item.slug}`}>
                <a className={styles.link}>Read more</a>
              </Link>
            </div>

            {item.skills && item.skills.length > 0 && (
              <div className={styles.skills}>
                {item.skills.map((skill) => (
                  <span key={skill.name}>{skill.name}</span>
                ))}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const parseDates = (from, to) => {
  const fromString = new Date(from).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

  if (to) {
    const toString = new Date(to).toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });

    return `${fromString} - ${toString}`;
  }

  return fromString;
};
