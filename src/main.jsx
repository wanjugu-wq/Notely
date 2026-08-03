import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
<<<<<<< HEAD
=======
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { AuthProvider } from "./components/providers/AuthProvider";
import { SearchProvider } from "./components/providers/SearchProvider";
import { SettingsProvider } from "./components/providers/SettingsProvider";
import { CoverImageProvider } from "./components/providers/CoverImageProvider";
>>>>>>> 9b58c8b (folder layout)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <App />
    </BrowserRouter>
  </StrictMode>,
);
=======
      <ThemeProvider>
        <AuthProvider>
          <SearchProvider>
            <SettingsProvider>
              <CoverImageProvider>
                <App />
              </CoverImageProvider>
            </SettingsProvider>
          </SearchProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
>>>>>>> 9b58c8b (folder layout)
