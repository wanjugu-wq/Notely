import { NavLink, useNavigate } from "react-router-dom";
import { House, Notebook, FolderSimple, UserCircle, SignOut } from "@phosphor-icons/react";
import { useAuth } from "../../context/AuthContext";

const links = [
  { name: "Dashboard", path: "/dashboard", icon: House },
  { name: "Notes", path: "/notes", icon: Notebook },
  { name: "Folders", path: "/folders", icon: FolderSimple },
  { name: "Profile", path: "/profile", icon: UserCircle },
];

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="min-h-screen w-72 border-r border-zinc-800 bg-[#050505] px-5 py-8">
      <h1 className="mb-12 text-3xl font-black uppercase tracking-[0.25em] text-white">NoteNest</h1>

      <nav className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-2xl px-4 py-3 transition ${
                  isActive
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span className="font-medium">{link.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-16 flex items-center gap-4 rounded-2xl px-4 py-3 text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
      >
        <SignOut size={20} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
