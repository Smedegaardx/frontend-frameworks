import Singleproductsection from "@/app/components/Singleproductsection";
import Reviewsection from "@/app/components/Reviewsection";

async function getData() {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
}

export default async function Single() {
  const data = await getData();
  const id = 1;

  const product = data.products.find((p) => p.id === id);

  return (
    <div className="mx-20 mt-20">
      <Singleproductsection product={product}></Singleproductsection>
      <Reviewsection product={product}></Reviewsection>
    </div>
  );
}
