import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Booking from "./components/Booking";
import Reservation from "./components/Reservation";
import Contacts from "./components/Contacts";

function App() {
  
  return (
    <div className="App">
      <div className="page">
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/homes" element={<Reservation />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        

        <Footer />
      </div>
    </div>
  );
}

export default App;
