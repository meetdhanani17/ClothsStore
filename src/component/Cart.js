import React from "react";
import SlideCard from "./Buy/SlideCard";
import Info from "./Buy/Info";
import Button from "./input/Button";
export default function Cart({ purchase, setPurchase }) {
  function CheckOut() {
    setPurchase((p) => {
      return { buy: { ...p.buy, ...p.cart }, cart: {} };
    });
  }
  return (
    <>
      {Object.keys(purchase.cart).map((data, i) => {
        return (
          <SlideCard
            key={data.id}
            setPurchase={setPurchase}
            dataCard={purchase.cart[data]}
          />
        );
      })}
      {Object.keys(purchase.cart).length > 0 ? (
        <Button text="CheckOut" type="button" onClick={CheckOut} />
      ) : (
        <p className="text-center pt-2">Please Add Item to Cart</p>
      )}
    </>
  );
}
