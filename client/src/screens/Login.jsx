import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";

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
    <div className="form-div">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.loginSubmit(formData);
          //Could put history push here,
        }}
      >
        <h3>Login</h3>
        <p>
          <i>for sample of login experience, copy and paste:</i>
        </p>
        <p>
          Username: <strong>Paul Barton</strong>
        </p>
        <p>
          password: <strong>123456</strong>
        </p>
        <div className="label-div">
          <label>
            <input
              placeholder="User name"
              className="input"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            <input
              placeholder="Password"
              className="input"
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <br />
        <button type="submit" value="Submit" className="submit-button">
          Submit
        </button>
      </form>
      <br />
      <br />
      <p>OR</p>
      <br />
      <Link to="/register">
        <div className="register-button">Register</div>
      </Link>
    </div>
  );
}
