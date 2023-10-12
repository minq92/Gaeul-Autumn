import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/pages/Home';
import Publications from './components/pages/Publications';
import ResearchTalks from './components/pages/ResearchTalks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/ResearchTalks" element={<ResearchTalks />} />
      </Routes>
    </Router>
  );
}

export default App;
