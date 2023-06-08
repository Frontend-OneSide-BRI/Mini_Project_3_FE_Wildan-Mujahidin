import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../service/movieSlice";
import { Header, ImageCard } from "../../components/Molekul";

const ListMovies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
