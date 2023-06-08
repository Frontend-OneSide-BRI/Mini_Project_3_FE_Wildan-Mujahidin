import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Homepage, ListFavorites, ListMovies } from "../pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/movie/:id_movie",
      element: <ListMovies />,
    },
    {
      path: "/favorites",
      element: <ListFavorites />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
