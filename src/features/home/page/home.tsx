import React from "react";
import { Routes, Route } from "react-router-dom";
import { Form1 } from "../components/form1/form1";
import { Form2 } from "../components/form2/form2";
import "./home.css";

export default function HomePage() {
  return (
    <section>
      <h2>Home Page</h2>
      <Routes>
        <Route path="/" element={<Form1></Form1>}></Route>
        <Route path="/form2" element={<Form2></Form2>}></Route>
      </Routes>
    </section>
  );
}
