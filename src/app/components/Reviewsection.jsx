import ReviewTotal from "./Reviewtotal";
import Reviewsingle from "./Reviewsingle";

const Reviewsection = ({ product }) => {
  return (
    <div className="border-t-2 border-t-[#284B63]  mt-10">
      <ReviewTotal rating={Math.round(product.rating)}></ReviewTotal>
      <div className="flex  mt-20 justify-between">
        {product.reviews.map((element, index) => (
          <Reviewsingle key={index} review={element}></Reviewsingle>
        ))}
      </div>
    </div>
  );
};

export default Reviewsection;
