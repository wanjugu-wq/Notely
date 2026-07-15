import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4 py-10">
      <div className="w-full max-w-md rounded-4xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/40">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Reset password</p>
          <h1 className="mt-3 text-3xl font-bold text-white">Recover your account</h1>
          <p className="mt-2 text-sm text-zinc-400">Enter your email and we will send you recovery instructions.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Button type="submit" className="w-full">
            Send reset link
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Remembered it? {" "}
          <Link to="/login" className="font-semibold text-white hover:text-zinc-300">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
