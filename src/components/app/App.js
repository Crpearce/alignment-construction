import { Routes, Route } from "react-router-dom";
import { sections } from "./data";
import Navigation from "../navigation/navigation.component";
import Home from "../../routes/home/home.component";
import "./App.css";

function App() {

  return (
    <Routes className='App'>
      <Route path='/' element={<Navigation tabs={sections}/> }>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
