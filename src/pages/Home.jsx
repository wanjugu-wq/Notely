import { Link } from "react-router-dom";
import { ArrowRight, FolderSimple, NotePencil, ShieldCheck } from "@phosphor-icons/react";

import Button from "../components/ui/Button";

const featureCards = [
  {
    title: "Capture ideas instantly",
    description: "Create notes with folders and labels so your work stays organized.",
    icon: NotePencil,
  },
  {
    title: "Keep projects tidy",
    description: "Group notes by folder and revisit the right context whenever you need it.",
    icon: FolderSimple,
  },
  {
    title: "Stay focused",
    description: "A calm, distraction-free workspace helps you review important items fast.",
    icon: ShieldCheck,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="text-2xl font-black uppercase tracking-[0.3em] text-white">NoteNest</div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium text-zinc-400 transition hover:text-white">
            Sign in
          </Link>

          <Link to="/register">
            <Button>Get started</Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <section className="grid items-center gap-10 rounded-4xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/40 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <span className="inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
              Your notes, beautifully organized
            </span>

            <h1 className="hero-title mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Write clearly, plan better, and keep everything in one place.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              NoteNest helps students and professionals capture ideas, organize projects, and revisit notes without the clutter.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/register">
                <Button className="inline-flex items-center gap-2">
                  Start free
                  <ArrowRight size={18} />
                </Button>
              </Link>

              <Link to="/dashboard" className="inline-flex items-center rounded-full border border-zinc-800 px-5 py-2.5 font-semibold text-zinc-300 transition hover:bg-zinc-900 hover:text-white">
                View dashboard
              </Link>
            </div>
          </div>

          <div className="rounded-4xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-zinc-800 p-8 text-white shadow-lg">
            <div className="rounded-3xl border border-zinc-700 bg-black/50 p-5 backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">Snapshot</p>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-zinc-800 bg-white/10 p-4">
                  <p className="text-3xl font-semibold text-white">24</p>
                  <p className="text-sm text-zinc-400">Active notes this week</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-white/10 p-4">
                  <p className="text-3xl font-semibold text-white">4</p>
                  <p className="text-sm text-zinc-400">Folders ready to organize</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <Icon size={24} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{feature.title}</h2>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{feature.description}</p>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Home;
