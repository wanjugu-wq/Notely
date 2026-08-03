import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">Page not found.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-white hover:bg-slate-800">
          Go home
        </Link>
      </div>
    </div>
  );
}