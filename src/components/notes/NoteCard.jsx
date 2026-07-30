import { PushPin, PencilSimple, Trash, DotsThree } from "@phosphor-icons/react";

import LabelChip from "../labels/LabelChip";

export default function NoteCard({ note }) {
  return (
    <div className="flex h-55 flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-5 shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-[var(--text)]">
            {note.title}
          </h3>

          {note.pinned && (
            <PushPin size={18} weight="fill" className="text-[var(--text)]" />
          )}
        </div>

        <p className="mt-3 text-sm leading-6 text-[var(--muted)] line-clamp-3">
          {note.content}
        </p>
      </div>

      <div>
        <span className="mb-3 inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
          {note.folder}
        </span>

        <div className="mb-4 flex flex-wrap gap-2">
          {note.labels.map((label) => (
            <LabelChip key={label.id} label={label.name} color={label.color} />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <small className="text-xs text-[var(--muted)]">
            {note.createdAt}
          </small>

          <div className="flex gap-2">
            <button className="text-[var(--muted)] hover:text-[var(--text)]">
              <PencilSimple size={18} />
            </button>

            <button className="text-[var(--muted)] hover:text-[var(--text)]">
              <Trash size={18} />
            </button>

            <button className="text-[var(--muted)] hover:text-[var(--text)]">
              <DotsThree size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
