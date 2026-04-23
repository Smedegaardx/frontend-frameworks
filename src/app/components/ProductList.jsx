"use client";

import { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = ({ addToCart, selectedCategory, searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let url;

      if (searchQuery) {
        url = `https://dummyjson.com/products/search?q=${searchQuery}`;
      } else if (selectedCategory) {
        url = `https://dummyjson.com/products/category/${selectedCategory}`;
      } else {
        url = `https://dummyjson.com/products`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, [selectedCategory, searchQuery]);

  return (
    <div className="grid grid-cols-3 gap-10 ml-5 mr-5">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          thumbnail={product.thumbnail}
          title={product.title}
          price={product.price}
          stock={product.stock}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
