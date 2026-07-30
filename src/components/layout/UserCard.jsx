import { UserCircle } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const UserCard = ({ user, collapsed }) => {
  if (!user) return null;

  return (
    <NavLink
      to="/profile"
      className={`flex items-center rounded-2xl transition-all duration-200 hover:bg-[var(--panel)] ${
        collapsed ? "justify-center p-3" : "gap-3 p-3"
      }`}
    >
      {user.avatar ? (
        <img
          src={user.avatar}
          alt={user.name}
          className="h-10 w-10 rounded-full object-cover"
        />
      ) : (
        <UserCircle
          size={40}
          weight="duotone"
          className="text-[var(--muted)]"
        />
      )}

      {!collapsed && (
        <div className="overflow-hidden">
          <p className="truncate font-medium text-[var(--text)]">{user.name}</p>

          <p className="truncate text-xs text-[var(--muted)]">{user.email}</p>
        </div>
      )}
    </NavLink>
  );
};

export default UserCard;
