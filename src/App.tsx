import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainComponent from "./components/MainComponent";

export default function App() {
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <Sidebar />
        <MainComponent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<Form />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </MainComponent>
      </div>
    </>
  );
}
