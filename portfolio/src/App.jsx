import Header from "./components/Header";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;