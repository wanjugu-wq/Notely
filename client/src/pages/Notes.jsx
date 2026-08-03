import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";

import NoteList from "../components/notes/NoteList";
import { notes } from "../data/notes";

const filters = ["All", "Pinned", "School", "Personal", "Work"];

const Notes = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesSearch =
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        activeFilter === "All" ||
        (activeFilter === "Pinned" && note.pinned) ||
        note.folder === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
            Library
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[var(--text)]">
            Your notes
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Search, filter, and jump straight into the note you need.
          </p>
        </div>

        <Link
          to="/notes/1"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-[var(--background)] transition hover:bg-[var(--accent-soft)]"
        >
          <Plus size={18} />
          New note
        </Link>
      </div>

      <div className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <MagnifyingGlass
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
            />
            <input
              type="text"
              placeholder="Search by title or content"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-full border border-[var(--border)] bg-[var(--panel)] py-3 pl-11 pr-4 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? "bg-[var(--accent)] text-[var(--background)]"
                    : "bg-[var(--panel)] text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <NoteList notes={filteredNotes} />
        </div>
      </div>
    </div>
  );
};

export default Notes;
