import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/pages/Home';
import Publications from './components/pages/Publications';
import ResearchTalks from './components/pages/ResearchTalks';
import ETC from "./components/pages/ETC";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/ResearchTalks" element={<ResearchTalks />} />
        <Route path="/ETC" element={<ETC />} />
      </Routes>
    </Router>
  );
}

export default App;
