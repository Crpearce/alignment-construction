import { Routes, Route } from "react-router-dom";
import { sections, reasons } from "./data";
import Navigation from "../components/navigation/navigation.component";
import Home from "../routes/home/home.component";
import About from "../routes/about/about.component";
import Contact from "../routes/contact/contact.component";
import Remodeling from "../routes/remodeling/remodeling.component";
import Structural from "../routes/structural/structural.component";
import HomeAdditions from "../routes/homeAdditions/homeAdditions.component";
import Concrete from "../routes/concrete/concrete.component";
import Footer from "../components/footer/footer.component";
import "./App.css";

function App() {
  return (
    <>
      <Navigation tabs={sections} />
      <Routes className="App">
        <Route path="/" element={<Home justification={reasons} />} />
        <Route path="/about" element={<About />} />
        <Route path="/structural" element={<Structural />} />
        <Route path="/remodeling" element={<Remodeling />} />
        <Route path="/concrete" element={<Concrete />} />
        <Route path="/home-additions" element={<HomeAdditions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
