"use client";

import { useState } from "react";
import Singleimages from "./Singleimages";
import Singleproductinfo from "./Singleproductinfo";
import CartList from "./CartList";

const singleproductsection = ({ product }) => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <Singleimages product={product}></Singleimages>
      <Singleproductinfo
        product={product}
        addToCart={addToCart}
        onAddToCart={() => addToCart(product)}
      ></Singleproductinfo>
      <CartList
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      ></CartList>
    </div>
  );
};

export default singleproductsection;
