"use client";

import { useEffect, useState } from "react";
import { ProductProps } from "@/lib/interface";
import CartItem from "@/app/components/CartItem";
import CartSummary from "@/app/components/CartSummary";
import Link from "next/link";

const CartPage = () => {
  const [cart, setCart] = useState<(ProductProps & { quantity: number })[]>(
    JSON.parse(localStorage.getItem("cart")).map((item) => ({
      ...item,
      quantity: 1
    })) || []
  );

  const [discountApplied, setDiscountApplied] = useState(false);

  const [isClient, setIsClient] = useState(false);
  const [cartLoaded, setCartLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (cartLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, cartLoaded]);

  useEffect(() => {
    if (!isClient) return;
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ProductProps[];
        const withQuantities = parsed.map((item) => ({ ...item, quantity: 1 }));

        const itemWithQuantities = withQuantities.map((item) => ({
          ...item,
          quantity: typeof item.quantity === "number" ? item.quantity : 1
        }));

        setCart(withQuantities);
        setCartLoaded(true);
      } catch {
        console.error("Invalid cart data");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (id: string) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  const handleQuantityChange = (id: string, amount: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <header className="cart-header h-[250px] w-full relative grid place-items-center">
        <div className="overlay bg-[#00000066] h-full w-full absolute"></div>
        <div className="text-white z-10 text-center grid gap-4">
          <h1 className="text-6xl font-extrabold">
            MAR<span className="italic text-5xl text-yellow-100">K</span>ERT
            AFRICA
          </h1>
          <p className="text-base">The Shopping Experience you can Trust</p>
        </div>
      </header>

      <h1 className="text-2xl md:text-4xl font-bold my-6 flex items-center justify-between">
        Your Cart{" "}
        <Link
          href="/shop"
          className="  bg-white py-2 px-4 sm:px-6 sm:py-4 font-bold text-base sm:text-xl rounded-sm sm:rounded-3xl border-1 border-black hover:border-2"
        >
          Back to Shop
        </Link>
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))}

          <CartSummary
            cart={cart}
            discountApplied={discountApplied}
            setDiscountApplied={setDiscountApplied}
          />
        </div>
      )}
    </div>
  );
};

export default CartPage;
