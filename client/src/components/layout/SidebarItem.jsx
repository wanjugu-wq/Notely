import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, to, collapsed = false }) => {
  return (
    <NavLink
      to={to}
      title={collapsed ? label : ""}
      className={({ isActive }) =>
        `group flex items-center rounded-2xl transition-all duration-200 ${
          collapsed ? "justify-center p-3" : "gap-3 px-4 py-3"
        } ${
          isActive
            ? "bg-[var(--text)] text-[var(--surface)]"
            : "text-[var(--muted)] hover:bg-[var(--panel)] hover:text-[var(--text)]"
        }`
      }
    >
      <Icon size={22} weight="regular" className="flex-shrink-0" />

      {!collapsed && <span className="font-medium tracking-wide">{label}</span>}
    </NavLink>
  );
};

export default SidebarItem;
