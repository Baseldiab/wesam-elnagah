"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { cards } from "../lists/cards";

export default function Discounts() {
  return (
    <section className=" bg-gradient-to-t from-sky-950 to-sky-700 py-10">
      <div className="container flex justify-between gap-10">
        <Swiper
          slidesPerView={3.3}
          initialSlide={6}
          centeredSlides={false}
          spaceBetween={15}
          freeMode={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cards.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <Image
                    className="h-[450px] rounded-3xl"
                    src={item.image}
                    alt={item.country}
                    width={300}
                    height={450}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div>
          <h2 className="text-white font-semibold text-right" style={{ fontSize: "45px" }}>
            أحدث خصومات البرامج السياحية
          </h2>
        </div>
      </div>
    </section>
  );
}
