import { Routes, Route } from "react-router-dom";
import { sections, reasons } from "./data";
import Navigation from "../components/navigation/navigation.component";
import Home from "../routes/home/home.component";
import "./App.css";

function App() {
  return (
    <>
      <Navigation tabs={sections} />
      <Routes className="App">
        <Route path="/" element={<Home justification={reasons} />} />
      </Routes>
    </>
  );
}

export default App;
