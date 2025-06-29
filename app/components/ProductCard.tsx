"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Badge from "./general/Badge";
import { ProductProps } from "@/lib/interface";

type ProductCardProps = {
  product: ProductProps;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isClient, setIsClient] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const existingCart = localStorage.getItem("cart");
    if (existingCart) {
      const parsedCart: ProductProps[] = JSON.parse(existingCart);
      const found = parsedCart.find((item) => item.id === product.id);
      if (found) setIsInCart(true);
    }
  }, [product.id]);

  const handleCartToggle = () => {
    const existingCart = localStorage.getItem("cart");
    let updatedCart: ProductProps[] = [];

    if (existingCart) {
      updatedCart = JSON.parse(existingCart);
    }

    if (isInCart) {
      updatedCart = updatedCart.filter((item) => item.id !== product.id);
      setIsInCart(false);
    } else {
      updatedCart.push(product);
      setIsInCart(true);
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (!isClient) return null;

  return (
    <div className="product-card hover:scale-[1.01] w-full sm:w-[250px] max-w-[300px] self-start aspect-square rounded-3xl relative transition-all ease-in-out duration-300">
      <Image
        src={product.img}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-full rounded-3xl object-cover"
      />
      <div className="img-overlay bg-[#00000055] absolute inset-0 text-white rounded-3xl p-2 flex flex-col justify-between">
        <div className="flex justify-between items-center gap-4">
          <small className="font-bold">{product.name}</small>
          <Badge
            text={`$${product.price}`}
            classname="price-tag bg-green-700 text-[15px]"
          />
        </div>
        <div className="flex justify-between items-center">
          <Badge
            text={product.manufacturer}
            classname="bg-[#ffffff44] text-[14px]"
          />
          <button
            onClick={handleCartToggle}
            className={` ${
              isInCart && "text-sm hover:text-[14.1px]"
            } bg-white text-sm text-black font-bold rounded-2xl cursor-pointer hover:text-[14.9px] hover:rounded-lg py-2 px-3 transition-all duration-300 ease-in-out hover:border-1 hover:border-black  `}
          >
            {isInCart ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
