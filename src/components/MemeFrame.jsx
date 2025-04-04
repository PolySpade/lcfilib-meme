"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { plate } from '@/assets/icons';
import { ImCross } from "react-icons/im";

const MemeFrame = ({ image, slug, name, short_desc, typeSlug }) => {
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
            src={image}
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
          {/* Blurred background overlay; click to close */}
          <div 
            className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>

          {/* Modal content */}
          <div className="border-8 border-solid border-black drop-shadow-lg relative z-60 bg-white rounded-lg p-6 max-w-md w-full mx-4 flex flex-col items-center animate-zoomIn">
            <button
              onClick={handleCloseModal}
              className="cursor-pointer absolute top-2 right-2 text-black font-bold"
            >
              <ImCross size={20}/>
            </button>
            <div className="mb-4">
              <Image
                src={image}
                alt={slug}
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
            <h2 className="drop-shadow-lg text-3xl text-black font-bold text-center mb-4">{name}</h2>
            <p className="drop-shadow-sm text-center text-gray-500">{short_desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemeFrame;
