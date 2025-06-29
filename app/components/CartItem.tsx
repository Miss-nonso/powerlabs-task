"use client";

import Image from "next/image";
import { ProductProps } from "@/lib/interface";
import Badge from "./general/Badge";

type Props = {
  item: ProductProps & { quantity: number };
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, amount: number) => void;
};

const CartItem = ({ item, onRemove, onQuantityChange }: Props) => {
  console.log({ item: item.quantity });
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-100 p-4 rounded-xl gap-4">
      <div className="flex items-start gap-4 w-full">
        <div className="w-[100px] h-[100px] relative shrink-0">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex gap-4 items-center">
            {" "}
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <Badge
              text={item.price}
              classname="bg-green-700 text-white max-w-[80px] text-sm"
            />
          </div>

          <div className="flex items-center gap-2 mt-8 ">
            <button
              onClick={() => onQuantityChange(item.id, -1)}
              className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
            >
              -
            </button>
            <span className="text-md">{item.quantity}</span>
            <button
              onClick={() => onQuantityChange(item.id, 1)}
              className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end w-full sm:w-auto">
        <p className="font-bold">${(+item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 mt-2 text-sm bg-white border border-red-400 rounded-md px-2 py-1 hover:font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
