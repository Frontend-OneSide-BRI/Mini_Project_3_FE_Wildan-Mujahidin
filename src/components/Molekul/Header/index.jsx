import React from "react";
import logo from "../../../assets/logo.png";
import { Button, SelectOption } from "../../Atom";

const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center px-5">
      <div className="w-28">
        <img src={logo} alt="" />
      </div>

      <div className=" flex gap-2">
        <SelectOption />
        <Button placeholder={"Sign In"} />
      </div>
    </div>
  );
};

export default Header;
