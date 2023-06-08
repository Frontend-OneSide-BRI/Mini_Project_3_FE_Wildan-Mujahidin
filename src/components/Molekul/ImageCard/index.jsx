import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ movie }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const onClickDetail = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClickDetail}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.category}
      />
      {hovered && (
        <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 text-white p-2">
          {movie.title}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
