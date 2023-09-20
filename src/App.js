import { BrowserRouter, Route, Routes } from "react-router-dom";


// import Home from './Pages/Home/Home';
import './App.css';
import Maintenance from "./Pages/Home/Maintenance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/error" element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
