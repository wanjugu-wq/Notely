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
      const matchesSearch = note.title.toLowerCase().includes(search.toLowerCase()) || note.content.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = activeFilter === "All" || (activeFilter === "Pinned" && note.pinned) || note.folder === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-4xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/20 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Library</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Your notes</h1>
          <p className="mt-2 text-sm text-zinc-400">Search, filter, and jump straight into the note you need.</p>
        </div>

        <Link to="/notes/1" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200">
          <Plus size={18} />
          New note
        </Link>
      </div>

      <div className="rounded-4xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <MagnifyingGlass size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by title or content"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-full border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-white"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  activeFilter === filter ? "bg-white text-black" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
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
