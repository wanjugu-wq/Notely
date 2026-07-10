import { Bell, MagnifyingGlass, UserCircle } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-18 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      {/* Search */}

      <div className="relative w-105">
        <MagnifyingGlass
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search notes..."
          className="
            w-full
            rounded-xl
            border
            border-gray-200
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

      {/* Right */}

      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-blue-600 transition">
          <Bell size={24} />
        </button>

        <div className="flex items-center gap-3">
          <UserCircle size={38} weight="fill" className="text-blue-600" />

          <div>
            <p className="font-semibold text-sm">Michelle</p>

            <p className="text-xs text-gray-500">michelle@email.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
