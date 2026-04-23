import Singleimages from "./Singleimages";
import Singleproductinfo from "./Singleproductinfo";

const singleproductsection = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Singleimages></Singleimages>
      <Singleproductinfo></Singleproductinfo>
    </div>
  );
};

export default singleproductsection;
