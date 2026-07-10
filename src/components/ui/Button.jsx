const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100",

    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5
        py-2.5
        rounded-lg
        font-semibold
        transition
        duration-200
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
