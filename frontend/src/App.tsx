import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Publications from "./components/layout/Publications";
import Editor from "./components/layout/Editor";
import Library from "./components/layout/Library";
import Theory from "./components/layout/Theory";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Publications />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/library" element={<Library />} />
          <Route path="/theory" element={<Theory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
