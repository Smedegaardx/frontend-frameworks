import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ReviewTotal = ({ rating }) => {
  return (
    <div className="flex pt-30 ">
      <h1 className="font-hero text-6xl">Reviews</h1>
      <div className="flex text-5xl gap-4 ml-12 pt-1.5">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= rating ? <FaStar key={star} /> : <FaRegStar key={star} />,
        )}
      </div>
    </div>
  );
};

export default ReviewTotal;
