import Singleimages from "./Singleimages";
import Singleproductinfo from "./Singleproductinfo";

const singleproductsection = ({ product }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Singleimages product={product}></Singleimages>
      <Singleproductinfo product={product}></Singleproductinfo>
    </div>
  );
};

export default singleproductsection;
