import { toast } from "react-toastify";
import Icon from "../Icons/Icon";
import { X, ShoppingCart } from "lucide-react";

const Cart = ({ carts, setCarts }) => {
  const total = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.info("Payment Success 🎉");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.error("Item Removed ☹️");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-300 rounded-2xl p-6 shadow-sm my-20">
      
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Your Cart
      </h2>
      {carts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <ShoppingCart size={48} strokeWidth={1.5} />
          <p className="mt-4 text-sm">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <Icon name={item.icon} size={18} className="w-10 h-10" />

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(item)}
                  className="text-sm text-pink-500 hover:underline flex items-center gap-1"
                >
                  <X size={14} />
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 mb-4">
            <span className="text-sm text-gray-500">Total:</span>
            <span className="text-lg font-semibold text-gray-900">
              ${total}
            </span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;