import React, { useEffect } from "react";
export default function SlideCard({
  dataCard,
  countNo,
  setPurchase,
  count,
  setCount,
  remove,
}) {
  useEffect(() => {
    setCount && setCount(dataCard.quantity || countNo || 1);
  }, []);

  function add() {
    setPurchase
      ? setPurchase((p) => {
          return {
            ...p,
            cart: {
              ...p.cart,
              [dataCard.id]: { ...dataCard, quantity: dataCard.quantity + 1 },
            },
          };
        })
      : setCount((p) => p + 1);
  }
  function sub() {
    if (count > 1 || dataCard.quantity > 1) {
      setPurchase
        ? setPurchase((p) => {
            return {
              ...p,
              cart: {
                ...p.cart,
                [dataCard.id]: { ...dataCard, quantity: dataCard.quantity - 1 },
              },
            };
          })
        : setCount((p) => p - 1);
    }
  }

  return (
    <>
      <div className="grid grid-cols-12 border border-black rounded-xl p-2 m-2 font-medium">
        <div className="col-span-3">
          <img
            className="object-scale-down h-16 w-18 "
            src={dataCard.image}
            alt="Pic"
          />
        </div>
        <div className="col-span-9 ">
          <div className="flex justify-between">
            <p className="overflow-hidden h-6 truncate">{dataCard.title}</p>
            {/* <button className="font-bold text-xl -mt-2 " onClick={() => {}}>
              &times;
            </button> */}
          </div>
          <div className="flex justify-between">
            <p>Price : {dataCard.price}&#8377;</p>
            <p> &#9733;{dataCard.rating.rate}</p>
          </div>
          <div className="flex justify-between">
            <div>
              Total:{" "}
              {(+dataCard.price * (dataCard.quantity || count)).toFixed(2)}
              &#8377;
            </div>
            <div className="flex">
              <button
                className="border border-black px-2 font-bold "
                onClick={sub}
              >
                -
              </button>
              <div className="border border-black px-2">
                {dataCard.quantity || count}
              </div>
              <button className="border border-black px-2 " onClick={add}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
