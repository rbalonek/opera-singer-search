import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUserBlogs } from "../services/blogs";
import { showRolesForUser } from "../services/roles";
import "./css/SingerPage.css";

export default function SingerPage(props) {
  const [roles, setRoles] = useState([]);
  const { currentUser, handleDelete } = props;

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      const rolesArray = await showRolesForUser(currentUser.id);
      setRoles(rolesArray);
    };
    const fetchBlogs = async () => {
      const blogsArray = await getAllUserBlogs(currentUser.id);
      setBlogs(blogsArray);
    };
    if (currentUser) {
      fetchRoles();
      fetchBlogs();
    }
  }, [currentUser]);

  console.log("blogs", blogs);

  return (
    <div>
      <h1>SINGER PAGE</h1>
      <p className="singer_page--username">Name : {currentUser.username}</p>
      <img
        className="singer_page--img"
        src={currentUser.user_img}
        alt={currentUser.username}
      />
      <p className="singer_page--bio">Bio : {currentUser.bio}</p>
      {currentUser && (
        <>
          <Link to="/singer_page/create_blog">
            {" "}
            <button className="singer_page--create_blog">
              Create Blog
            </button>{" "}
          </Link>
        </>
      )}
      {blogs.length && (
        <React.Fragment>
          <div className="outside">
            {blogs.map((blog) => (
              <div className="singer_page_blog--container">
                <Link to={`/singer_page/${blog.id}/edit_blog`}>
                  {" "}
                  <p>{blog.title}</p>{" "}
                </Link>
                <img className="singer_page_blog--img" src={blog.img}></img>
                <div className="singer_page_blog--delete">
                  <button onClick={() => props.handleDelete(blog.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
//<button onClick={() => props.handleDelete(blog.id)}>Delete</button>
