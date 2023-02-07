import React from "react";
import "./App.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import HomePage from "../../../features/home/page/home";
import { Route, Routes } from "react-router-dom";
import { Form1 } from "../../../features/home/components/form1/form1";
import { Form2 } from "../../../features/home/components/form2/form2";

export type FormOption = {
  label: string;
  path: string;
};

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
