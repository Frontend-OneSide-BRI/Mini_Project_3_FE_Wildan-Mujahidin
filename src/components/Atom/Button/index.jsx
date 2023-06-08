const Button = ({ placeholder, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#E50914] px-4 py-2 text-white rounded-md font-bold text-xs hover:scale-105 ${style}`}
    >
      {placeholder}
    </button>
  );
};

export default Button;
