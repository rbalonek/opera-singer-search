import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import RolesPerformed from "../components/RolesPerformed";
import { getAllUserBlogs } from "../services/blogs";
import { showRolesForUser } from "../services/roles";
import "./css/SingerPage.css";

/// Component

export default function SingerPage(props) {
  const [roles, setRoles] = useState([]);
  const { currentUser, handleDelete } = props;
  const [performedRoles, setPerformedRoles] = useState([]);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      const rolesArray = await showRolesForUser(currentUser.id);
      setRoles(rolesArray);
      setPerformedRoles(rolesArray.roles);
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

  // console.log("blogs", blogs);

  return (
    <div className="singer_page--container">
      <p className="singer_page--username">Name : {currentUser.username}</p>
      <img
        className="singer_page--img"
        src={currentUser.user_img}
        alt={currentUser.username}
      />
      <p className="singer_page--bio">Bio : {currentUser.bio}</p>

      {roles && (
        <>
          <div className="singer_page_roles_performed--container">
            <h3 className="singer_page_roles_performed--title">Roles</h3>
            {performedRoles.map((performedRole) => (
              <div className="singer_page_roles_performed--map_div">
                <p className="singer_page_roles_performed--roles">
                  {performedRole.name}-
                </p>
                <p className="singer_page_roles_performed--roles">
                  {" "}
                  {performedRole.opera.name}-
                </p>
                <p className="singer_page_roles_performed--roles">
                  {performedRole.opera.composer}
                </p>
                <br />
              </div>
            ))}
          </div>
        </>
      )}

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
          <div className="singer_page_blog--organizer">
            {blogs.map((blog) => (
              <div className="singer_page_blog--container">
                <Link to={`/singer_page/${blog.id}/edit_blog`}>
                  {" "}
                  <p>{blog.title}</p>{" "}
                </Link>
                <img
                  alt={blog.id}
                  className="singer_page_blog--img"
                  src={blog.img}
                ></img>
                <div className="singer_page_blog--delete">
                  <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
