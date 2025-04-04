import posts from "@/assets/data/types.json";
import TypesofMeme from "@/components/TypesofMeme";
import typeDataset from "@/assets/data/types/index.js";
import MemeFrame from "@/components/MemeFrame";
import { home } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { ImArrowLeft, ImArrowRight, ImMenu } from "react-icons/im";
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  // Destructure params without awaiting, since params is not a promise.
  const { slug } = await params;
  let end = false;
  let start = false;
  if (slug == "type-13") {
    end = true;
  }
  if (slug == "type-1") {
    start = true;
  }
  const match = slug.match(/(\D+)-(\d+)/);
  const number = parseInt(match[2], 10);
  const next_slug = number + 1;
  const prev_slug = number - 1;

  // Find the matching post in your posts data.
  const item = posts.find((item) => item.slug === slug);
  if (!item) return <div>Item not found</div>;

  const selectedType = typeDataset.find((typeItem) => typeItem.type === slug);
  const data = selectedType.data;

  return (
    <div className="relative flex flex-col h-screen">
      {/* Other components like Navbar can go here */}
      <article className="relative flex-1 bg-red-900 p-4 overflow-auto">
        {/* Nav Buttons */}
        <div className="flex flex-row justify-between items-center px-4 mb-4">
  {/* Left: Home + Menu */}
  <div className="flex items-center">
    <Link href="/memesuem">
      <div className="tooltip tooltip-bottom" data-tip="Home">
        <Image src={home} alt="home icon" width={50} height={50} />
      </div>
    </Link>
    <Link href="/memesuem/types" className="ml-4">
      <div className="tooltip tooltip-bottom" data-tip="Meme Types">
        <ImMenu size={30} className="text-white" />
      </div>
    </Link>
  </div>

  {/* Right: Navigation Arrows */}
  <div className="flex items-center gap-4">
    {!start && (
      <Link
        href={`/memesuem/types/type-${prev_slug}`}
        className="transition-transform duration-300 ease-in-out hover:-translate-x-2"
      >
        <ImArrowLeft size={60} className="text-yellow-100" />
      </Link>
    )}
    {!end ? (
      <Link
        href={`/memesuem/types/type-${next_slug}`}
        className="transition-transform duration-300 ease-in-out hover:translate-x-2"
      >
        <ImArrowRight size={60} className="text-yellow-100" />
      </Link>
    ) : (
      <Link
        href="/memesuem/end"
        className="transition-transform duration-300 ease-in-out hover:translate-x-2"
      >
        <ImArrowRight size={60} className="text-yellow-100" />
      </Link>
    )}
  </div>
</div>

        {/* Title */}
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-yellow-400 mb-8 text-center">
            {item.meme_type}
          </h1>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {data ? (
            data.map((dataItem, index) => (
              <MemeFrame
                key={index}
                framed_image={dataItem.framed_image}
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
