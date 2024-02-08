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
import Swiper from "./components/sections/swiper.jsx";
import { slideImages } from "./lists/sliderImages";
import Discounts from "./components/sections/discounts";

export default function Home() {
  return (
    <main className={"h-[1500px] top-[-160px] relative"}>
      <Swiper slideImages={slideImages} />

      <Discounts />
    </main>
  );
}
