import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
    return (
        <div className="w-full bg-white">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between p-4">

                <h1 className="text-4xl font-bold leading-normal bg-gradient-to-r from-[#5f2eea] via-[#7b2ff7] to-[#c026d3] bg-clip-text text-transparent">
                    DigiTools
                </h1>

                <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                    <li className="hover:text-black cursor-pointer">Products</li>
                    <li className="hover:text-black cursor-pointer">Features</li>
                    <li className="hover:text-black cursor-pointer">Pricing</li>
                    <li className="hover:text-black cursor-pointer">Testimonials</li>
                    <li className="hover:text-black cursor-pointer">FAQ</li>
                </ul>

                <div className="flex items-center gap-5">

                    <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />

                    <button className="text-gray-600 font-medium hover:text-black">
                        Login
                    </button>

                    <button className="bg-gradient-to-r from-[#5f2eea] via-[#7b2ff7] to-[#c026d3] text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;