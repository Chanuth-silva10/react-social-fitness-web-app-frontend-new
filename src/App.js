import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./pages/Authentication/Authentication";
import Message from "./pages/Message/Message";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/message" element={<Message />}></Route>
        <Route path="/*" element={<Authentication />}></Route>
      </Routes>
    </div>
  );
}

export default App;