import Link from 'next/link';
import React from 'react';

const TypesofMeme = ({ slug, meme_type, type_desc }) => {
  return (
    <div className="flex flex-row justify-center mb-3">
      <div className="flex flex-col justify-center group items-center ">
        <Link className="font-semibold text-4xl text-white drop-shadow-md" href={"/memeseum/types/"+slug}>
          {meme_type}
        </Link>
        <div className="flex justify-center hidden max-w-96 group-hover:block">
        <div className="divider divider-neutral mb-1"></div>
          {type_desc}
          <div className="divider divider-neutral mt-1"></div>
        </div>
      
      </div>
    </div>
  );
};

export default TypesofMeme;
