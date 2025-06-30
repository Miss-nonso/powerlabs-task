import Image from "next/image";
import Button from "./general/Button";
import Badge from "./general/Badge";

//Components to use - Badge, button

type ProductCardProps = {
  img: string;
  name: string;
  price: string;
  manufacturer: string;
};

const ProductCard = ({ img, name, price, manufacturer }: ProductCardProps) => {
  return (
<<<<<<< Updated upstream
    <div className="product-card hover:scale-[1.01] w-full sm:w-[250px] max-w-[300px] self-start aspect-square rounded-3xl relative  transition-all ease-in-out duration-300">
=======
    <div className="product-card hover:scale-[1.01] w-full sm:w-[250px] sm:max-w-[300px] self-start aspect-square rounded-3xl relative transition-all ease-in-out duration-300">
>>>>>>> Stashed changes
      <Image
        src={img}
        alt={name}
        className="w-full h-full rounded-3xl"
        width={200}
        height={200}
      />
      <div className="img-overlay bg-[#00000055] absolute inset-0 text-white rounded-3xl p-2 flex flex-col justify-between">
        <div className="flex justify-between items-center gap-4">
          <small className=" font-bold">{name}</small>
          <Badge
            text={`$${price}`}
            classname="price-tag bg-green-700 text-[15px]"
          />
        </div>
        <div className="flex justify-between items-center">
          <Badge text={manufacturer} classname="bg-[#ffffff44] text-[14px]" />
          <Button
            text="Add to Cart"
            className="bg-white text-base text-black font-bold rounded-2xl cursor-pointer hover:text-[15.9px] hover:rounded-lg"
          />
<<<<<<< Updated upstream
=======
          <button
            onClick={handleCartToggle}
            className={` ${
              isInCart && "text-sm hover:text-[14.1px]"
            } bg-yellow-400 border border-black text-sm text-black font-bold rounded-sm shadow-md cursor-pointer hover:text-[14.1px] hover:rounded-lg py-2 px-3 transition-all duration-300 ease-in-out hover:border-2 hover:border-black`}
          >
            {isInCart ? "Remove from cart" : "Add to cart"}
          </button>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
