import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/providers/AuthProvider";
import { LoginForm } from "../components/auth/LoginForm";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (email, password) => {
    setError("");
    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate("/documents", { replace: true });
    } catch (err) {
      console.error(err);
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4 py-12 sm:px-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold">Login</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Enter your credentials to continue.
        </p>
        <LoginForm onSubmit={handleLogin} error={error} loading={isSubmitting} />
      </div>
    </div>
  );
}