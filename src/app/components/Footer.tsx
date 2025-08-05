"use client";
import { Syne } from "next/font/google";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const syne = Syne({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3
              className={`${syne.className} text-3xl font-bold text-white mb-4`}
            >
              ADmyBRAND
            </h3>
            <p className="text-gray-400 max-w-md">
              The tech-age solution for omnichannel advertising. Your virtual assistant for managing ATL to BTL marketing campaigns across all media channels.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                  Ad Exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>© {new Date().getFullYear()} ADmyBRAND. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;