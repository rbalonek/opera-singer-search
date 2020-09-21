import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.loginSubmit(formData);
        //Could put history push here,
      }}
    >
      <h3>Login</h3>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Password:
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <Link to="/register">Register</Link>
      <br />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
