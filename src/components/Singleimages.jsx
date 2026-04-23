import Image from "next/image";

const singleimages = () => {
  return (
    <div className="grid max-w-xl bg-[#F4F9E9] rounded-xl ">
      <div className="bg-green-300 rounded-t-xl h-100"></div>
      <div className="flex my-2 p-4 gap-4">
        <div className="bg-green-300 rounded-2xl h-20 w-25"></div>
        <div className="bg-green-300 rounded-2xl h-20 w-25"></div>
        <div className="bg-green-300 rounded-2xl h-20 w-25"></div>
      </div>
    </div>
  );
};

export default singleimages;
