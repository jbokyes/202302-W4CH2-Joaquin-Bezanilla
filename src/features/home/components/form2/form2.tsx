import React from "react";
export function Form2(): JSX.Element {
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
      <input type="submit" value="Submit" />
    </form>
  );
}
