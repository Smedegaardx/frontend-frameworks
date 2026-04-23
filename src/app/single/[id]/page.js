import Singleproductsection from "@/app/components/Singleproductsection";
import Reviewsection from "@/app/components/Reviewsection";

async function getData() {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "force-cache",
  });
  return response.json();
}

export async function generateStaticParams() {
  const data = await getData();

  return data.products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function Single({ params }) {
  const { id } = await params;
  const data = await getData();

  const product = data.products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-20 mt-20">
      <Singleproductsection product={product} />
      <Reviewsection product={product} />
    </div>
  );
}
