import React from 'react';
import ReactDOM from "react-dom";

import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import Access from "./Pages/Access";
import Contact from "./Pages/Contact";
import Carte from "./Pages/Carte";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home/>} />

          <Route path="/access" element={<Access/>} />

          <Route path="/menu" element={<Carte/>} />

          <Route path="/contact" element={<Contact/>} />

        </Routes>
        <Footer />
      </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);