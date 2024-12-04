"use client";

import { signOut } from "@/redux/slices/isSigned-slice";
import Button from "./Button";
import Icon from "./Icon";
import { useDispatch } from "react-redux";

export default function Signout() {
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.setItem("auth", "false");
    dispatch(signOut());
  };
  return (
    <Button action={logout} style="ui-blur" className="buttonRow">
      <>
        <Icon i={"signout"} />
        <p className="capitalize text-size-5">sign out</p>
      </>
    </Button>
  );
}
