import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Feature from "./components/Feature/Feature";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Feature/>
    </>
  );
}

export default App;
