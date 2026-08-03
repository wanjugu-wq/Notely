import { useState } from "react";
import Navigation from "../components/documents/Navigation";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
}