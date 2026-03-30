import React from "react";
import Icon from "../Icons/Icon";

const tagStyles = {
  "best-seller": "bg-orange-100 text-orange-600",
  popular: "bg-purple-100 text-purple-600",
  new: "bg-green-100 text-green-600",
};

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 w-full max-w-sm">

      {/* TAG */}
      {product.tag && (
        <span
          className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium ${tagStyles[product.tagType]}`}
        >
          {product.tag}
        </span>
      )}

      {/* ICON */}
      <Icon name={product.icon} size={26} className="w-12 h-12 mb-4" />

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        {product.description}
      </p>

      {/* PRICE */}
      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-900">
          ${product.price}
        </span>
        <span className="text-sm text-gray-500">
          /{product.period === "monthly" ? "Mo" : "One-Time"}
        </span>
      </div>

      {/* FEATURES */}
      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-90 transition">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;