const Button = ({ placeholder, style, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#E50914] px-4 py-2 text-white rounded-md font-bold text-xs hover:scale-105 disabled:opacity-50 hover:disabled:scale-100 ${style}`}
      {...props}
    >
      {placeholder}
    </button>
  );
};

export default Button;
