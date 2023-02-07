import React from "react";
import "./App.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import HomePage from "../../../features/home/page/home";

function App() {
  return (
    <>
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </>
  );
}

export default App;
