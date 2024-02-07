"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { cards } from "../lists/cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Discounts() {
  return (
    <section className=" bg-gradient-to-t from-sky-950 to-sky-700 py-10">
      <div className="container flex justify-between gap-10 relative">
        <Swiper
          slidesPerView={3.3}
          initialSlide={6}
          centeredSlides={false}
          spaceBetween={15}
          freeMode={true}
          grabCursor={true}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {cards.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="discount-card rounded-3xl">
                  <div className="discount-card_back bg-white rounded-3xl">
                    <h2>About Us</h2>
                    <h3>Some words </h3>
                    <h4>About us</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sunt laborum
                      magnam, temporibus expedita veniam saepe, excepturi placeat adipisci tempore
                      doloribus quas!
                    </p>
                  </div>
                  <div
                    className="discount-card_front rounded-3xl"
                    style={{ background: `url(${item.image}) center / cover` }}
                  ></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="">
          <h2 className="text-white font-semibold text-right" style={{ fontSize: "45px" }}>
            أحدث خصومات البرامج السياحية
          </h2>
          <div className="z-50 flex justify-end gap-5 mt-10">
            <div
            // className="absolute top-1/2 left-0 transform -translate-y-1/2 z-40"
            >
              <button className="button-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="currentColor"
                  className="bi bi-arrow-left-short text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                  />
                </svg>
              </button>
            </div>
            <div
            // className=" absolute top-1/2 right-0 transform -translate-y-1/2 z-40"
            >
              <button className="button-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="currentColor"
                  className="bi bi-arrow-right-short text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
