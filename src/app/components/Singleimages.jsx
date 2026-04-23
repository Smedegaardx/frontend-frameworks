import Image from "next/image";

const singleimages = ({ product }) => {
  return (
    <div className="grid max-w-xl bg-[#F4F9E9] rounded-xl">
      <div className="bg-[#284B63] rounded-t-xl h-100 flex justify-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          height={400}
          width={400}
        ></Image>
      </div>
      <div className="flex my-2 p-4 gap-4">
        {product.images.map((element, index) => (
          <div key={index} className="bg-[#284B63] rounded-2xl h-25 w-25">
            <Image src={element} alt={product.title} height={100} width={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default singleimages;
