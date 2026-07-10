import { NavLink } from "react-router-dom";

import {
  House,
  Notebook,
  FolderSimple,
  UserCircle,
  SignOut,
} from "@phosphor-icons/react";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: House,
  },
  {
    name: "Notes",
    path: "/notes",
    icon: Notebook,
  },
  {
    name: "Folders",
    path: "/folders",
    icon: FolderSimple,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: UserCircle,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-white border-r border-gray-200 px-5 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-12">NoteNest</h1>

      <nav className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-xl
                transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }
                `
              }
            >
              <Icon size={22} />

              <span className="font-medium">{link.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <button
        className="
          mt-16
          flex
          items-center
          gap-4
          px-4
          py-3
          text-red-500
          hover:bg-red-50
          rounded-xl
          transition
        "
      >
        <SignOut size={22} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
