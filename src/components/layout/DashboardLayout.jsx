import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#050505] text-zinc-100">
      <Sidebar />

      <div className="flex-1 min-h-screen">
        <Navbar />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
