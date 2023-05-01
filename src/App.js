import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./component/Home";
import "./App.css";
import Navbar from "./component/Navbar";
import CustomItem from "./component/CustomsItem";
import Cart from "./component/Cart";
import Orders from "./component/Oreders";
import Login from "./component/Login/login";
function App({ password }) {
  const [login, setLogin] = useState({ isLogin: false, userName: "" });
  const [purchase, setPurchase] = useState({ cart: [], buy: [] });

  return (
    <>
      <Router>
        <Navbar />
        <div className="mt-10">
          <Routes>
            {login.isLogin ? (
              <Route
                exact
                path="/"
                element={<Home setPurchase={setPurchase} />}
              ></Route>
            ) : (
              <Route
                exact
                path="/"
                element={<Login setLogin={setLogin} password={password} />}
              ></Route>
            )}
            <Route
              exact
              path="/menswear"
              element={
                login.isLogin ? (
                  <CustomItem
                    urlPart="men's clothing"
                    setPurchase={setPurchase}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              exact
              path="/womenswear"
              element={
                login.isLogin ? (
                  <CustomItem
                    urlPart="women's clothing"
                    setPurchase={setPurchase}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              exact
              path="/jewellery"
              element={
                login.isLogin ? (
                  <CustomItem urlPart="jewelery" setPurchase={setPurchase} />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              exact
              path="/electronics"
              element={
                login.isLogin ? (
                  <CustomItem urlPart="electronics" setPurchase={setPurchase} />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              exact
              path="/orders"
              element={
                login.isLogin ? (
                  <Orders setPurchase={setPurchase} purchase={purchase} />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            setPurchase
            <Route
              exact
              path="/cart"
              element={
                login.isLogin ? (
                  <Cart purchase={purchase} setPurchase={setPurchase} />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
