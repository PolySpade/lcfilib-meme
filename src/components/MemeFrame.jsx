"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { plate } from '@/assets/icons';
import { ImCross } from "react-icons/im";

const MemeFrame = ({ image, slug, name, short_desc, framed_image }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        {/* Meme image */}
        <div className="mb-10">
          <Image
            src={framed_image}
            alt={slug}
            width={320}
            height={320}
            className="object-contain"
          />
        </div>
        {/* Plate button */}
        <div className="tooltip" data-tip={name}>
          

        <button onClick={handleOpenModal} className="cursor-pointer hover:animate-pulse focus:outline-none">
          <Image
            src={plate}
            alt="Plate Frame"
            width={280}
            height={150}
            className="object-contain"
          />
        </button>
        </div>
      </div>

      {/* Modal overlay */}
      {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div 
      className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"
      onClick={handleCloseModal}
    ></div>

    {/* Modal content */}
    <div className="border-8 border-solid border-yellow-500 drop-shadow-xl relative z-60 bg-red-900 rounded-lg p-8 max-w-2xl mx-4 flex flex-col items-center animate-zoomIn">
      <button
        onClick={handleCloseModal}
        className="cursor-pointer absolute top-2 right-2 text-black font-bold"
      >
        <ImCross size={24} />
      </button>
      
      <div className="mb-4 flex-shrink-0">
        <Image
          src={image}
          alt={slug}
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className='ml-12 flex flex-col max-w-lg'>
        <h2 className="drop-shadow-lg text-4xl text-white font-bold mb-4">{name}</h2>
        <p className="drop-shadow-sm text-gray-200 text-lg">{short_desc}</p>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default MemeFrame;
