"use client";
import { useState } from "react";
import ProductList from "./ProductList";
import CartList from "./CartList";
import CategoryButton from "./CategoryButton";
import Search from "./Search";

const ShopPage = () => {
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
    <div className="grid grid-cols-[3fr_1fr] bg-[#EEF0EB] pt-10 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 mb-5 gap-10 ml-5 mr-5">
        <CategoryButton onCategorySelect={setSelectedCategory} />
        <Search onSearch={setSearchQuery} />
        <div className="hidden md:block"></div>
      </div>

      <div></div>

      <ProductList
        addToCart={addToCart}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
      <CartList
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </div>
  );
};

export default ShopPage;
