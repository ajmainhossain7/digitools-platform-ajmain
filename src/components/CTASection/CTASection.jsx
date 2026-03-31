const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-25 text-center text-white">

      <div className="mx-auto px-4">

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <button className="px-6 py-2 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-300 transition cursor-pointer">
            Explore Products
          </button>

          {/* Outline Button  */}
          <button className="px-6 py-2 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-purple-600 transition cursor-pointer">
            View Pricing
          </button>

        </div>


        <p className="mt-6 text-sm text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default CTASection;