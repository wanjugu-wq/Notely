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
      <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Collections</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">Organize your notes by folder</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
          Group ideas, schoolwork, and personal reminders into focused spaces that are easy to revisit.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {foldersWithNotes.map((folder) => (
          <FolderCard key={folder.id} folder={folder} />
        ))}
      </div>

      <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Folder highlights</h2>
        <div className="mt-6 space-y-4">
          {foldersWithNotes.map((folder) => (
            <div key={folder.id} className="rounded-2xl border border-gray-200 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-gray-900">{folder.name}</p>
                  <p className="text-sm text-gray-500">{folder.description}</p>
                </div>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                  {folder.notes.length} notes
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {folder.notes.map((note) => (
                  <span key={note.id} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
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
