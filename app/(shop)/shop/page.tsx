"use client";

import ProductCard from "@/app/components/ProductCard";
import { useEffect, useState } from "react";
import { ProductProps } from "@/lib/interface";
import Link from "next/link";

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

  useEffect(() => {
    getProducts();

    if (window !== undefined) {
      const storedProducts = localStorage.getItem("cart");
      if (!storedProducts) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
    }
  }, []);

  if (!products) {
    return (
      <div className="text-center m-auto font-extrabold text-2xl">
        No Products to display
      </div>
    );
  }
  return (
    <div className="">
      <header className="shop-header h-[250px] w-full relative grid place-items-center">
        <div className="overlay bg-[#00000066] h-full w-full absolute"></div>
        <div className="text-white z-10 text-center grid gap-4">
          <h1 className="text-6xl font-extrabold">
            MAR<span className="italic text-5xl text-yellow-100">K</span>ERT
            AFRICA
          </h1>
          <p className="text-base">The Shopping Experience you can Trust</p>
        </div>
      </header>
      <Link
        href="/cart"
        className="absolute right-8 top-4 bg-white px-6 py-4 font-bold text-xl rounded-3xl"
      >
        Go to Cart
      </Link>
      <div className="flex place-items-center justify-center gap-6 flex-wrap mx-auto mt-6 py-6 px-4">
        {" "}
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
