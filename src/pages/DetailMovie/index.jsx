import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CardDetail, Header } from "../../components/Molekul";

export const DetailMovie = () => {
  const { id_movie } = useParams();
  const [movie, setMovie] = useState("");

  axios
    .get(`https://api.themoviedb.org/3/movie/${id_movie}language=en-US`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_READ}`,
      },
    })
    .then((data) => {
      setMovie(data.data);
    })
    .catch((error) => {
      alert(error.toString());
    });

  return (
    <div
      id="head"
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="bg-slate-800">
        <Header />
      </div>
      <div className="flex justify-center  items-center  p-4 md:p-14 lg:p-28 bg-gradient-to-t from-white  dark:from-black">
        <CardDetail movie={movie} />
      </div>
    </div>
  );
};

export default DetailMovie;
