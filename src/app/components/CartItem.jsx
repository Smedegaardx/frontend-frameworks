import Image from "next/image";

const cartItem = ({ product }) => {
  return (
    <div className="flex gap-5 my-6 mx-42">
      <div className="p-1 border-2 rounded-2xl border-[#284B63] ">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-hero text-3xl">{product.title}</h1>
        <p className="font-text text-2xl">{product.price} $</p>
      </div>
    </div>
  );
};

export default cartItem;
