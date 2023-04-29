import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className="grid fixed top-0 w-full font-bold bg-gray-700 text-white h-10 content-center">
        <div className="flex justify-between mx-32">
          <div>
            <Link to="/">
              <p className="">ClothStore</p>
            </Link>
          </div>
          <div className="flex space-x-5">
            <Link to="/menswear">
              <p className="">Men's Wear</p>
            </Link>
            <Link to="/womenswear">
              <p className="">Women's Wear</p>
            </Link>
            <Link to="/jewellery">
              <p className="">Jewellery</p>
            </Link>
            <Link to="/electronics">
              <p className="">Electronics</p>
            </Link>
            <Link to="/orders">
              <p className="">Orders</p>
            </Link>
            <Link to="/cart">
              <div className="h-2 w-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
