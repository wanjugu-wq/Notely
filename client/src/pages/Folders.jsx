import FolderCard from "../components/folders/FolderCard";
import { folders } from "../data/folders";
import { notes } from "../data/notes";

const Folders = () => {
  const foldersWithNotes = folders.map((folder) => ({
    ...folder,
    notes: notes.filter((note) => note.folder === folder.name),
  }));

  return (
    <div className="space-y-8">
      <div className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg shadow-black/10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
          Collections
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--text)]">
          Organize your notes by folder
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          Group ideas, schoolwork, and personal reminders into focused spaces
          that are easy to revisit.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {foldersWithNotes.map((folder) => (
          <FolderCard key={folder.id} folder={folder} />
        ))}
      </div>

      <div className="rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-lg shadow-black/10">
        <h2 className="text-xl font-semibold text-[var(--text)]">
          Folder highlights
        </h2>
        <div className="mt-6 space-y-4">
          {foldersWithNotes.map((folder) => (
            <div
              key={folder.id}
              className="rounded-2xl border border-[var(--border)] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-[var(--text)]">
                    {folder.name}
                  </p>
                  <p className="text-sm text-[var(--muted)]">
                    {folder.description}
                  </p>
                </div>
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-sm font-medium text-[var(--background)]">
                  {folder.notes.length} notes
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {folder.notes.map((note) => (
                  <span
                    key={note.id}
                    className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-sm font-medium text-[var(--muted)]"
                  >
                    {note.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Folders;
