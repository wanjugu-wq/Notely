import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

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
