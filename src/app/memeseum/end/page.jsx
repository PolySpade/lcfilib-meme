import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col mt-20 justify-center items-center">
      <div className="flex flex-row align-middle items-center">
        <Image src="/multistars.svg" alt="mutistars" width={100} height={100} />
        <h1 className="text-white text-5xl font-bold">the memeseum</h1>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row  xl:flex-row  justify-center items-center">
          <div className="flex flex-col drop-shadow-md">
            <h1 className="text-9xl text-white ">MEME</h1>
            <h1 className="text-9xl text-white">BILANG</h1>
            <h1 className="text-9xl font-semibold text-red-800">KONTRA-</h1>
            <h1 className="text-9xl font-semibold text-red-800">GAHUM</h1>
          </div>

          <hr
            className="bg-white h-96 w-0.5 mx-12 
              lg:block xl:block sm:hidden md:hidden"
          />
          <div>
            <h3 className="max-w-3xl drop-shadow-md text-white text-3xl text-justify">
              Batay sa pag-aaral na isinagawa ni Ramos (2019), madalas gumagawa
              ng meme ang mga mamamayan upang magkaroon ng katatawanan tuwing
              eleksyon. Ngunit nagiging paraan din ito upang ipamensahe sa mga
              tao na ang mga kandidatong ito ay madalas salungat sa imahe nila
              tuwing kampanya. Mula sa paglalapat ng mukha ng kandidato sa mga
              karakter sa pelikula hanggang sa paggawa ng meme mula sa kanilang
              speech, nagiging paraan ito upang ipakita at ipaalala sa mga tao
              ang mga isyung sangkot ang mga kanditatong ito katulad ng
              korupsiyon at mga iskandalo.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
// TODO: Responsive UI
export default page;
