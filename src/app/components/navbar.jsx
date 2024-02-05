"use client";
import React, { useEffect } from "react";
import NavbarItem from "./navbarItem";
import styles from "@/app/assets/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBolt,
  faEllipsis,
  faEnvelopeOpen,
  faFlag,
  faHotel,
  faHouse,
  faInfo,
  faMagnifyingGlass,
  faMountainSun,
  faPen,
  faPenRuler,
  faPhone,
  faPlane,
  faShip,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/fontawesome-free-brands";
import Image from "next/image";

export default function Navbar() {
  useEffect(() => {
    window.onscroll = function () {
      var navbar = document.getElementById("navbar");
      // console.log(navbar);
      // console.log(window.scrollY);

      if (window.scrollY === 0 || window.scrollY <= 40) {
        navbar.classList.remove("navbar_sticky");
      } else {
        navbar.classList.add("navbar_sticky");
      }
    };
  }, [window.onscroll]);

  return (
    <>
      <div className={styles.top_nav}>
        <div>
          <FontAwesomeIcon className="text-green-400" icon={faWhatsapp} />
          <a href="#" className="ms-2 text-white">
            +96654500134
          </a>
        </div>
        <div>
          <FontAwesomeIcon className="text-orange-300" icon={faPhone} />
          <a href="#" className="ms-2 text-white">
            92005232
          </a>
        </div>
        <div>
          <FontAwesomeIcon className="text-white" icon={faEnvelopeOpen} />
          <a href="#" className="ms-2 text-white">
            info@elenagahtravels.com
          </a>
        </div>
      </div>

      <nav className={"navbar"} id="navbar">
        <div className="container">
          <FontAwesomeIcon className="text-white text-xl" icon={faMagnifyingGlass} />

          <div className={styles.navbar_icons}>
            <NavbarItem
              text={"خدمات اخري"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faEllipsis} />}
            />

            <NavbarItem
              text={"نبذة عنا"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faInfo} />}
            />

            <NavbarItem
              text={"تواصل معنا"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faAddressBook} />}
            />

            <NavbarItem
              text={"رحلات بحرية"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faShip} />}
            />

            <NavbarItem
              text={"تصميم برنامج سياحي"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faPenRuler} />}
            />

            <NavbarItem
              text={"حجز الفنادق"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faHotel} />}
            />
            <NavbarItem
              text={"الطيران"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faPlane} />}
            />

            <NavbarItem
              text={"الدليل السياحي"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faPen} />}
            />

            <NavbarItem
              text={"العروض المميزة"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faBolt} />}
            />

            <NavbarItem
              text={"البرامج السياحية"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faFlag} />}
            />

            <NavbarItem
              text={"الرئيسية"}
              icon={<FontAwesomeIcon className={styles.nav_itemIcon} icon={faHouse} />}
            />
          </div>

          <a href="#">
            <FontAwesomeIcon className="text-3xl text-white" icon={faMountainSun} />
          </a>
        </div>
      </nav>
    </>
  );
}
