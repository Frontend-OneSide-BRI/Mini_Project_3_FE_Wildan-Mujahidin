import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "../../components/Atom";

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [isDisable, setIsDisable] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formLogin);
    axios
      .get("https://api.themoviedb.org/3/authentication/guest_session/new", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_READ}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "guest_session_id",
          response.data.guest_session_id
        );
        localStorage.setItem("email", formLogin.email);
        Swal.fire({
          title: "Berhasil Login",
          icon: "success",
          confirmButtonAriaLabel: "ok",
        }).then(() => {
          navigate("/movies");
          window.location.reload();
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Gagal Login",
          text: err.response.data.status_message,
          icon: "error",
          confirmButtonAriaLabel: "ok",
        });
      });
  };

  useEffect(() => {
    if (formLogin.email === "" || formLogin.password === "") {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [formLogin]);

  return (
    <div className="flex justify-center content-center  h-screen w-full items-center">
      <div className="  flex-col justify-center px-6 py-12 lg:px-8 backdrop-blur-sm bg-black/30 m-4 rounded-xl lg:w-1/2 w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="text-black px-3 block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder: focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) =>
                    setFormLogin({
                      ...formLogin,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-gray-400 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="text-black px-3 block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder: focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) =>
                    setFormLogin({
                      ...formLogin,
                      password: e.target.value,
                    })
                  }
                  value={formLogin.password}
                />
              </div>
            </div>

            <div>
              <Button
                placeholder={"Sign in"}
                style={"w-full"}
                disabled={isDisable}
                onClick={handleSubmit}
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm ">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-gray-400 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
