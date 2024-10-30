import Image from "next/image";
import React from "react";

type ProductoProps = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: string;
  discountPercentage: string;
};

export default function Producto({
  id,
  title,
  thumbnail,
  description,
  price,
  discountPercentage
}: ProductoProps) {
  return (
    <div className="flex  rounded-xl bg-white w-1/2 p-2">
      <div className="flex flex-col justify-center items-start px-4 text-black">
        <div className="flex flex-col">
          <div className="bg-red-100">{discountPercentage}</div>
          <h2 className="font-semibold text-xl uppercase text-gray-700">{title}</h2>
          <h2 className="text-sm text-start" >{description}</h2>
        </div>
        <h2 className="font-bold text-md uppercase pt-2"> Llevalo por ${price}</h2>
      </div>
      <Image src={thumbnail} width={200} height={300} alt={thumbnail} className="bg-red-100 rounded-md"  />
    </div>
  );
}
