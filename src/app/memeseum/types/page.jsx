import React from 'react'
import posts from '@/assets/data/types.json';
import Link from 'next/link';
import TypesofMeme from '@/components/TypesofMeme';

const page = () => {
  return (
    <div className='flex flex-col mt-12'>
      {posts.map( (item) => 
        <TypesofMeme key={item.slug} slug={item.slug} meme_type={item.meme_type} type_desc={item.type_desc}/>
      )}
    </div>
  )
}

export default page