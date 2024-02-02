import React from "react";
import styles from "@/app/assets/primary.button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PrimaryButton({ text }) {
  return (
    <button className={styles["primary-btn"]}>
      <span className={styles.circle} aria-hidden="true">
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.arrow} text-blue-200`}
          icon={faArrowLeft}
        />
      </span>
      <span className={styles["button-text"]}>{text}</span>
    </button>
  );
}
