import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  DetailMovie,
  Homepage,
  ListFavorites,
  ListMovies,
  Login,
} from "../pages";

function App() {
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
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
