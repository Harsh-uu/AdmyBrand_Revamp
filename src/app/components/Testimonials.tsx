"use client";
import { useState } from "react";
import Image from "next/image";
import { Syne } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const syne = Syne({ subsets: ["latin"] });

const testimonials = [
    {
        quote:
            "ADmyBRAND revolutionized our advertising strategy. We saw 40% better ROI across all channels within the first quarter.",
        name: "Sarah Johnson",
        title: "Marketing Director, TechCorp",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
        quote:
            "The programmatic automation saved us countless hours. Managing campaigns across TV, digital, and outdoor has never been easier.",
        name: "Michael Zhang",
        title: "CMO, RetailPlus",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
        quote:
            "Finally, a true virtual assistant for marketers. Launching omnichannel campaigns in minutes instead of weeks is a game-changer.",
        name: "Lisa Rodriguez",
        title: "VP Marketing, GlobalBrands",
        image:
            "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=100&q=80",
    },
];

const MotionComponent = ({ children }: { children: React.ReactNode }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <MotionComponent>
          <div className="text-center mb-16">
            <h2
              className={`${syne.className} text-4xl md:text-5xl font-bold text-white`}
            >
              Trusted by Marketing Professionals
            </h2>
          </div>
        </MotionComponent>
        <MotionComponent>
          <div className="relative max-w-3xl mx-auto  rounded-2xl ">
            <div className="absolute inset-0 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-lg"></div>
            <div className="relative p-8 md:p-12 min-h-[300px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-6"
                  />
                  <p className="text-xl md:text-2xl text-white italic leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <p className="mt-6 text-lg font-bold text-indigo-400">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <FiChevronRight />
            </button>
          </div>
        </MotionComponent>
      </div>
    </section>
  );
};

export default Testimonials;