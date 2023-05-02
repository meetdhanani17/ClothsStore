import React, { useState } from "react";
import ReactDOM from "react-dom";
import Input from "../input/input";
import Button from "../input/Button";
import SlideCard from "./SlideCard";
export default function Form({ dataCard, setShowForm, setPurchase }) {
  const [count, setCount] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    address: "",
    zip: "",
  });
  function onChange(e) {
    setData((p) => {
      return { ...p, [e.target.id]: e.target.value };
    });
  }
  function Submit(e) {
    e.preventDefault();
    setPurchase &&
      setPurchase((p) => {
        return {
          ...p,
          buy: [...p.buy, { ...dataCard, quantity: count }],
        };
      });
    setData({
      name: "",
      email: "",
      mobileNo: "",
      address: "",
      zip: "",
    });
    setShowForm(false);
  }
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-transparent font-bold grid content-center place-content-center">
        <div className=" border bg-white border-black rounded-xl w-96 px-8 py-4">
          {dataCard && (
            <SlideCard dataCard={dataCard} count={count} setCount={setCount} />
          )}
          <form className="m-2" onSubmit={Submit}>
            <Input
              type="text"
              text="Full Name"
              id="name"
              placeholder="name"
              value={data.name}
              onChange={onChange}
            />
            <Input
              type="email"
              text="Email"
              id="email"
              placeholder="Enter Email"
              value={data.email}
              onChange={onChange}
            />
            <Input
              type="tel"
              text="Mobile NO."
              id="mobileNo"
              placeholder="Enter Number"
              value={data.mobileNo}
              onChange={onChange}
            />
            <Input
              type="text"
              text="Address"
              id="address"
              placeholder="Enter Address"
              value={data.address}
              onChange={onChange}
            />
            <Input
              type="number"
              min="000000"
              max="999999"
              text="ZIP"
              id="zip"
              placeholder="Enter Zip Code"
              value={data.zip}
              onChange={onChange}
            />
            <div className="mt-2 flex justify-end">
              <Button
                type="button"
                text="Cancel"
                onClick={() => {
                  setShowForm(false);
                }}
              />
              <Button type="submit" text="Confirm" />
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("form")
  );
}
