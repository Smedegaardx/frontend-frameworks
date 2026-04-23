import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ReviewTotal = () => {
  return (
    <div className="flex pt-30 ">
      <h1 className="font-hero text-6xl">Reviews</h1>
      <div className="flex text-5xl gap-4 ml-12 pt-1.5">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaRegStar></FaRegStar>
        <FaRegStar></FaRegStar>
        <FaRegStar></FaRegStar>
      </div>
    </div>
  );
};

export default ReviewTotal;
