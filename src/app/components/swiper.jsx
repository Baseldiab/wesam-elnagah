"use client";

import styles from "@/app/assets/Swiper.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "./primaryButton";

const Swiper = ({ slideImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className={styles.swiper}>
      <div className={styles.slides} style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {slideImages.map((item, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              background: `url(${item.image}) center/cover fixed no-repeat`,
              height: "90vh",
            }}
          >
            <div className={styles.swiper_content}>
              <p className={styles.swiper_text}>{item.text}</p>
              <PrimaryButton text={item.btnText} />
            </div>
          </div>
        ))}
      </div>
      {/* ARROW NAVIGATOR */}
      <div className={styles.navigator}>
        <button className={styles.navButton} onClick={goToPreviousSlide}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className={styles.slideInfo}>
          {slideImages.length} / {currentIndex + 1}
        </div>
        <button className={styles.navButton} onClick={goToNextSlide}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
};

export default Swiper;
