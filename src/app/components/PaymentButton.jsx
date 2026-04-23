import Link from "next/link";
import { PiShoppingCart } from "react-icons/pi";

const PaymentButton = ({ cart }) => {
  const cartItems = cart.map((item) => item.id);

  return (
    <Link href={`/payment?items=${cartItems}`}>
      <button className="bg-[#284B63] hover:bg-[#1a3a4d] text-white py-2 px-8 rounded-3xl font-text mt-2 w-full cursor-pointer">
        Gå til betaling <PiShoppingCart className="inline ml-1" />
      </button>
    </Link>
  );
};

export default PaymentButton;
