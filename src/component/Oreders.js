import React from "react";
import SlideCard from "./Buy/SlideCard";

export default function Orders({ purchase, setPurchase }) {
  return (
    <div className="pt-2">
      {purchase.buy.map((data) => {
        return (
          <>
            <SlideCard
              key={data.id}
              setPurchase={setPurchase}
              dataCard={data}
            />
          </>
        );
      })}
    </div>
  );
}
