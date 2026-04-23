import { PiShoppingCart } from "react-icons/pi";

const PaymentButton = () => {
  return (
    <div>
      <button className="bg-[#284B63] hover:bg-[#1a3a4d] text-white py-2 px-8 rounded-3xl font-text mt-2 w-full">
        Gå til betaling <PiShoppingCart className="inline ml-1" />
      </button>
    </div>
  );
};

export default PaymentButton;
