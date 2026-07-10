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
      <div className="flex flex-col gap-4 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Library</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Your notes</h1>
          <p className="mt-2 text-sm text-gray-600">Search, filter, and jump straight into the note you need.</p>
        </div>

        <Link to="/notes/1" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          <Plus size={18} />
          New note
        </Link>
      </div>

      <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <MagnifyingGlass size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title or content"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
