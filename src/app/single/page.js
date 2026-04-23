import Singleproductsection from "@/components/Singleproductsection";
import Reviewsection from "@/components/Reviewsection";
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then(console.log);

export default function Single() {
  return (
    <div className="mx-20 mt-20">
      <Singleproductsection></Singleproductsection>
      <Reviewsection></Reviewsection>
    </div>
  );
}
