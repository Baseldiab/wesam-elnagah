import React from "react";

export default function MainCard({ props }) {
  return (
    <div className="main-card rounded-3xl">
      <div className="main-card_back bg-white rounded-3xl">
        <div className="p-4 text-right">
          <h2>About Us</h2>
          <h3>Some words </h3>
          <h4>About us</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sunt laborum magnam,
            temporibus expedita veniam saepe, excepturi placeat adipisci tempore doloribus quas!
          </p>
        </div>
      </div>
      <div
        className="main-card_front rounded-3xl container"
        style={{ background: `url(${props.image}) center / cover` }}
      ></div>
    </div>
  );
}
