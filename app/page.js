import Image from "next/image";
import bg from "../public/bg.png";
export default function Home() {
  return (
    <div className=" h-screen  homepage flex justify-center items-center">
      <Image src={bg} alt="bg-image" />
      {/* <div className="text-center w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 server"> */}
      <div className="text-center absolute  server">
        <h1 className="lg:text-5xl my-8 sm:text-sm md:text-4xl">
          Expole food from around the world
        </h1>
        <a
          className="shadow-gray-50 bg-gray-300 rounded md:text-xl sm:text-sm py-2 px-4 cursor-pointer hover:bg-blue-500 hover:text-white"
          href="/types">
          List of Cuisines
        </a>
      </div>
    </div>
  );
}
