"use client"

import React from "react";
import Image from "next/image";
import { featured_1, featured_2, featured_3, featured_4 } from "../assets/featured/index.js";
import Link from "next/link.js";

const Page = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Left Side Content */}
        <div className="p-4 flex flex-col items-left">
          <div className="flex justify-start flex-row">
            <h1 className="text-5xl sm:text-6xl md:text-8xl text-white mb-3">
              THE
            </h1>
            <Image src="/stars.svg" alt="stars" width={90} height={90} />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl text-gray-300 mb-3">
            POLITCAL
          </h1>
          <div className="flex justify-start flex-row">
            <h1 className="text-5xl sm:text-6xl md:text-8xl text-white mb-3">
              MEME
            </h1>
            <Image src="/stars.svg" alt="stars" width={90} height={90} />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl text-white mb-3">
            ARCHIVES
          </h1>
          <div className="flex justify-center my-4">
            <Image
              src="/two_trolls.svg"
              alt="trolls"
              width={500}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-end w-full pr-4">
            <h2 className="mr-2 text-white text-base sm:text-xl">
              take a glimpse of
            </h2>
            <Link href="/memesuem" className="text-gray-400 text-base sm:text-xl italic font-semibold pr-5">
              the memesuem
            </Link>
            
          </div>
          <div className="flex justify-end w-full pr-10">
            <Image src="/longright_arrow.svg" alt="arrow" width={90} height={20} />
          </div>
        </div>
        {/* Right Side Grid */}
        <div className="p-4 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Image src={featured_1} alt="featured #1" width={250} height={250} className="max-w-full h-auto" />
          <Image src={featured_2} alt="featured #2" width={250} height={250} className="max-w-full h-auto" />
          <Image src={featured_3} alt="featured #3" width={250} height={250} className="max-w-full h-auto" />
          <Image src={featured_4} alt="featured #4" width={250} height={250} className="max-w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default Page;
