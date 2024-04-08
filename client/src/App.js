import logo from './logo.svg';
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import About from "./pages/About"
import Projects from "./pages/Projects"
import './App.css';
function App() {
  return (
    <>
        <div class="nav">
          <ul>
            <li class="bar"><Link to="/">Home</Link></li>
            <li class="bar"><Link to="/about">About Me</Link></li>
            <li class="bar"><Link to="/projects">Projects</Link></li>
            <li class="bar"><Link to="/contact">Contact Me</Link></li>
          </ul>
        </div>
        <div class="container">
          <div class="contentwrap">
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
          <footer class="footer">
            <p>Aidan Hong 2024</p>
        </footer>
        </div>
        
        
    </>
  );
}

export default App;
