import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./css/CreateRecentPerformances.css";

export default function CreateRecentPerformances(props) {
  // const currentUserid = props.currentUser.id;
  const [formData, setFormData] = useState({
    title: "",
    opera_company: "",
    date: "",
    img: "",
    text: "",
    // ,user_id: {currentUserid}
  });
  const { title, opera_company, date, img, text } = formData;
  const { createSubmit } = props;
  // const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { [name]: value };
    setFormData((formData) => {
      return { ...formData, ...newData };
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createSubmit(formData);
      }}
    >
      <h3>Create</h3>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Opera Company:
        <input
          type="text"
          name="opera_company"
          value={opera_company}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Performance Date(s):
        <input type="text" name="date" value={date} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Production Pic URL:
        <input type="text" name="img" value={img} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Description:
        <textarea
          rows={5}
          cols={35}
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
