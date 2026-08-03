import { Tag, X } from "@phosphor-icons/react";

const colorVariants = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  green: "bg-green-100 text-green-700 border-green-200",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
  red: "bg-red-100 text-red-700 border-red-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
  gray: "bg-gray-100 text-gray-700 border-gray-200",
};

export default function LabelChip({
  label,
  color = "blue",
  removable = false,
  onRemove,
  icon = true,
}) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-1.5
        px-3
        py-1
        rounded-full
        border
        text-xs
        font-medium
        transition-all
        duration-200
        ${colorVariants[color] || colorVariants.blue}
      `}
    >
      {icon && <Tag size={14} weight="fill" />}

      <span>{label}</span>

      {removable && (
        <button
          type="button"
          aria-label={`Remove ${label}`}
          onClick={onRemove}
          className="
            rounded-full
            p-0.5
            hover:bg-black/10
            transition-colors
            duration-200
          "
        >
          <X size={12} weight="bold" />
        </button>
      )}
    </div>
  );
}
