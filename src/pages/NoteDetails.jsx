import { Link, useParams } from "react-router-dom";
import { ArrowLeft, PushPin, Tag } from "@phosphor-icons/react";

import { notes } from "../data/notes";

const NoteDetails = () => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === Number(id));

  if (!note) {
    return (
      <div className="rounded-[2rem] border border-gray-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Note not found</h1>
        <p className="mt-2 text-sm text-gray-600">The note you are looking for does not exist.</p>
        <Link to="/notes" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          <ArrowLeft size={16} />
          Back to notes
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/notes" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
        <ArrowLeft size={16} />
        Back to notes
      </Link>

      <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Note details</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">{note.title}</h1>
          </div>

          {note.pinned ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
              <PushPin size={16} weight="fill" />
              Pinned
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">{note.folder}</span>
          <span>Created {note.createdAt}</span>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <p className="text-base leading-8 text-gray-700">{note.content}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">Labels</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {note.labels.map((label) => (
              <span key={label.id} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700">
                <Tag size={14} />
                {label.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;
