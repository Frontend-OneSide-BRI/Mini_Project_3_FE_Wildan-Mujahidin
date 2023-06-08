import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { DetailMovie, Homepage, ListFavorites, ListMovies } from "../pages";

function App() {
  // const [cookie, , removeCookie] = useCookies(["token"]);
  // const checkToken = cookie.token;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/movies",
      element: <ListMovies />,
    },
    {
      path: "/movie/:id_movie",
      element: <DetailMovie />,
    },
    {
      path: "/favorites",
      element: <ListFavorites />,
    },
  ]);

  // axios.interceptors.request.use(function (config) {
  //   config.headers = config.headers || {};
  //   config.headers.Authorization = `Bearer ${checkToken}`;
  //   return config;
  // });

  // axios.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   function (error) {
  //     const { data } = error.response;
  //     if (
  //       data === "Missing or malformed JWT" ||
  //       [401, 403].includes(data.code)
  //     ) {
  //       removeCookie("token");
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  return <RouterProvider router={router} />;
}

export default App;
