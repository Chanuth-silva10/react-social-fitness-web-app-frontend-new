import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Authentication from "./pages/Authentication/Authentication";
import HomePage from "./pages/HomePage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProfileAction } from "./Redux/Auth/auth.action";
import { ThemeProvider } from "@emotion/react";
import { darTheme } from "./theme/DarkTheme";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [jwtChecked, setJwtChecked] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getProfileAction(jwt))
        .then(() => setJwtChecked(true))
        .catch(() => setJwtChecked(true));
    } else {
      setJwtChecked(true);
    }
  }, [dispatch]);

  if (!jwtChecked) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={darTheme}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              auth.user ? <HomePage /> : <Navigate to="/login" replace />
            }
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
