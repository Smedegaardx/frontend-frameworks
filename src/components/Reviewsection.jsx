import ReviewTotal from "./Reviewtotal";
import Reviewsingle from "./Reviewsingle";

const Reviewsection = () => {
  return (
    <div className="border-t-2 border-t-[#284B63]  mt-10">
      <ReviewTotal></ReviewTotal>
      <div className="flex  mt-20 justify-between">
        <Reviewsingle></Reviewsingle>
        <Reviewsingle></Reviewsingle>
        <Reviewsingle></Reviewsingle>
      </div>
    </div>
  );
};

export default Reviewsection;
