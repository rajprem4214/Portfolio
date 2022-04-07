import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import { css, cx } from "@emotion/css";
import PageNotFound from "./components/Page Not Found/PageNotFound";
import Web from "./components/header/Web/Web";
import Mobile from "./components/header/Mobile/Mobile";
import Email from "./components/Hero/Email/email";
import Contact from "./components/Hero/Contact/Contact";
import HashLoader from "react-spinners/HashLoader";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="s-loader">
          <HashLoader color={"#4ECAEB"} loading={loading} size={40} />
        </div>
      ) : (
        <div>
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="*" element={<PageNotFound/>}/>
          </Routes>
          </BrowserRouter>
         
          
        </div>
      )}
    </div>
  );
}

export default App;
