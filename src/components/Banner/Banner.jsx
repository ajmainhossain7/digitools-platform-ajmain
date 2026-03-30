import { Play } from "lucide-react";
import bannerImg from "../../assets/banner.png";

export default function Banner() {
  return (
    <section className="w-full">
      <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium w-fit">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl leading-[1.2] font-bold text-gray-800">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 max-w-md">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore Products
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            
            {/* Primary Button */}
            <button className="bg-gradient-to-r from-[#5f2eea] via-[#7b2ff7] to-[#c026d3] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition cursor-pointer">
              Explore Products
            </button>

            {/* Secondary Button */}
            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-500 text-purple-600 font-medium hover:bg-purple-50 transition cursor-pointer">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="banner"
            className="w-full max-w-[420px] rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}