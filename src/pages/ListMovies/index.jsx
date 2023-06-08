import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilterMovies, fetchMovies } from "../../service/movieSlice";
import { Header, ImageCard } from "../../components/Molekul";
import { Button } from "../../components/Atom";

const ListMovies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSearchMovie = () => {
    dispatch(fetchFilterMovies(searchQuery));
  };

  const handleCategoryMovie = (data) => {
    dispatch(fetchFilterMovies(data));
  };

  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <div className="h-full w-full  overflow-auto">
        <Header />

        <div className="flex justify-center gap-5 py-3">
          <a href="/">
            <p>HOME</p>
          </a>

          <a href="/movies">
            <p className="border-b-2 border-purple-600">MOVIES</p>
          </a>

          <a href="/favorites">
            <p className="">FAVORITES</p>
          </a>
        </div>

        <div className="  flex justify-center content-center">
          <div className="my-6 flex w-full lg:w-1/2 px-5 gap-x-4 justify-center content-center">
            <input
              onChange={(event) => setSearchQuery(event.target.value)}
              className="min-w-0 flex-auto rounded-md border-0 bg-black/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Search Movie"
            />
            <Button placeholder={"Search"} onClick={handleSearchMovie} />
          </div>
        </div>

        <div className="flex justify-around gap-5 py-3">
          <a onClick={() => handleCategoryMovie("action")}>
            <p>Action</p>
          </a>
          <a onClick={() => handleCategoryMovie("adventure")}>
            <p>Adventure</p>
          </a>
          <a onClick={() => handleCategoryMovie("animation")}>
            <p>Animation</p>
          </a>
          <a onClick={() => handleCategoryMovie("comedy")}>
            <p>Comedy</p>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {movies.map((movie, index) => (
            <ImageCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListMovies;
