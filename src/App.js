import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import PageNotFound from "./components/Page Not Found/PageNotFound";
import HashLoader from "react-spinners/HashLoader";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
              <Route path="/PNF" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
