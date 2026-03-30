import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-300">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between p-4">

                <h1 className="text-4xl font-bold leading-normal bg-gradient-to-r from-[#5f2eea] via-[#7b2ff7] to-[#c026d3] bg-clip-text text-transparent">
                    DigiTools
                </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="hover:text-black cursor-pointer">Products</li>
          <li className="hover:text-black cursor-pointer">Features</li>
          <li className="hover:text-black cursor-pointer">Pricing</li>
          <li className="hover:text-black cursor-pointer">Testimonials</li>
          <li className="hover:text-black cursor-pointer">FAQ</li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-5">
          <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />

          <button className="text-gray-600 font-medium hover:text-black">
            Login
          </button>

          <button className="bg-gradient-to-r from-[#5f2eea] via-[#7b2ff7] to-[#c026d3] text-white px-5 py-2 rounded-full font-medium hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-purple-300">
            Get Started
          </button>
        </div>

        {/* Mobile Right (Cart + Burger) */}
        <div className="flex items-center gap-4 md:hidden">
          <ShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer" />

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 pb-4 bg-white border-t transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-gray-700 font-medium pt-4">
          <li onClick={() => setOpen(false)}>Products</li>
          <li onClick={() => setOpen(false)}>Features</li>
          <li onClick={() => setOpen(false)}>Pricing</li>
          <li onClick={() => setOpen(false)}>Testimonials</li>
          <li onClick={() => setOpen(false)}>FAQ</li>
        </ul>

        <div className="flex flex-col gap-3 pt-4 border-t mt-4">
          <button className="text-left text-gray-600">Login</button>

          <button className="bg-gradient-to-r from-[#5f2eea] via-[#7b2ff7] to-[#c026d3] text-white py-2 rounded-full font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

// import React from "react";
// import { ShoppingCart } from "lucide-react";

// const Navbar = () => {
//     return (
//         <div className="w-full bg-white">
//             <div className="max-w-[1200px] mx-auto flex items-center justify-between p-4">

//                 <h1 className="text-4xl font-bold leading-normal bg-gradient-to-r from-[#5f2eea] via-[#7b2ff7] to-[#c026d3] bg-clip-text text-transparent">
//                     DigiTools
//                 </h1>

//                 <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
//                     <li className="hover:text-black cursor-pointer">Products</li>
//                     <li className="hover:text-black cursor-pointer">Features</li>
//                     <li className="hover:text-black cursor-pointer">Pricing</li>
//                     <li className="hover:text-black cursor-pointer">Testimonials</li>
//                     <li className="hover:text-black cursor-pointer">FAQ</li>
//                 </ul>

//                 <div className="flex items-center gap-5">

//                     <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />

//                     <button className="text-gray-600 font-medium hover:text-black">
//                         Login
//                     </button>

//                     <button className="bg-gradient-to-r from-[#5f2eea] via-[#7b2ff7] to-[#c026d3] text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;