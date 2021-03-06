import React, { useState } from "react";
import "./css/Register.css";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    user_img: "",
    website: "",
    city: "",
    voice_type: "",
  });
  const {
    username,
    email,
    password,
    bio,
    user_img,
    website,
    city,
    voice_type,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="register-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.registerSubmit(formData);
        }}
      >
        <h3>Register</h3>
        <label>
          Name:
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
          Email:
          <input
            type="text"
            name="email"
            value={email}
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
        <label>
          Headshot Url:
          <input
            type="text"
            name="user_img"
            value={user_img}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Website Url:
          <input
            type="text"
            name="website"
            value={website}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Current City:
          <input type="text" name="city" value={city} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Voice Type:
          <input
            type="text"
            name="voice_type"
            value={voice_type}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Bio:
          <textarea
            rows={5}
            cols={35}
            type="text"
            name="bio"
            value={bio}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
