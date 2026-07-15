const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200",
    secondary: "bg-zinc-900 border border-zinc-800 text-zinc-100 hover:bg-zinc-800",
    danger: "bg-zinc-100 text-black hover:bg-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full px-5 py-2.5 font-semibold transition duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
