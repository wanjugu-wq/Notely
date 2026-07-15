import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 py-10">
      <div className="w-full max-w-md rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-2xl shadow-black/10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[var(--text)]">
            Sign in to NoteNest
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Continue where you left off and manage your notes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[var(--muted)]">
              <input
                type="checkbox"
                className="rounded border-[var(--border)] bg-[var(--panel)] text-[var(--accent)] focus:ring-[var(--accent)]"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="font-medium text-[var(--muted)] hover:text-[var(--text)]"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[var(--text)] hover:text-[var(--muted)]"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
