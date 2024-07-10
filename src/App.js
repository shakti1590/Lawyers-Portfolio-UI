import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import components

import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./Pages/Home";
import Aboutpage from "./Pages/Aboutpage";
import Privacypolicy from "./Pages/Privacypolicy";
import JobOpeningSection from "./Pages/Career";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<Aboutpage/>} />
          <Route path="/careers" element={<JobOpeningSection/>} />
          <Route path="/privacy-policy" element={<Privacypolicy/>} />
        </Routes>
      </Router>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
