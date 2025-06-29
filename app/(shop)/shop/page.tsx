"use client";

import ProductCard from "@/app/components/ProductCard";
import { useEffect, useState } from "react";

//Compoenets to use- Toast

interface ProductProps {
  id: string;
  img: string;
  name: string;
  price: string;
  manufacturer: string;
}

const Shop = () => {
  const [products, setProducts] = useState<ProductProps[] | []>([]);

  const getProducts = async () => {
    try {
      const response = await fetch("/product.json").then((res) => res.json());

      if (response) {
        setProducts(response.products);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error({ error });
    }
  };

  console.log({ products });
  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    <div>No Products to display</div>;
  } //grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-col-6
  return (
    <div className="flex place-items-center gap-8 flex-wrap mx-auto justify-center p-10">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          img={product.img}
          name={product.name}
          price={product.price}
          manufacturer={product.manufacturer}
        />
      ))}
    </div>
  );
};

export default Shop;
