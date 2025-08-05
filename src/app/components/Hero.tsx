"use client";
import { Syne } from "next/font/google";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const syne = Syne({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center pt-24">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${syne.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight`}
        >
          The Future of
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
            {" "}
            Omnichannel Advertising
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Analytics-driven ad-exchange for outdoor media, influencer, mobile, radio, TV and newspaper. Your virtual assistant for managing ATL to BTL marketing campaigns in just a few clicks.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300">
            Launch Campaign <FiArrowRight className="inline-block ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;