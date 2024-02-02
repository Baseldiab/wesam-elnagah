import React from "react";
import NavbarItem from "./navbarItem";
import styles from "@/app/assets/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/fontawesome-free-brands";

export default function Navbar() {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-5">
        <div>
          <FontAwesomeIcon icon={faWhatsapp} />
          <span className="ms-2">+96654500134</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <span className="ms-2">+96654500134</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          <span className="ms-2">+96654500134</span>
        </div>
      </div>
      <nav className={styles.navbar}>
        <NavbarItem
          text={"Home"}
          icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faHouse} />}
        />
      </nav>
    </div>
  );
}
