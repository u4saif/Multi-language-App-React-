import { Suspense } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Suspense fallback={null}>
      <Home />;
    </Suspense>
  );
}

export default App;
