import "./App.css";
import Home from "./Components/Home";
import Items from "./Components/Items";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadItem from "./Components/UploadItem";
import UpdateItem from "./Components/UpdateItem";
import Pdfview from "./Components/Pdfview";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadItem />} />
          <Route path="/update" element={<UpdateItem />} />
          <Route path="/items" element={<Items />} />
          <Route path="/pdf" element={<Pdfview/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
