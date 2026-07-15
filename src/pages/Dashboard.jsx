import { Link } from "react-router-dom";
import { FolderSimple, NotePencil, PushPin } from "@phosphor-icons/react";

import NoteList from "../components/notes/NoteList";
import { folders } from "../data/folders";
import { notes } from "../data/notes";

const statCards = [
  { title: "Total notes", value: notes.length, icon: NotePencil },
  {
    title: "Pinned",
    value: notes.filter((note) => note.pinned).length,
    icon: PushPin,
  },
  { title: "Folders", value: folders.length, icon: FolderSimple },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-2xl shadow-black/10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
            Overview
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[var(--text)]">
            Welcome back to your workspace
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            Review your latest notes, jump into active projects, and keep your
            ideas moving.
          </p>
        </div>

        <Link
          to="/notes"
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-[var(--background)] transition hover:bg-[var(--accent-soft)]"
        >
          Create note
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {statCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[var(--muted)]">
                  {card.title}
                </p>
                <div className="rounded-2xl bg-[var(--accent)] p-2 text-[var(--background)]">
                  <Icon size={20} />
                </div>
              </div>

              <p className="mt-4 text-3xl font-semibold text-[var(--text)]">
                {card.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[var(--text)]">
                Recent notes
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                A quick glance at your latest work.
              </p>
            </div>

            <Link
              to="/notes"
              className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--text)]"
            >
              View all
            </Link>
          </div>

          <div className="mt-6">
            <NoteList notes={notes.slice(0, 3)} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10">
            <h2 className="text-xl font-semibold text-[var(--text)]">
              Folders
            </h2>
            <div className="mt-4 space-y-3">
              {folders.map((folder) => (
                <div
                  key={folder.id}
                  className="flex items-center justify-between rounded-2xl border border-[var(--border)] px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-[var(--text)]">
                      {folder.name}
                    </p>
                    <p className="text-sm text-[var(--muted)]">
                      {folder.noteCount} notes
                    </p>
                  </div>
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: folder.color }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10">
            <h2 className="text-xl font-semibold text-[var(--text)]">
              Focus of the day
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Finish the React UI before backend integration and review the next
              steps for school planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
