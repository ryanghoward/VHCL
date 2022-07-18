import React from "react";
import Driver from "./components/driver/Driver";
import Find from "./components/find/Find";
import Hero from "./components/hero/Hero";
import Luxury from "./components/luxury/Luxury";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
    </div>
  );
}

export default App;
