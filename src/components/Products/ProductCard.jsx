import React, { useState } from "react";
import Icon from "../Icons/Icon";
import { toast } from "react-toastify";

const tagStyles = {
  "best-seller": "bg-orange-100 text-orange-600",
  popular: "bg-purple-100 text-purple-600",
  new: "bg-green-100 text-green-600",
};

const ProductCard = ({ product, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const handleSubscription = () => {
    setIsSubscribed(true)

    const isFound = carts.find(item => item.id === product.id)

    if (isFound) {
      toast.error("Item already in cart")
      return
    }
    setCarts([...carts, product])
    toast.success("Item Added To Cart")
  }
  return (
    <div className="relative bg-white border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 w-full max-w-sm">

      {product.tag && (
        <span
          className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium ${tagStyles[product.tagType]}`}
        >
          {product.tag}
        </span>
      )}

      <Icon name={product.icon} size={26} className="w-12 h-12 mb-4" />

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>

      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        {product.description}
      </p>

      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-900">
          ${product.price}
        </span>
        <span className="text-sm text-gray-500">
          /{product.period === "monthly" ? "Mo" : "One-Time"}
        </span>
      </div>

      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      <button onClick={handleSubscription} className={`w-full py-3 rounded-full ${isSubscribed ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-600 to-purple-600'}  text-white font-medium hover:opacity-90 transition`}>
        {isSubscribed ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;