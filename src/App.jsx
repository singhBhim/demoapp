import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlayerRedirect from "./pages/PlayerRedirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:name/:id" element={<PlayerRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
