import { useState, useEffect } from "react";
import { Login, Signup, Home } from "./Components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
