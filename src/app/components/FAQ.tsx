"use client";
import { useState } from "react";
import { Syne } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronDown } from "react-icons/fi";

const syne = Syne({ subsets: ["latin"] });

const faqItems = [
    {
        question: "What is omnichannel advertising?",
        answer:
            "Omnichannel advertising is a unified approach that integrates all advertising channels - outdoor media, influencer, mobile, radio, TV, and newspaper - into one cohesive campaign strategy. ADmyBRAND makes this seamless with our analytics-driven ad-exchange platform.",
    },
    {
        question: "How does programmatic advertising work?",
        answer:
            "Our programmatic technology automates the buying and placement of ads in real-time using big data analytics. This ensures optimal ad placement, better targeting, and maximum ROI across all media channels without manual intervention.",
    },
    {
        question: "What is ATL to BTL campaign management?",
        answer:
            "ATL (Above The Line) refers to mass media advertising like TV, radio, and newspapers, while BTL (Below The Line) includes targeted marketing like outdoor media and digital campaigns. Our platform seamlessly manages both types from a single dashboard.",
    },
    {
        question: "How quickly can I launch a campaign?",
        answer:
            "With our AI-powered virtual assistant, you can launch comprehensive omnichannel campaigns in just a few clicks within minutes. The platform automates media planning, buying, and optimization across all channels simultaneously.",
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

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg">
      <button
        className="w-full flex justify-between items-center p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-300">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white/5">
      <div className="container mx-auto px-6">
        <MotionComponent>
          <div className="text-center mb-16">
            <h2
              className={`${syne.className} text-4xl md:text-5xl font-bold text-white`}
            >
              Frequently Asked Questions
            </h2>
          </div>
        </MotionComponent>
        <MotionComponent>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </MotionComponent>
      </div>
    </section>
  );
};

export default FAQ;