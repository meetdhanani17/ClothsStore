import React from "react";
import SlideCard from "./Buy/SlideCard";

export default function Orders({ purchase, setPurchase }) {
  return (
    <>
      {Object.keys(purchase.buy).map((data) => {
        return (
          <>
            <SlideCard
              key={data.id}
              setPurchase={setPurchase}
              dataCard={purchase.buy[data]}
            />
          </>
        );
      })}
    </>
  );
}
