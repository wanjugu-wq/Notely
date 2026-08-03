import {
  Bell,
  List,
  MagnifyingGlass,
  Moon,
  Sun,
  UserCircle,
  SignOut,
} from "@phosphor-icons/react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 md:px-8">
      {/* Left */}

      <div className="flex items-center gap-4">
        {/* Mobile menu */}

        <button
          onClick={onMenuClick}
          className="rounded-xl p-2 transition hover:bg-[var(--panel)] md:hidden"
        >
          <List size={24} />
        </button>

        {/* Search */}

        <div className="relative hidden sm:block">
          <MagnifyingGlass
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
          />

          <input
            type="text"
            placeholder="Search notes..."
            className="w-60 rounded-full border border-[var(--border)] bg-[var(--panel)] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[var(--accent)] lg:w-96"
          />
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-2 md:gap-3">
        {/* Theme */}

        <button
          onClick={toggleTheme}
          className="rounded-full border border-[var(--border)] bg-[var(--panel)] p-2 transition hover:border-[var(--accent)]"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notifications */}

        <button className="rounded-full border border-[var(--border)] bg-[var(--panel)] p-2 transition hover:border-[var(--accent)]">
          <Bell size={18} />
        </button>

        {/* User */}

        <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-2">
          <UserCircle size={34} weight="fill" className="text-[var(--text)]" />

          <div className="hidden lg:block">
            <p className="text-sm font-semibold">{user?.username || "Guest"}</p>

            <p className="text-xs text-[var(--muted)]">
              {user?.email || "No email"}
            </p>
          </div>
        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="rounded-full border border-[var(--border)] p-2 transition hover:border-red-500 hover:text-red-500"
          title="Logout"
        >
          <SignOut size={18} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
