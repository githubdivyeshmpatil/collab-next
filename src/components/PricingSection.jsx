import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    highlight: "Perfect for individuals and small teams getting started.",
    features: [
      "Up to 5 team members",
      "2 GB cloud storage",
      "Basic integrations",
      "Email support",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    highlight: "Advanced tools for growing teams and businesses.",
    features: [
      "Up to 50 team members",
      "50 GB cloud storage",
      "All integrations (Slack, Drive, Zoom, etc.)",
      "Priority chat support",
    ],
    buttonText: "Upgrade Now",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    highlight: "Tailored solutions for large organizations.",
    features: [
      "Unlimited team members",
      "1 TB+ storage options",
      "Custom integrations & API access",
      "Dedicated account manager & 24/7 support",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Pricing Plans
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the plan that fits your team’s needs — scale seamlessly as you grow.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 border
              ${plan.popular ? "border-indigo-600 shadow-xl scale-[1.03] bg-indigo-50" : "border-gray-200 bg-white"}
            `}
          >
            {plan.popular && (
              <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {plan.name}
            </h3>
            <p className="text-gray-600 text-sm mb-6">{plan.highlight}</p>

            <div className="text-4xl font-bold text-gray-900 mb-2">
              {plan.price}
              <span className="text-base font-medium text-gray-500">
                {plan.period}
              </span>
            </div>

            {/* Features */}
            <ul className="text-gray-700 text-sm text-left space-y-3 mb-8 mt-4 w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`px-6 py-3 rounded-xl font-medium transition-all w-full
                ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }
              `}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
