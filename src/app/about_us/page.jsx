import AboutUs from "@/components/aboutus";
import React from "react";
import {placeholder} from "@/assets/aboutus/index.js";
import Image from 'next/image'
const Page = () => {
  const people = [
    {
      image: placeholder,
      name: "Donald Xu",
      description: "Developer",
    },
    {
      image: placeholder,
      name: "Glandon Wage",
      description: "Researcher",
    },
    {
        image: placeholder,
        name: "Kevin Kevin",
        description: "Researcher",
      },
      {
        image: placeholder,
        name: "Reign Lorenzo",
        description: "Researcher",
      },
      {
        image: placeholder,
        name: "Julia Lopez",
        description: "Researcher",
      },
      {
        image: placeholder,
        name: "Rosario Fuentes",
        description: "Researcher",
      },
  ];

  return (
    <div className="flex flex-col mt-5 align-middle items-center justify-center" >
        <div className="flex flex-row items-center ">
        <Image src="multistars.svg" alt="mutistars" width={100} height={100}/>
        <div className="text-9xl text-white font-semibold">
            ABOUT US
        </div>
        <Image src="multistars.svg" alt="mutistars" width={100} height={100}/>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 mt-4 space-y-4 space-x-4">
        {people.map((item, index) => (
        <AboutUs
          key={index}
          name={item.name}
          description={item.description}
          image={item.image}
        />
      ))}
        </div>

    </div>
  );
};

export default Page;
