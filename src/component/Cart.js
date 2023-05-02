import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SlideCard from "./Buy/SlideCard";
import Info from "./Buy/Info";
import Button from "./input/Button";
export default function Cart({ purchase, setPurchase }) {
  const Navigate = useNavigate();
  const [showForm, setShowForm] = useState();
  function addBuy() {
    setPurchase((p) => {
      return {
        buy: [
          ...p.buy,
          ...Object.keys(p.cart).map((data) => {
            return { ...p.cart[data] };
          }),
        ],
        cart: {},
      };
    });
    Navigate("/orders");
  }
  function remove(i) {
    setPurchase((p) => {
      delete p.cart[i];
      return {
        ...p,
        cart: { ...p.cart },
      };
    });
  }
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
            remove={() => {
              remove(data);
            }}
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
      {showForm && (
        <Info showFormBuy={showForm} setBuy={setShowForm} addBuy={addBuy} />
      )}
    </div>
  );
}
