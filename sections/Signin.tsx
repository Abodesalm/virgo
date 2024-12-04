"use client";

import Button from "@/components/Button";
import { user } from "@/public/data";
import { signIn } from "@/redux/slices/isSigned-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Signin() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState(<p></p>);
  const dispatch = useDispatch();

  const log = () => {
    if (email === user.email && password === user.password) {
      dispatch(signIn());
      localStorage.setItem("auth", "true");
    } else {
      setError(<p className="text-danger">email or password is wrong!</p>);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="form bg-light dark:bg-middark"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="capitalize text-size-3">hello, sign in...</p>
        <input
          type="email"
          placeholder="email"
          className="input"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          className="input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button action={log} style="prime" className="mt-4">
          <>sign in</>
        </Button>
        {error}
      </form>
    </div>
  );
}
