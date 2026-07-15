import { Bell, MagnifyingGlass, UserCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-zinc-800 bg-[#050505] px-8">
      <div className="relative w-full max-w-md">
        <MagnifyingGlass size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

        <input
          type="text"
          placeholder="Search notes..."
          className="w-full rounded-full border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-sm text-zinc-100 outline-none transition focus:border-zinc-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="rounded-full border border-zinc-800 p-2 text-zinc-400 transition hover:text-white">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2">
          <UserCircle size={34} weight="fill" className="text-white" />

          <div>
            <p className="text-sm font-semibold text-white">{user?.username || "Guest"}</p>
            <p className="text-xs text-zinc-500">{user?.email || "No email"}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-full border border-zinc-800 px-3 py-2 text-sm text-zinc-400 transition hover:border-white hover:text-white"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
