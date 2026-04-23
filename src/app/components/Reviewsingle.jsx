import { FaStar } from "react-icons/fa";

const Reviewsingle = ({ review }) => {
  return (
    <div>
      <div className="flex text-5xl gap-2">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= review.rating ? <FaStar key={star} /> : "",
        )}
      </div>
      <div className="mt-5 mb-20">
        <h3 className="font-text text-5xl">{review.comment}</h3>
        <h3 className="font-text text-5xl">{review.reviewerName}</h3>
      </div>
    </div>
  );
};

export default Reviewsingle;
