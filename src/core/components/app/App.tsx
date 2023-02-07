import React from "react";
import "./App.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import HomePage from "../../../features/home/page/home";

export type FormOption = {
  label: string;
  path: string;
};

const formOptions: FormOption[] = [
  { label: "Inicio", path: "/home" },
  { label: "Inicio2", path: "/tasks" },
  { label: "Inicio3", path: "/about.html" }
];
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
