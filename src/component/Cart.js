import React, { useEffect, useState } from "react";
import SlideCard from "./Buy/SlideCard";
import Info from "./Buy/Info";
import Button from "./input/Button";
export default function Cart({ purchase, setPurchase }) {
  const [showForm, setShowForm] = useState();

  useEffect(() => {
    showForm === false &&
      setPurchase((p) => {
        return { buy: { ...p.buy, ...p.cart }, cart: {} };
      });
  }, [showForm]);
  function CheckOut() {
    setShowForm((p) => true);
  }
  return (
    <div className="py-2">
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
        <div className="flex  justify-end pr-3">
          <Button text="Check Out" type="button" onClick={CheckOut} />
        </div>
      ) : (
        <p className="text-center pt-2">Please Add Item to Cart</p>
      )}
      {showForm && <Info showFormBuy={showForm} setBuy={setShowForm} />}
    </div>
  );
}
