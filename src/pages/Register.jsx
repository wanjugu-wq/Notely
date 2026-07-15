import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    register(name, email, password);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4 py-10">
      <div className="w-full max-w-md rounded-4xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/40">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">Create account</p>
          <h1 className="mt-3 text-3xl font-bold text-white">Start organizing with NoteNest</h1>
          <p className="mt-2 text-sm text-zinc-400">Join today and build a calm space for your ideas.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Input label="Full name" placeholder="Alex Morgan" value={name} onChange={(event) => setName(event.target.value)} />
          <Input label="Email" type="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Input label="Password" type="password" placeholder="Choose a strong password" value={password} onChange={(event) => setPassword(event.target.value)} />

          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Already have an account? {" "}
          <Link to="/login" className="font-semibold text-white hover:text-zinc-300">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
