import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#5f2eea] via-[#7b2ff7] to-[#c026d3] py-10">
      <div className="max-w-5xl mx-auto flex justify-between items-center text-white text-center">
        
        {/* Item 1 */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl leading-[1.2] font-bold">50K+</h2>
          <p className="text-sm md:text-lg mt-2 opacity-80">Active Users</p>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-white opacity-30"></div>

        {/* Item 2 */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl leading-[1.2] font-bold">200+</h2>
          <p className="text-sm md:text-lg mt-2 opacity-80">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-white opacity-30"></div>

        {/* Item 3 */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl leading-[1.2] font-bold">4.9</h2>
          <p className="text-sm md:text-lg mt-2 opacity-80">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;