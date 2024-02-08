import React from "react";
import "../../assets/primary.button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PrimaryButton({ text, textColor, classesParent }) {
  return (
    <button className={`primary-btn ${classesParent} `}>
      <span className={"circle"} aria-hidden="true">
        {/* <FontAwesomeIcon  icon={faArrowLeft} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className=" bi bi-arrow-left-short icon arrow text-blue-200"
          viewBox="0 0 16 16"
          width={30}
          height={30}
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
          />
        </svg>
      </span>
      <span className={`button-text ${textColor}`}>{text}</span>
    </button>
  );
}
