"use client";
import { Syne } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCheckCircle } from "react-icons/fi";

const syne = Syne({ subsets: ["latin"] });

const pricingTiers = [
    {
        name: "Starter",
        price: "$499",
        features: [
            "Basic omnichannel advertising",
            "Standard analytics dashboard",
            "Email support",
            "Up to 5 campaigns/month",
        ],
        cta: "Start Free Trial",
    },
    {
        name: "Professional",
        price: "$1,999",
        features: [
            "All Starter features",
            "Advanced analytics & insights",
            "Programmatic ad automation",
            "Priority support",
            "Unlimited campaigns",
            "Custom reporting",
        ],
        cta: "Get Professional",
        featured: true,
    },
    {
        name: "Enterprise",
        price: "Contact Us",
        features: [
            "All Professional features",
            "Dedicated account manager",
            "Custom integrations",
            "White-label solutions",
            "Advanced API access",
            "24/7 premium support",
        ],
        cta: "Contact Sales",
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

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-white/5">
      <div className="container mx-auto px-6">
        <MotionComponent>
          <div className="text-center mb-16">
            <h2
              className={`${syne.className} text-4xl md:text-5xl font-bold text-white`}
            >
              Choose Your Solution
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Flexible plans for every marketing professional. From startups to enterprise brands, we have the right solution for your advertising needs.
            </p>
          </div>
        </MotionComponent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {pricingTiers.map((tier, index) => (
            <MotionComponent key={index}>
              <div
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  tier.featured
                    ? "bg-indigo-500/10 border-indigo-500/50"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {tier.featured && (
                  <div className="text-center mb-4">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-3xl font-bold text-white text-center mb-2">
                  {tier.name}
                </h3>
                <p className="text-5xl font-bold text-white text-center mb-6">
                  {tier.price}
                  {tier.price.startsWith("$") && (
                    <span className="text-lg text-gray-400">/ mo</span>
                  )}
                </p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <FiCheckCircle className="text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                    tier.featured
                      ? "bg-indigo-500 text-white hover:bg-indigo-600"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </MotionComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;