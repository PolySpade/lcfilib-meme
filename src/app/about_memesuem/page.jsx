import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-col mt-20 justify-center items-center'>
        <h1 className='text-white text-9xl font-bold'>
            ABOUT THE
        </h1>
        <div className='flex flex-row align-middle items-center'>

        <h1 className='italic text-9xl text-gray-300 font-bold'>
        MEMESUEM
        </h1>
        <Image src="multistars.svg" alt="mutistars" width={100} height={100}/>
        
        </div>
        <div className='flex flex-row'>
        <div className='flex justify-center items-center'>
        <h1 className='text-3xl text-white text-justify max-w-2xl '>
        Ang MEMESUEM ay isang espasyong digital na nagpapakita ng malikhaing gamit ng mga Pilipinong meme bilang anyo ng komentaryo sa kultura, lipunan, at politika. Tampok dito ang iba't ibang uri ng meme na sumasalamin sa makabagong paraan ng komunikasyon at pagpapahayag ng opinyon sa panahon ng internet.
        </h1>
        </div>
        </div>




    </div>
  )
}
// TODO: Responsive UI
export default page