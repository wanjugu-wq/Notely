import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerService } from "../services/auth";
import { RegisterForm } from "../components/auth/RegisterForm";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (username, email, password) => {
    setError("");
    setIsSubmitting(true);

    try {
      await registerService(username, email, password);
      navigate("/login", { replace: true });
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please check your details and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4 py-12 sm:px-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold">Register</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Create a new account to start using Notely.
        </p>
        <RegisterForm onSubmit={handleRegister} error={error} loading={isSubmitting} />
      </div>
    </div>
  );
}