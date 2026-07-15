import { FolderSimple } from "@phosphor-icons/react";

const FolderCard = ({ folder }) => {
  return (
    <div className="cursor-pointer rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${folder.color}20` }}
        >
          <FolderSimple size={24} weight="fill" color={folder.color} />
        </div>

        <span className="text-sm text-[var(--muted)]">
          {folder.noteCount} Notes
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">
        {folder.name}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
        {folder.description}
      </p>
    </div>
  );
};

export default FolderCard;
