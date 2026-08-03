import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { CaretDown, FolderSimple, Plus } from "@phosphor-icons/react";

const WorkspaceList = ({ collapsed }) => {
  const [expanded, setExpanded] = useState(true);
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const workspaceResponse = await fetch(
          "http://localhost:3001/workspaces",
        );

        const memberResponse = await fetch(
          "http://localhost:3001/workspace_members",
        );

        const workspaceData = await workspaceResponse.json();
        const memberData = await memberResponse.json();

        const userMemberships = memberData.filter(
          (member) => member.user_id === currentUser.id,
        );

        const userWorkspaces = workspaceData.filter((workspace) =>
          userMemberships.some(
            (member) => member.workspace_id === workspace.id,
          ),
        );

        setWorkspaces(userWorkspaces);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser) {
      fetchWorkspaces();
    }
  }, [currentUser]);

  if (collapsed) {
    return (
      <button
        className="flex justify-center rounded-2xl p-3 text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--text)]"
        title="Workspaces"
      >
        <FolderSimple size={22} />
      </button>
    );
  }

  return (
    <div className="mt-2">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--text)]"
      >
        <div className="flex items-center gap-3">
          <FolderSimple size={22} />
          <span className="font-medium">Workspaces</span>
        </div>

        <CaretDown
          size={18}
          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <div className="ml-8 mt-2 flex flex-col gap-1">
          {loading ? (
            <p className="text-sm text-[var(--muted)]">Loading...</p>
          ) : workspaces.length === 0 ? (
            <p className="text-sm text-[var(--muted)]">No workspaces</p>
          ) : (
            workspaces.map((workspace) => (
              <NavLink
                key={workspace.id}
                to={`/workspace/${workspace.id}`}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-[var(--text)] text-[var(--surface)]"
                      : "text-[var(--muted)] hover:bg-[var(--panel)] hover:text-[var(--text)]"
                  }`
                }
              >
                {workspace.name}
              </NavLink>
            ))
          )}

          <button className="mt-2 flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--text)]">
            <Plus size={16} />
            New Workspace
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkspaceList;
