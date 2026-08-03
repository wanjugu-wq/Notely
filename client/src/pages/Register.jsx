import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import toast from "react-hot-toast";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const newUser = {
        name,
        email,
        password,
      };

      await registerUser(newUser);

      toast.success("Account created successfully!");

      setTimeout(navigate("/login"), 4000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Unable to register.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 py-10">
      <div className="w-full max-w-md rounded-4xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-2xl shadow-black/10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
            Create account
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[var(--text)]">
            Start organizing with NoteNest
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Join today and build a calm space for your ideas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Input
            label="Full name"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="johndoe123@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Choose a strong password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[var(--text)] hover:text-[var(--muted)]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
