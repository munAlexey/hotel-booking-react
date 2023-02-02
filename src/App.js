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
  const [isOpen, setIsOpen] = React.useState(false);
  function close() {
    setIsOpen(true);
  }
  return (
    <div className="App">
      <div className="page">
        <Header isOpen={close} />
        {isOpen ? (<div className="pages">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/homes" element={<Reservation />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>) : <Main />}
        

        <Footer />
      </div>
    </div>
  );
}

export default App;
