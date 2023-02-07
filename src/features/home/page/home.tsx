import React from "react";
import { Form } from "react-router-dom";
import { Form1 } from "../components/form";
import "./home.css";

export default function HomePage() {
  return (
    <section className="homepage">
      <h2>Home Page</h2>
      <Form1></Form1>
    </section>
  );
}
