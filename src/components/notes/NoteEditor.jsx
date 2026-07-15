import Button from "../ui/Button";
import Input from "../ui/Input";
import LabelChip from "../labels/LabelChip";

export default function NoteEditor({ note }) {
  return (
    <div className="rounded-4xl border border-zinc-800 bg-zinc-950 p-8 shadow-lg shadow-black/20">
      <Input placeholder="Note Title" defaultValue={note?.title} />

      <textarea
        rows="10"
        defaultValue={note?.content}
        className="mt-6 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none transition focus:border-white"
        placeholder="Write your note..."
      />

      <div className="mt-6">
        <h4 className="mb-2 text-sm font-semibold text-zinc-300">Labels</h4>

        <div className="flex flex-wrap gap-2">
          {note?.labels?.map((label) => (
            <LabelChip key={label.id} label={label.name} color={label.color} removable />
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Button>Save Note</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </div>
  );
}
