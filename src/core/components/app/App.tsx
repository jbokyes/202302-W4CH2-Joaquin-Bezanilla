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
      <Routes>
        <Route path="/" element={<Form1></Form1>}></Route>
        <Route path="/form2" element={<Form2></Form2>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
