import Image from "next/image";
import loadImg from "../../public/images/loading.gif";

export default function Loading() {
  return (
    <main style={{ zIndex: "10000" }} className="bg-black h-screen">
      <Image
        className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28"
        src={loadImg}
        alt="loading..."
        width={50}
        height={50}
      />
    </main>
  );
}
