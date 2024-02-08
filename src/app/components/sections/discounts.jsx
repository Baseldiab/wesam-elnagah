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
import { cards } from "../../lists/cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faMountainSun } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../buttons/primaryButton";

export default function Discounts() {
  return (
    <section className=" bg-gradient-to-t from-[#0d142a] to-sky-950 ">
      <div className=" flex justify-between relative py-14">
        <Swiper
          slidesPerView={3.2}
          initialSlide={6}
          centeredSlides={false}
          spaceBetween={10}
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
                <div className="main-card rounded-3xl">
                  <div className="main-card_back bg-white rounded-3xl py-10 p-4">
                    <div className=" text-right">
                      <a href="#" title="وسام النجاح للسفر والسياحة">
                        <FontAwesomeIcon className="text-3xl" icon={faMountainSun} />
                      </a>

                      <div className="main-card_header flex justify-end my-3">
                        <h2 className="font-bold text-xl py-1 border-b-2 border-b-[#2ebea9] w-fit fw-bold">
                          {item.country}
                        </h2>
                      </div>

                      <ul className="main-card_content list-disc text-right ps-6 " dir="rtl">
                        <li className="main-card_content-item font-bold my-3">{item.persons}</li>
                        <li className="main-card_content-item font-bold my-3">{item.price}</li>
                        <li className="main-card_content-item font-bold my-3">
                          <span>بدلا من</span>
                          <del className="ms-2">{item.discount}</del>
                        </li>
                      </ul>

                      <div
                        dir="rtl"
                        className="bg-green-200 py-1 rounded-md px-2 border-r-4 mt-3 mb-2 border-green-600"
                      >
                        <span className="mx-0.5 text-gray-500">وفر:</span>
                        <span className="mx-0.5">{item.discount - item.priceItem}</span>
                        <span className="mx-0.5 text-gray-500">ريال سعودي</span>
                      </div>

                      <hr className="w-full h-0.5 bg-gray-300 " />

                      <PrimaryButton
                        classesParent={"my-6"}
                        textColor={"text-black"}
                        text={"تفاصيل البرنامج"}
                      />
                    </div>
                  </div>
                  <div
                    className="main-card_front rounded-3xl container"
                    style={{ background: `url(${item.image}) center / cover` }}
                  ></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="px-10">
          <h2 className="text-white font-semibold text-right" style={{ fontSize: "35px" }}>
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
