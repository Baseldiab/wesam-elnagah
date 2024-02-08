import React from "react";
import "../../assets/navbar.css";

export default function NavbarItem({ icon, text }) {
  return (
    <a href="#" className={"nav_item"}>
      {icon}
      {text}
    </a>
  );
}
