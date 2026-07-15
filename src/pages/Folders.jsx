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
      <div className="rounded-4xl border border-zinc-800 bg-zinc-950 p-8 shadow-lg shadow-black/20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Collections</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Organize your notes by folder</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          Group ideas, schoolwork, and personal reminders into focused spaces that are easy to revisit.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {foldersWithNotes.map((folder) => (
          <FolderCard key={folder.id} folder={folder} />
        ))}
      </div>

      <div className="rounded-4xl border border-zinc-800 bg-zinc-950 p-8 shadow-lg shadow-black/20">
        <h2 className="text-xl font-semibold text-white">Folder highlights</h2>
        <div className="mt-6 space-y-4">
          {foldersWithNotes.map((folder) => (
            <div key={folder.id} className="rounded-2xl border border-zinc-800 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">{folder.name}</p>
                  <p className="text-sm text-zinc-500">{folder.description}</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-black">
                  {folder.notes.length} notes
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {folder.notes.map((note) => (
                  <span key={note.id} className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm font-medium text-zinc-300">
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
