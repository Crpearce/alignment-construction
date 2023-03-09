import { Routes, Route } from "react-router-dom";
import { sections, reasons } from "./data";
import Navigation from "../components/navigation/navigation.component";
import Home from "../routes/home/home.component";
import "./App.css";

function App() {

  return (
    <Routes className='App'>
      <Route path='/' element={<Navigation tabs={sections} /> }>
        <Route index element={<Home justification={reasons} />} />
      </Route>
    </Routes>
  );
}

export default App;
