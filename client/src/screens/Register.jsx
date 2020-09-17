import React, { useState } from 'react'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    bio: '', 
    user_img: ''
  })
  const { username, email, password, bio, user_img } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      props.registerSubmit(formData)
    }}>
      <h3>Register</h3>
      <label>Name:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Password:
        <input
          type='text'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Headshot Url:
      <input
        type='text'
        name='user_img'
        value={user_img}
        onChange={handleChange}
      />
    </label>
      <br />
      <label>Bio:
      <input
        type='text'
        name='bio'
        value={bio}
        onChange={handleChange}
      />
    </label>
    <br />
      <button>Submit</button>
    </form>
  )
}