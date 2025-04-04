import Image from 'next/image'
import React from 'react'


const AboutUs = ({image,name,description}) => {

  return (
    <div className="flex flex-row">
      <div className="w-50 h-50 overflow-clip rounded-full flex justify-center items-center">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
        />
      </div>
      <div className="ml-5 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-white drop-shadow-2xl">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default AboutUs