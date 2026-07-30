import { Link } from "react-router-dom";
import { NotePencil, UserCircle } from "@phosphor-icons/react";

import { folders } from "../data/folders";
import { notes } from "../data/notes";
import { user } from "../data/user";

const Profile = () => {
  const recentNotes = notes.slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg shadow-black/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.username}
              className="h-20 w-20 rounded-full border border-[var(--border)]"
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                Profile
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-[var(--text)]">
                {user.username}
              </h1>
              <p className="mt-2 text-sm text-[var(--muted)]">{user.email}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-sm text-[var(--muted)]">
            Joined {user.joined}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10">
          <p className="text-sm font-medium text-[var(--muted)]">
            Notes created
          </p>
          <p className="mt-3 text-3xl font-semibold text-[var(--text)]">
            {notes.length}
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10">
          <p className="text-sm font-medium text-[var(--muted)]">Folders</p>
          <p className="mt-3 text-3xl font-semibold text-[var(--text)]">
            {folders.length}
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10">
          <p className="text-sm font-medium text-[var(--muted)]">
            Pinned notes
          </p>
          <p className="mt-3 text-3xl font-semibold text-[var(--text)]">
            {notes.filter((note) => note.pinned).length}
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg shadow-black/10">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-[var(--accent)] p-2 text-[var(--background)]">
              <UserCircle size={22} />
            </div>
            <h2 className="text-xl font-semibold text-[var(--text)]">
              Account details
            </h2>
          </div>

          <div className="mt-6 space-y-4 text-sm text-[var(--muted)]">
            <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3">
              <span>Username</span>
              <span className="font-medium text-[var(--text)]">
                {user.username}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3">
              <span>Email</span>
              <span className="font-medium text-[var(--text)]">
                {user.email}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3">
              <span>Member since</span>
              <span className="font-medium text-[var(--text)]">
                {user.joined}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg shadow-black/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[var(--accent)] p-2 text-[var(--background)]">
                <NotePencil size={22} />
              </div>
              <h2 className="text-xl font-semibold text-[var(--text)]">
                Recent notes
              </h2>
            </div>
            <Link
              to="/notes"
              className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--text)]"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {recentNotes.map((note) => (
              <div
                key={note.id}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[var(--text)]">
                      {note.title}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {note.folder}
                    </p>
                  </div>
                  <span className="text-sm text-[var(--muted)]">
                    {note.createdAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
