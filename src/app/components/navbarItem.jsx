import React from "react";
import styles from "@/app/assets/navbar.module.css";

export default function NavbarItem({ icon, text }) {
  return (
    <div className={styles.nav_item}>
      {icon}
      <a href="#" className={styles.nav_itemText}>
        {text}
      </a>
    </div>
  );
}
