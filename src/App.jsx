import { CssBaseline } from "@mui/material";
import AuthContextProvider from "./context/AuthenContext";
import PostContextProvider from "./context/PostContext";
import ThemeContextProvider from "./context/ThemeContext";
import Router from "./routes/Router";

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          <CssBaseline>
            <Router />
          </CssBaseline>
        </PostContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
