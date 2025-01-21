import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import About from './components/About';
import Event from './components/Event';
import Team from './components/Team';
import Achievement from './components/Achivement';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";



import './styles/Home.css';
import './styles/About.css';
import './styles/Event.css';
import './styles/Registration.css';
import './styles/Team.css';
import './styles/Achievements.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Event />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/team" element={<Team />} />
            <Route path="/achievement" element={<Achievement />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;