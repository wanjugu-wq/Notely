import { Routes, Route, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import DashboardLayout from "./components/layout/DashboardLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import NoteDetails from "./pages/NoteDetails";
import Folders from "./pages/Folders";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        gutter={12}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#FFFFFF",
            color: "#111111",
            border: "1px solid #E5E5E5",
            borderRadius: "18px",
            padding: "14px 18px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          },

          success: {
            iconTheme: {
              primary: "#111111",
              secondary: "#FFFFFF",
            },
          },

          error: {
            iconTheme: {
              primary: "#111111",
              secondary: "#FFFFFF",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Notes />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/notes/:id"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <NoteDetails />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/folders"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Folders />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
