"use client";
import { Syne } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiShield,
  FiGlobe,
  FiZap,
  FiHeart,
  FiStar,
  FiCode,
} from "react-icons/fi";

const syne = Syne({ subsets: ["latin"] });

const features = [
    {
        icon: <FiShield />,
        title: "Analytics-Driven Intelligence",
        description:
            "Advanced big data analytics provide deep insights into campaign performance across all media channels for optimal ROI.",
    },
    {
        icon: <FiGlobe />,
        title: "Omnichannel Reach",
        description:
            "Seamlessly manage campaigns across outdoor media, influencer, mobile, radio, TV, and newspaper from one platform.",
    },
    {
        icon: <FiZap />,
        title: "Programmatic Automation",
        description:
            "Innovative programmatic advertising technology automates media buying and placement in real-time for maximum efficiency.",
    },
    {
        icon: <FiHeart />,
        title: "ATL to BTL Integration",
        description:
            "Unified campaign management spanning Above The Line to Below The Line marketing initiatives with seamless execution.",
    },
    {
        icon: <FiStar />,
        title: "Smart Ad Exchange",
        description:
            "Proprietary ad-exchange technology connects brands with premium media inventory across all advertising channels.",
    },
    {
        icon: <FiCode />,
        title: "Virtual Assistant",
        description:
            "AI-powered virtual assistant empowers marketing professionals to launch campaigns in just a few clicks within minutes.",
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

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <MotionComponent>
          <div className="text-center mb-16">
            <h2
              className={`${syne.className} text-4xl md:text-5xl font-bold text-white`}
            >
              Why Choose ADmyBRAND?
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              The tech-age solution disrupting traditional media advertisement placement with innovative programmatic advertising.
            </p>
          </div>
        </MotionComponent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MotionComponent key={index}>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-indigo-400/50 hover:-translate-y-2">
                <div className="text-4xl text-indigo-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </MotionComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;