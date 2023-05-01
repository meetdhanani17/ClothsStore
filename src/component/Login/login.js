import React, { useEffect } from "react";
import Input from "../input/input";
import Button from "../input/Button";
export default function Login({ setLogin, password }) {
  function loginCheck(e) {
    e.preventDefault();
    if (
      e.target[0].value.trim().length < 1 ||
      +e.target[1].value !== password
    ) {
      console.log("enter valid value");
      return;
    }
    setLogin({ isLogin: true, userName: e.target[0].value.trim() });
  }

  return (
    <>
      <div className="flex m-auto mt-16 w-64">
        <form onSubmit={loginCheck}>
          <Input
            type="text"
            placeholder="Enter UserName"
            id="userName"
            text="Enter UserName"
          />
          <Input
            type="password"
            placeholder={"Password is " + password}
            id="Password"
            text="Enter Password"
          />
          <Button text="Login" />
        </form>
      </div>
    </>
  );
}
