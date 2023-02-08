import "./App.css";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
