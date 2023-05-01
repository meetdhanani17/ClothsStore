import React, { useState } from "react";
import Info from "./Buy/Info";
export default function Card({ data, setPurchase }) {
  const [buy, setBuy] = useState(false);
  function Buy() {
    setBuy(true);
  }
  function addCart() {
    setPurchase((p) => {
      return {
        ...p,
        cart: {
          ...p.cart,

          [data.id]: {
            ...data,
            quantity: p.cart[data.id]?.quantity
              ? p.cart[data.id]?.quantity + 1
              : 1,
          },
        },
      };
    });
  }

  return (
    <>
      <div className="card border border-black rounded-xl p-2 m-2 font-medium">
        <div className="w-max mx-auto ">
          <img
            className="object-scale-down h-32 w-36  "
            src={data.image}
            alt="Pic"
          />
        </div>
        <div>
          <p className="overflow-hidden h-6 truncate">{data.title}</p>
          <div className="flex justify-between">
            <p>Price : {data.price}&#8377;</p>
            <p> &#9733;{data.rating.rate}</p>
          </div>
          <div className="flex justify-around h-8 mt-2">
            <button className="bg-orange-500 text-white w-5/12" onClick={Buy}>
              Buy
            </button>
            <button className="bg-blue-500 text-white w-5/12" onClick={addCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {buy && (
        <Info
          data={data}
          showFormBuy={buy}
          setBuy={setBuy}
          setPurchase={setPurchase}
        />
      )}
    </>
  );
}
