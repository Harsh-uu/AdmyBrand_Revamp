"use client";
import { Syne } from "next/font/google";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

const syne = Syne({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="fixed w-full z-50 backdrop-blur-sm bg-black/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Image src="/web_logo.svg" alt="Logo" width={120} height={40} />
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="hover:text-indigo-400 transition-colors"
          >
            Platform
          </a>
          <a
            href="#pricing"
            className="hover:text-indigo-400 transition-colors"
          >
            Solutions
          </a>
          <a
            href="#testimonials"
            className="hover:text-indigo-400 transition-colors"
          >
            Success Stories
          </a>
        </div>
        <button className="hidden sm:block px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition-all duration-300">
          Start Campaign
        </button>
        <button className="block sm:hidden p-2 text-white">
          <MdMenu className="size-6" />
        </button>
      </nav>
    </header>
  );
};

export default Header;