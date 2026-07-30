const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-[var(--accent)] text-[var(--background)] hover:bg-[var(--accent-soft)]",
    secondary:
      "bg-[var(--panel)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)]",
    danger:
      "bg-[var(--accent-soft)] text-[var(--text)] hover:bg-[var(--panel)]",
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
