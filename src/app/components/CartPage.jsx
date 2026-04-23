"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import CartItem from "./CartItem";
import { PiShoppingCart } from "react-icons/pi";

export default function PaymentContent() {
  const searchParams = useSearchParams();
  const itemsParam = searchParams.get("items");

  const itemIds = useMemo(() => {
    if (!itemsParam) return [];

    return itemsParam
      .split(",")
      .map((item) => Number(item.trim()))
      .filter((id) => !Number.isNaN(id));
  }, [itemsParam]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      const foundProducts = data.products.filter((p) => itemIds.includes(p.id));

      setProducts(foundProducts);
    }

    if (itemIds.length > 0) {
      getData();
    } else {
      setProducts([]);
    }
  }, [itemIds]);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }
  const total = products.reduce((sum, product) => sum + product.price, 0);
  return (
    <div>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div className="flex flex-col mt-52">
        <h1 className="font-text text-5xl text-center">
          Total: <span className="text-[#F5A623]"> ${total.toFixed(2)}</span>
        </h1>
        <button className="bg-[#284B63] hover:bg-[#1a3a4d] text-white py-4 px-8 rounded-3xl font-text text-3xl my-6 w-full cursor-pointer max-w-96 self-center">
          Betal <PiShoppingCart className="inline ml-1" />
        </button>
      </div>
    </div>
  );
}
