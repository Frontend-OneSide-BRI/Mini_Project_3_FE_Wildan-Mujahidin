import logo from "../../../assets/logo.png";
import { Button, SelectOption } from "../../Atom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center px-5">
      <div className="w-28">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className=" flex gap-2">
        <SelectOption />
        <Link to={"/login"}>
          <Button placeholder={"Sign In"} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
