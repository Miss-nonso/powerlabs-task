"use client";

import { ProductProps } from "@/lib/interface";
import { useEffect, useState } from "react";

type Props = {
  cart: (ProductProps & { quantity: number })[];
  discountApplied: boolean;
  setDiscountApplied: (val: boolean) => void;
};

const CartSummary = ({ cart, discountApplied, setDiscountApplied }: Props) => {
  const [total, setTotal] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const DISCOUNT_CODE = "POWERLABSx";

  useEffect(() => {
    const rawTotal = cart.reduce(
      (sum, item) => sum + +item.price * item.quantity,
      0
    );
    const discounted = discountApplied ? rawTotal * (1 - 0.132) : rawTotal;
    setTotal(Number(discounted.toFixed(2)));
  }, [cart, discountApplied]);

  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === DISCOUNT_CODE.toUpperCase()) {
      setDiscountApplied(true);
    } else {
      alert("Invalid coupon code");
    }
  };

  return (
    <div className="mt-8 bg-white border p-4 rounded-xl">
      <h3 className="text-lg font-semibold mb-3">Coupon Code</h3>
      {discountApplied ? (
        <p className="text-green-600 mb-2">Coupon applied! 🎉</p>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon"
            className="border rounded px-3 py-2 flex-1"
          />
          <button
            onClick={applyCoupon}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Apply
          </button>
        </div>
      )}
      <div className="text-right mt-6">
        <h2 className="text-2xl font-bold">Total: ${total}</h2>
        {discountApplied && (
          <p className="text-sm text-green-600">13.2% discount applied!</p>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
