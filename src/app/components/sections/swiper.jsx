"use client";

import "../../assets/Swiper.css";
import { useState } from "react";

import PrimaryButton from "../buttons/primaryButton";

const Swiper = ({ slideImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <header className={"swiper"}>
      <div className={"slides"} style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {slideImages.map((item, index) => (
          <div
            key={index}
            className={"slide"}
            style={{
              background: `url(${item.image}) center/cover fixed no-repeat`,
              height: "95vh",
            }}
          >
            <div className={"swiper_content"}>
              <p className={"swiper_text"}>{item.text}</p>
              <PrimaryButton textColor={"text-white"} text={item.btnText} />
            </div>
          </div>
        ))}
      </div>
      {/* ARROW NAVIGATOR */}
      <div className={"navigator"}>
        <button className={"navButton"} onClick={goToPreviousSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>
        </button>
        <div className={"slideInfo"}>
          {slideImages.length} / {currentIndex + 1}
        </div>
        <button className={"navButton"} onClick={goToNextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Swiper;
