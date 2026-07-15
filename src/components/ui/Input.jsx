const Input = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && <label className="text-sm font-medium text-zinc-300">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:border-white"
      />
    </div>
  );
};

export default Input;
