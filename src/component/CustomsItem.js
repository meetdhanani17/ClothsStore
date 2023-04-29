import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function CustomItem({ urlPart, setPurchase }) {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/" + urlPart)
      .then((data) => setData(data.data))
      .catch((e) => console.log(e));
  }, [urlPart]);
  return (
    <>
      <div className="flex mt-12 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {data &&
            data.map((val) => {
              return <Card key={val.id} data={val} setPurchase={setPurchase} />;
            })}
        </div>
      </div>
    </>
  );
}
