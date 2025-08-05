"use client";
import { useState } from "react";
import { Syne } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiLoader, FiSend } from "react-icons/fi";
import { toast } from "sonner";

const syne = Syne({ subsets: ["latin"] });

// Reusable animation component
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

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors = { name: "", email: "", message: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is not valid.";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setIsSubmitting(false);
            setFormData({ name: "", email: "", message: "" });
            toast.success("Message sent! We'll get back to you soon.");
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <MotionComponent>
                    <div className="text-center mb-16">
                        <h2
                            className={`${syne.className} text-4xl md:text-5xl font-bold text-white`}
                        >
                            Get in Touch
                        </h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                            Have a question or a proposal? We'd love to hear from you.
                        </p>
                    </div>
                </MotionComponent>
                <MotionComponent>
                    <div className="max-w-2xl mx-auto bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.name
                                                ? "border-red-500/50 focus:ring-red-500/50"
                                                : "border-white/10 focus:ring-indigo-500/50"
                                            }`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-sm mt-2">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.email
                                                ? "border-red-500/50 focus:ring-red-500/50"
                                                : "border-white/10 focus:ring-indigo-500/50"
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-sm mt-2">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 min-h-36 max-h-72 border text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.message
                                                ? "border-red-500/50 focus:ring-red-500/50"
                                                : "border-white/10 focus:ring-indigo-500/50"
                                            }`}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-400 text-sm mt-2">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-6 bg-indigo-500 text-white font-bold rounded-full text-lg hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <FiLoader className="animate-spin mr-2" />
                                    ) : (
                                        <FiSend className="mr-2" />
                                    )}
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </MotionComponent>
            </div>
        </section>
    );
};

export default Contact;