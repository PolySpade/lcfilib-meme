import posts from "@/assets/data/types.json";
import TypesofMeme from "@/components/TypesofMeme";
import typeDataset from "@/assets/data/types/index.js";
import MemeFrame from "@/components/MemeFrame";
import { home } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  // Destructure params without awaiting, since params is not a promise.
  const { slug } = await params;

  // Find the matching post in your posts data.
  const item = posts.find((item) => item.slug === slug);
  if (!item) return <div>Item not found</div>;

  const selectedType = typeDataset.find((typeItem) => typeItem.type === slug);
  const data = selectedType.data;

  return (
<div className="flex flex-col h-screen">
  {/* Other components like Navbar can go here */}
  <article className="flex-1 bg-red-900 p-4 overflow-auto">
    <Link className="absolute opacity-80" href="/memeseum/types">
      <Image src={home} alt="home icon" width={50} height={50} />
    </Link>
    <div className="flex flex-row justify-center">
      <h1 className="text-5xl font-semibold text-yellow-400 mb-8">
        {item.meme_type}
      </h1>
    </div>
    <div className="grid grid-cols-5 gap-3">
      {data ? (
        data.map((dataItem, index) => (
          <MemeFrame
            key={index}
            image={dataItem.image}
            slug={dataItem.slug}
            typeSlug={slug}
            name={dataItem.name}
            short_desc={dataItem.short_description}
          />
        ))
      ) : (
        <div>Missing Data</div>
      )}
    </div>
  </article>
</div>

  );
}
