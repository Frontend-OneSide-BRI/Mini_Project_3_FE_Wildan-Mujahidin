import React from "react";
import { Button } from "../../Atom";

const CardDetail = ({ movie }) => {
  return (
    <div className="shadow-xl p-16 items-center backdrop-blur-sm bg-white/30 lg:flex">
      <figure className="lg:w-[25%] flex justify-center">
        <img
          className="pb-4 lg:p-0"
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
      </figure>
      <div className="flex flex-col lg:ml-9 justify-between lg:w-[75%]">
        <div className="text-lg gap-2 flex flex-col">
          <h3 className="card-title  justify-center font-extrabold slice text-3xl  mb-5 text-center">
            {movie.title}
          </h3>
          <p>
            <strong>Title:</strong> {movie.title}
          </p>
          <p>
            <strong>Movie ID:</strong> {movie.id}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime}
          </p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime}
          </p>
          <p>
            <strong>Genre: </strong>
            {movie.genres
              ?.map((genre) => {
                return genre.name;
              })
              .join(", ")}
          </p>
          <p>
            <strong>Popularity:</strong> {movie.popularity}
          </p>
          <p className="text-justify">
            <strong>Overview: </strong>
            {movie.overview}
          </p>
          <div className="w-full flex justify-end ">
            <Button placeholder={"Add to Favorites"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
