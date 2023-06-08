const Button = ({ placeholder, style }) => {
  return (
    <button
      className={`bg-[#E50914] px-4 py-2 text-white rounded-md font-bold text-xs ${style}`}
    >
      {placeholder}
    </button>
  );
};

export default Button;
