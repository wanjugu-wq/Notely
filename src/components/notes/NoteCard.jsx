import {
  PushPin,
  PencilSimple,
  Trash,
  DotsThree,
} from "@phosphor-icons/react";

import LabelChip from "../labels/LabelChip";

export default function NoteCard({ note }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-gray-200 p-5 h-55 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {note.title}
          </h3>

          {note.pinned && (
            <PushPin
              size={18}
              weight="fill"
              className="text-yellow-500"
            />
          )}
        </div>

        <p className="text-sm text-gray-600 mt-3 line-clamp-3">
          {note.content}
        </p>
      </div>

      <div>
        <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-3">
          {note.folder}
        </span>

        <div className="flex flex-wrap gap-2 mb-4">
          {note.labels.map((label) => (
            <LabelChip
              key={label.id}
              label={label.name}
              color={label.color}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <small className="text-gray-400 text-xs">
            {note.createdAt}
          </small>

          <div className="flex gap-2">
            <button className="text-gray-500 hover:text-blue-600">
              <PencilSimple size={18} />
            </button>

            <button className="text-gray-500 hover:text-red-500">
              <Trash size={18} />
            </button>

            <button className="text-gray-500 hover:text-gray-800">
              <DotsThree size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}