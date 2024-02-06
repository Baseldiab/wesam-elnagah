// import Image from "next/image";
{
  /* <Image
  src="/vercel.svg"
  alt="Vercel Logo"
  className="dark:invert"
  width={100}
  height={24}
  priority                  

/> */
}
import Swiper from "@/app/components/swiper";
import styles from "@/app/assets/Swiper.module.css";
import { slideImages } from "./lists/sliderImages";
import Navbar from "./components/navbar";
import Discounts from "./components/discounts";

export default function Home() {
  return (
    <main className={"h-[1500px]"}>
      <Navbar />

      <Swiper slideImages={slideImages} />

      <Discounts />
    </main>
  );
}
