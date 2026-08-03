import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 py-10">
      <div className="w-full max-w-md rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-2xl shadow-black/10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
            Almost there
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[var(--text)]">
            Choose a new password
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Pick a fresh password to secure your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Input
            label="New password"
            type="password"
            placeholder="Enter a new password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Input
            label="Confirm password"
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Button type="submit" className="w-full">
            Save password
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          <Link
            to="/login"
            className="font-semibold text-[var(--text)] hover:text-[var(--muted)]"
          >
            Return to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
