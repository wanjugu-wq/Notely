import { FolderSimple } from "@phosphor-icons/react";

const FolderCard = ({ folder }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray-200
        p-6
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-md
        cursor-pointer
      "
    >
      <div className="flex items-center justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${folder.color}20` }}
        >
          <FolderSimple size={24} weight="fill" color={folder.color} />
        </div>

        <span className="text-sm text-gray-500">{folder.noteCount} Notes</span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-900">
        {folder.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500 leading-6">
        {folder.description}
      </p>
    </div>
  );
};

export default FolderCard;
