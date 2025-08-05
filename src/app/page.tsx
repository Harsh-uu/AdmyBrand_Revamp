"use client";
import { Outfit } from "next/font/google";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={`${outfit.className} bg-[#0A0A0A] text-gray-200`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      <Toaster position="top-right" richColors />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}