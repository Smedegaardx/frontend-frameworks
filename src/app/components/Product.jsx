import Image from "next/image";
import BuyButton from "./BuyButton";

const Product = ({ title, price, stock, thumbnail, onAddToCart }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-2xl">
      <div className="relative w-full h-48">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-contain rounded-2xl"
        />
      </div>
      <h2 className="font-hero">{title}</h2>
      <p className="font-text">Price: ${price.toFixed(2)}</p>
      {/* <p>Stock: {stock}</p> */}
      <BuyButton onAddToCart={onAddToCart} />
    </div>
  );
};

export default Product;
