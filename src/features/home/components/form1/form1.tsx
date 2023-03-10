import React from "react";
import { useNavigate } from "react-router-dom";

export function Form1() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/form2");
  }
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Last Name:
        <input type="text" name="last-name" />
      </label>
      <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
      <label>
        Email
        <input type="text" name="email" />
      </label>
      <label>
        <input type="checkbox" />
        Quiero recibir notificaciones por correo
      </label>
      <input onClick={handleClick} type="submit" value="Submit" />
    </form>
  );
}
