import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='flex flex-col mt-20 px-4 sm:px-8 justify-center items-center'>
      {/* Main Title */}
      <h1 className='text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center'>
        ABOUT THE
      </h1>

      {/* Subtitle with Image */}
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-4'>
        <h1 className='italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gray-300 font-bold text-center'>
          MEMESEUM
        </h1>
        <Image
          src="/multistars.svg"
          alt="multistars"
          width={80}
          height={80}
          className='w-16 sm:w-20 md:w-24 h-auto'
        />
      </div>

      {/* Description */}
      <div className='flex justify-center items-center mt-8 px-4'>
        <h1 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-justify max-w-4xl'>
          Ang MEMESEUM ay isang espasyong digital na nagpapakita ng malikhaing gamit ng mga Pilipinong meme bilang anyo ng komentaryo sa kultura, lipunan, at politika. Tampok dito ang iba't ibang uri ng meme na sumasalamin sa makabagong paraan ng komunikasyon at pagpapahayag ng opinyon sa panahon ng internet.
        </h1>
      </div>
    </div>
  )
}

export default Page
