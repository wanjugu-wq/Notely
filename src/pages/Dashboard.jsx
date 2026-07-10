import { Link } from "react-router-dom";
import { FolderSimple, NotePencil, PushPin } from "@phosphor-icons/react";

import NoteList from "../components/notes/NoteList";
import { folders } from "../data/folders";
import { notes } from "../data/notes";

const statCards = [
  {
    title: "Total notes",
    value: notes.length,
    icon: NotePencil,
  },
  {
    title: "Pinned",
    value: notes.filter((note) => note.pinned).length,
    icon: PushPin,
  },
  {
    title: "Folders",
    value: folders.length,
    icon: FolderSimple,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Welcome back to your workspace</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
            Review your latest notes, jump into active projects, and keep your ideas moving.
          </p>
        </div>

        <Link to="/notes" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          Create note
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {statCards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">{card.title}</p>
                <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                  <Icon size={20} />
                </div>
              </div>

              <p className="mt-4 text-3xl font-semibold text-gray-900">{card.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Recent notes</h2>
              <p className="mt-1 text-sm text-gray-500">A quick glance at your latest work.</p>
            </div>

            <Link to="/notes" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              View all
            </Link>
          </div>

          <div className="mt-6">
            <NoteList notes={notes.slice(0, 3)} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Folders</h2>
            <div className="mt-4 space-y-3">
              {folders.map((folder) => (
                <div key={folder.id} className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
                  <div>
                    <p className="font-medium text-gray-900">{folder.name}</p>
                    <p className="text-sm text-gray-500">{folder.noteCount} notes</p>
                  </div>
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: folder.color }} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Focus of the day</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Finish the React UI before backend integration and review the next steps for school planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
