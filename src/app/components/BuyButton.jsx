import { FiPlus } from "react-icons/fi";

const BuyButton = ({ onAddToCart }) => {
  return (
    <div>
      <button
        onClick={onAddToCart}
        className="bg-none border border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-white py-2 px-4 rounded-3xl font-text mt-2 cursor-pointer"
      >
        Læg i kurv <FiPlus className="inline ml-1" />
      </button>
    </div>
  );
};

export default BuyButton;
