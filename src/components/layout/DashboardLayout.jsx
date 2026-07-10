import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-slate-50">
      <Sidebar />

      <div className="flex-1 min-h-screen">
        <Navbar />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
