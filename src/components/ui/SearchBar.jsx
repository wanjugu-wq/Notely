import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = ({ placeholder = "Search..." }) => {
  return (
    <div className="relative w-full max-w-md">
      <MagnifyingGlass
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-gray-50
          py-3
          pl-11
          pr-4
          text-sm
          outline-none
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-100
        "
      />
    </div>
  );
};

export default SearchBar;
