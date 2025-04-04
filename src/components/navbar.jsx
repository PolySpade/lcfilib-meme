'use client';
import { useState } from 'react';
import Link from 'next/link'; // or from 'react-router-dom' if using React Router
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="navbar bg-black shadow-sm px-4 py-2">
        {/* Logo and Title */}
        <div className="flex-1 flex items-center space-x-2">
          <Image src="/logo_stars.svg" alt="logo" width={32} height={32} />
          <Link className="font-bold text-4xl whitespace-nowrap text-white" href="/">
            the memeseum
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-none hidden md:flex space-x-4">
          <Link href="/"className="btn bg-white px-10 text-black rounded-lg btn-ghost hover:bg-gray-500 hover:text-white">Home</Link>
          <Link href="/memeseum" className="btn bg-white px-10 text-red-950 font-bold italic rounded-lg btn-ghost hover:bg-gray-500 hover:text-red-900">The memeseum</Link>
          <Link href="/about_memeseum" className="btn bg-white px-10 text-black rounded-lg text-sm btn-ghost hover:bg-gray-500 hover:text-white">About the memeseum</Link>
          <Link href="/about_us" className="btn bg-white px-10 text-black rounded-lg btn-ghost hover:bg-gray-500 hover:text-white">About Us</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex-none md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-square btn-ghost"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <hr className="bg-white h-0.5 w-full" />

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-800">
            Home
          </Link>
          <Link href="/memeseum" className="block px-4 py-2 hover:bg-gray-800">
            The memeseum
          </Link>
          <Link href="/about_memeseum" className="block px-4 py-2 hover:bg-gray-800">
            About the memeseum
          </Link>
          <Link href="/about_us" className="block px-4 py-2 hover:bg-gray-800">
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
}
