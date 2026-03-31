import userIcon from "../../assets/user.png";
import productIcon from "../../assets/package.png";
import rocketIcon from "../../assets/rocket.png";

const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: productIcon
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: rocketIcon
  }
];

const StepsSection = () => {
  return (
    <div className="py-20  bg-base-200">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-5xl font-bold">
          Get Started In 3 Steps
        </h2>
        <p className="text-base-content/60 mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-base-100 rounded-2xl border border-base-200 shadow-sm p-10 text-center mb-10"
          >
            
            <div className="absolute top-4 right-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] text-white text-sm font-semibold">
                {step.id}
              </span>
            </div>

            <div className="w-20 h-20 mt-12 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-5">
              <img src={step.icon} alt={step.title} className="w-10 h-10" />
            </div>

            <h3 className="text-xl font-semibold">
              {step.title}
            </h3>

            <p className="text-sm text-base-content/60 mt-5 mb-10 leading-relaxed">
              {step.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default StepsSection;