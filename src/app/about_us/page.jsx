import AboutUs from "@/components/AboutUs";
import React from "react";
import { placeholder } from "@/assets/aboutus/index.js";
import Image from "next/image";

const Page = () => {
  const people = [
    { image: placeholder, name: "Donald Xu", description: "Developer" },
    { image: placeholder, name: "Glandon Wage", description: "Researcher" },
    { image: placeholder, name: "Kevin Kevin", description: "Researcher" },
    { image: placeholder, name: "Reign Lorenzo", description: "Researcher" },
    { image: placeholder, name: "Julia Lopez", description: "Researcher" },
    { image: placeholder, name: "Rosario Fuentes", description: "Researcher" },
  ];

  return (
    <div className="flex flex-col mt-10 px-4 sm:px-6 lg:px-12 items-center justify-center">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Image src="/multistars.svg" alt="multistars" width={60} height={60} className="w-12 sm:w-16 h-auto" />
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-semibold text-center">ABOUT US</h1>
        <Image src="/multistars.svg" alt="multistars" width={60} height={60} className="w-12 sm:w-16 h-auto" />
      </div>

      {/* People Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-10">
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
