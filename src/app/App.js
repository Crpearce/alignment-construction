import { Routes, Route } from "react-router-dom";
import { sections, reasons } from "./data";
import Navigation from "../components/navigation/navigation.component";
import Footer from '../components/footer/footer.component';
import Home from "../routes/home/home.component";
import Contact from "../routes/contact/contact.component";
import "./App.css";

function App() {
  return (
    <>
      <Navigation tabs={sections}/>
      <Routes className="App">
        <Route path="/" element={<Home justification={reasons}/>}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
