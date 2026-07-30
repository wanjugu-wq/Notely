import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  List,
  X,
  House,
  PushPin,
  BoxArrowDown,
  UserCircle,
  GearSix,
  SignOut,
} from "@phosphor-icons/react";

import SidebarItem from "./SidebarItem";
import WorkspaceList from "./WorkspaceList";
import UserCard from "./UserCard";

const Sidebar = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
    name: "",
    email: "",
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setMobileOpen((prev) => !prev);
    } else {
      setCollapsed((prev) => !prev);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAuthenticated");

    toast.success("Logged out!");

    navigate("/login");
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={handleToggle}
          className="fixed left-4 top-4 z-50 rounded-xl bg-[var(--surface)] p-3 shadow-lg"
        >
          {mobileOpen ? <X size={22} /> : <List size={22} />}
        </button>
      )}

      {/* Overlay */}
      {isMobile && mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          flex h-screen flex-col justify-between
          border-r border-[var(--border)]
          bg-[var(--surface)]
          transition-all duration-300

          ${
            isMobile
              ? mobileOpen
                ? "translate-x-0 w-72"
                : "-translate-x-full w-72"
              : collapsed
                ? "w-20"
                : "w-72"
          }
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between px-5 py-4">
          {!collapsed && (
            <h1 className="font-oswald text-2xl tracking-widest text-[var(--text)]">
              NoteNest
            </h1>
          )}

          {!isMobile && (
            <button
              onClick={handleToggle}
              className="rounded-xl p-2 transition hover:bg-[var(--panel)]"
            >
              <List size={20} />
            </button>
          )}
        </div>

        {/* Search */}

        {!collapsed && (
          <div className="px-5">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm outline-none transition focus:border-[var(--text)]"
            />
          </div>
        )}

        {/* Navigation */}
        <div className="mt-2 flex-1 px-4">
        <nav className="flex flex-col">
          <SidebarItem
            icon={House}
            label="Home"
            to="/dashboard"
            collapsed={collapsed}
          />

          <WorkspaceList collapsed={collapsed}/>

          <SidebarItem
            icon={UserCircle}
            label="Personal"
            to="/personal"
            collapsed={collapsed}
          />

          <SidebarItem
            icon={PushPin}
            label="Pinned"
            to="/pinned"
            collapsed={collapsed}
          />

          <SidebarItem
            icon={BoxArrowDown}
            label="Archive"
            to="/archive"
            collapsed={collapsed}
          />
        </nav>
        </div>

        {/* Bottom */}

        <div className="border-t border-[var(--border)] p-4">
          <SidebarItem
            icon={GearSix}
            label="Settings"
            to="/settings"
            collapsed={collapsed}
          />

          <div className="my-3" />

          <UserCard user={currentUser} collapsed={collapsed} size={36}/>

          <button
            onClick={handleLogout}
            className="mt-4 flex w-full items-center gap-3 rounded-2xl px-4 py-2 text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--text)]"
          >
            <SignOut size={24} />

            {!collapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;