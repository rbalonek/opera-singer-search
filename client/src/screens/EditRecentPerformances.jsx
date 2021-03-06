import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/EditRecentPerformances.css";

export default function EditRecentPerformances(props) {
  const [formData, setFormData] = useState({
    title: "",
    opera_company: "",
    date: "",
    img: "",
    text: "",
  });
  const { title, opera_company, date, img, text } = formData;
  const { id } = useParams();
  const { blogs, updateSubmit } = props;

  useEffect(() => {
    const prefilForm = () => {
      const singleBlog = blogs.find((blog) => blog.id === Number(id));
      setFormData({
        title: singleBlog.title,
        opera_company: singleBlog.opera_company,
        date: singleBlog.date,
        img: singleBlog.img,
        text: singleBlog.text,
      });
    };
    if (blogs.length) {
      prefilForm();
    }
  }, [id, blogs]);

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
        updateSubmit(id, formData);
      }}
    >
      <h3>Update</h3>
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
      <br />
      <button>Submit</button>
    </form>
  );
}
