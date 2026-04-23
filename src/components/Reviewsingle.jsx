import { FaStar } from "react-icons/fa";

const Reviewsingle = () => {
  return (
    <div>
      <div className="flex text-5xl">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
      </div>
      <div className="mt-5 mb-20">
        <h3 className="font-text text-5xl">"Very satisfied"</h3>
        <h3 className="font-text text-5xl">John Doe</h3>
      </div>
    </div>
  );
};

export default Reviewsingle;
