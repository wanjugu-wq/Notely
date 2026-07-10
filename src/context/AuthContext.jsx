import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if a user is already "logged in"
  useEffect(function () {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  // Mock Login
  function login(email, password) {
    // Replace with API call later
    const mockUser = {
      id: 1,
      username: "Caleb",
      email,
    };

    localStorage.setItem("user", JSON.stringify(mockUser));
    setUser(mockUser);
  }

  // Mock Register
  function register(username, email, password) {
    // Replace with API call later
    const mockUser = {
      id: 1,
      username,
      email,
    };

    localStorage.setItem("user", JSON.stringify(mockUser));
    setUser(mockUser);
  }

  // Logout
  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };