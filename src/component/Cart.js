import React from "react";
import SlideCard from "./Buy/SlideCard";
export default function Cart({ purchase, setPurchase }) {
  return (
    <>
      {Object.keys(purchase.cart).map((data, i) => {
        console.log("data", purchase.cart[data], data);
        return (
          <SlideCard
            key={data.id}
            setPurchase={setPurchase}
            dataCard={purchase.cart[data]}
          />
        );
      })}
    </>
  );
}
