import NoteCard from "./NoteCard";

export default function NoteList({ notes }) {
  if (!notes.length) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-10 text-center">
        <h2 className="text-xl font-semibold text-gray-700">No Notes Yet</h2>

        <p className="text-gray-500 mt-2">
          Create your first note to get started.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
      "
    >
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}
