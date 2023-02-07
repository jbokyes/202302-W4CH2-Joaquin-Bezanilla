import React from "react";
import { useNavigate } from "react-router";
export function Form2() {
  function handleClick() {
    const navigate = useNavigate();
    navigate("");
  }
  return (
    <form>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <label>
        Repeat password:
        <input type="text" name="repeatpassword" />
      </label>
      <input onClick={handleClick} type="submit" value="Submit" />
    </form>
  );
}
