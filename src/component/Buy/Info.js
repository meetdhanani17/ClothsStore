import React, { useState } from "react";
import Form from "./Form";
export default function Info({
  data,
  showFormBuy,
  setBuy,
  setPurchase,
  addBuy,
}) {
  return (
    <>
      {showFormBuy && (
        <Form
          dataCard={data}
          setShowForm={setBuy}
          setPurchase={setPurchase}
          addBuy={addBuy}
        />
      )}
    </>
  );
}
