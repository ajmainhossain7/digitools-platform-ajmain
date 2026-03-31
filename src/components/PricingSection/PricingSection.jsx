const pricingPlans = [
  {
    name: "Starter",
    desc: "Perfect for getting started",
    price: 0,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month"
    ],
    button: "Get Started Free",
    highlight: false
  },
  {
    name: "Pro",
    desc: "Best for professionals",
    price: 29,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics"
    ],
    button: "Start Pro Trial",
    highlight: true
  },
  {
    name: "Enterprise",
    desc: "For teams and businesses",
    price: 99,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding"
    ],
    button: "Contact Sales",
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <div className="py-20">

      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-base-content/60 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border p-8 shadow-sm ${
              plan.highlight
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none scale-105"
                : "bg-base-200 border-base-200"
            }`}
          >

            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="badge badge-warning text-xs font-medium px-3 py-1">
                  Most Popular
                </span>
              </div>
            )}

            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className={`text-sm mt-1 ${
              plan.highlight ? "text-white/80" : "text-base-content/60"
            }`}>
              {plan.desc}
            </p>

            <div className="mt-5">
              <span className="text-3xl font-bold">
                ${plan.price}
              </span>
              <span className={`text-sm ml-1 ${
                plan.highlight ? "text-white/80" : "text-base-content/60"
              }`}>
                /Month
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg
                    className={`w-4 h-4 ${
                      plan.highlight ? "text-white" : "text-success"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                className={`btn w-full font-semibold rounded-full ${
                  plan.highlight
                    ? "bg-white text-purple-600 hover:bg-gray-100 border-none"
                    : "text-white bg-gradient-to-r from-indigo-600 to-purple-600"
                }`}
              >
                {plan.button}
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default PricingSection;