import { X } from "@phosphor-icons/react";
import Sidebar from "./Sidebar";

const MobileSidebar = ({
  open,
  onClose,
}) => {
  return (
    <>
      {/* Dark overlay */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden

        ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}

      <div
        className={`fixed left-0 top-0 z-50 h-screen transition-transform duration-300 md:hidden

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="relative">

          <Sidebar />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-xl bg-[var(--surface)] p-2 shadow-md"
          >
            <X size={20} />
          </button>

        </div>
      </div>
    </>
  );
};

export default MobileSidebar;