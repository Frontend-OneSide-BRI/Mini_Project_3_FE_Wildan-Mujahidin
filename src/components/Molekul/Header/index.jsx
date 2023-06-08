import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Button, SelectOption } from "../../Atom";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = sessionStorage.getItem("email");

  const handleLogout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("guest_session_id");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("guest_session_id");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div className="h-20 flex justify-between items-center px-5">
      <div className="w-28">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className=" flex gap-2">
        <SelectOption />
        {isLoggedIn ? (
          <div className="flex gap-2 align-middle items-center">
            <p>{user.slice(0, 7)}</p>
            <Link to={"/login"}>
              <Button placeholder={"Log Out"} onClick={handleLogout} />
            </Link>
          </div>
        ) : (
          <Link to={"/login"}>
            <Button placeholder={"Sign In"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
