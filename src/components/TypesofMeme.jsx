import Link from 'next/link';
import React from 'react';

const TypesofMeme = ({ slug, meme_type, type_desc }) => {
  return (
    <div className="flex flex-row justify-center mb-3">
      <div className="tooltip tooltip-top" data-tip={type_desc}>
        <Link
          className="font-semibold text-4xl text-white drop-shadow-md"
          href={`/memesuem/types/${slug}`}
        >
          {meme_type}
        </Link>
      </div>
    </div>
  );
};

export default TypesofMeme;
