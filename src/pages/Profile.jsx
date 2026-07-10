import { Link } from "react-router-dom";
import { NotePencil, UserCircle } from "@phosphor-icons/react";

import { folders } from "../data/folders";
import { notes } from "../data/notes";
import { user } from "../data/user";

const Profile = () => {
  const recentNotes = notes.slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img src={user.avatar} alt={user.username} className="h-20 w-20 rounded-full border border-gray-200" />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Profile</p>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">{user.username}</h1>
              <p className="mt-2 text-sm text-gray-600">{user.email}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm text-blue-700">
            Joined {user.joined}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Notes created</p>
          <p className="mt-3 text-3xl font-semibold text-gray-900">{notes.length}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Folders</p>
          <p className="mt-3 text-3xl font-semibold text-gray-900">{folders.length}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Pinned notes</p>
          <p className="mt-3 text-3xl font-semibold text-gray-900">{notes.filter((note) => note.pinned).length}</p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
              <UserCircle size={22} />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Account details</h2>
          </div>

          <div className="mt-6 space-y-4 text-sm text-gray-600">
            <div className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
              <span>Username</span>
              <span className="font-medium text-gray-900">{user.username}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
              <span>Email</span>
              <span className="font-medium text-gray-900">{user.email}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
              <span>Member since</span>
              <span className="font-medium text-gray-900">{user.joined}</span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                <NotePencil size={22} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Recent notes</h2>
            </div>
            <Link to="/notes" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              View all
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {recentNotes.map((note) => (
              <div key={note.id} className="rounded-2xl border border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-gray-900">{note.title}</p>
                    <p className="mt-1 text-sm text-gray-500">{note.folder}</p>
                  </div>
                  <span className="text-sm text-gray-400">{note.createdAt}</span>
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
