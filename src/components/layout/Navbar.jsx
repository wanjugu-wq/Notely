import {
  Bell,
  MagnifyingGlass,
  Moon,
  Sun,
  UserCircle,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-8 shadow-sm">
      <div className="relative w-full max-w-md">
        <MagnifyingGlass
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
        />

        <input
          type="text"
          placeholder="Search notes..."
          className="w-full rounded-full border border-[var(--border)] bg-[var(--panel)] py-3 pl-11 pr-4 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="rounded-full border border-[var(--border)] bg-[var(--panel)] p-2 text-[var(--text)] transition hover:border-[var(--accent)]"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="rounded-full border border-[var(--border)] bg-[var(--panel)] p-2 text-[var(--muted)] transition hover:text-[var(--text)]">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-2">
          <UserCircle size={34} weight="fill" className="text-[var(--text)]" />

          <div>
            <p className="text-sm font-semibold text-[var(--text)]">
              {user?.username || "Guest"}
            </p>
            <p className="text-xs text-[var(--muted)]">
              {user?.email || "No email"}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
