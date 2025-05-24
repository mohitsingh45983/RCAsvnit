import './App.css';
import Team from './Team/Team.jsx';
import Almuni from './Alumni/Alumni.jsx'
import Contact from './Contact/Contact.jsx'
import Navbar from './Navbar/Navbar.jsx'
import About from './About/about.jsx'
import Footer from './footer/footer'
import Event from './Event/Event.jsx'
import Notfound from './Notfound/Notfound.jsx';
import {
  // BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Homepage from './Hompage/Homepage';
import Scroll from './ScrollToTop/scrollToTop.jsx'
function App() {
  return (
    <>
      <Navbar />
       
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Alumni" element={<Almuni />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
      <Scroll></Scroll>
      <Footer />

    </>
  );
}

export default App;
