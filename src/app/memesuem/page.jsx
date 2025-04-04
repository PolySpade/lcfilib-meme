import { museum_bg } from "@/assets/background";
import React from "react";
import Image from "next/image";
import { ImArrowRight } from "react-icons/im";
import Link from "next/link";

const page = () => {
  return (
    <div className="relative h-screen bg-red-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="background"
          src={museum_bg}
          fill
          className="object-cover"
          priority
        />
      </div>

    
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <h1 className="italic text-5xl sm:text-6xl md:text-8xl text-yellow-500 font-bold">
              the memesuem
            </h1>
            <Image
              src="/multistars.svg"
              alt="multistars"
              width={60}
              height={60}
              className="md:w-[100px] md:h-[100px]"
            />
          </div>

          <p className="text-xl sm:text-2xl md:text-4xl text-yellow-500 mb-10 max-w-md md:max-w-full">
            Ang Pagtatanghal ng Iba’t Ibang Klase ng Political Meme
          </p>
          <div className="flex justify-end">
          <Link href="/memesuem/types/type-1">
            <div className="transition-transform duration-300 ease-in-out hover:-translate-x-2">
              <ImArrowRight size={90} className="text-yellow-100" />
            </div>
          </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
