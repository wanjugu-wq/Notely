import Button from "../ui/Button";
import Input from "../ui/Input";
import LabelChip from "../labels/LabelChip";

export default function NoteEditor({ note }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <Input placeholder="Note Title" defaultValue={note?.title} />

      <textarea
        rows="10"
        defaultValue={note?.content}
        className="
          w-full
          mt-6
          border
          border-gray-300
          rounded-xl
          p-4
          resize-none
          focus:outline-none
          focus:ring-2
          focus:ring-blue-200
          focus:border-blue-600
        "
        placeholder="Write your note..."
      />

      <div className="mt-6">
        <h4 className="text-sm font-semibold mb-2">Labels</h4>

        <div className="flex gap-2 flex-wrap">
          {note?.labels?.map((label) => (
            <LabelChip
              key={label.id}
              label={label.name}
              color={label.color}
              removable
            />
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
