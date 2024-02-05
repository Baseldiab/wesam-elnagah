import React from "react";
import styles from "@/app/assets/navbar.module.css";

export default function NavbarItem({ icon, text }) {
  return (
    <a href="#" className={styles.nav_item}>
      {icon}
      {text}
    </a>
  );
}
