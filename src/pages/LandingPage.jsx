import { Link } from "react-router-dom";
import { Logo } from "../components/marketing/Logo";
import { Heading } from "../components/marketing/Heading";
import { Heroes } from "../components/marketing/Heroes";
import { Footer } from "../components/marketing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-slate-200 dark:bg-slate-950/95 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Logo />
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-200 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Register
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-10">
              <Heading />
            </div>
            <Heroes />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}