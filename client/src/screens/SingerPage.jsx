import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs, getAllUserBlogs } from "../services/blogs";
import { showRolesForUser } from "../services/roles";
import "./css/SingerPage.css";

export default function SingerPage(props) {
  const [roles, setRoles] = useState([]);
  // const [blogs, setBlogs] = useState([])
  // const [delayBlog, setDelayBlog] = useState([])
  const { currentUser } = props;
  // const { blogs } = props.blogs;

  const [blogs, setBlogs] = useState([]);
  const [delayBlog, setDelayBlog] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      const rolesArray = await showRolesForUser(currentUser.id);
      setRoles(rolesArray);
    };
    const fetchBlogs = async () => {
      const blogsArray = await getAllUserBlogs(currentUser.id);
      setBlogs(blogsArray);
    };

    // const fetchBlogsLater = async () => {
    //   const blogsArray = await getAllUserBlogs(currentUser.id);
    //   setDelayBlog(blogsArray);
    // }
    if (currentUser) {
      fetchRoles();
      fetchBlogs();
    }
    // fetchBlogsLater()
  }, [currentUser]);

  // const runDelayBlogs() => {
  //   {delayBlog.map(blog => (
  //     <p>{blog.title}</p>
  //    ))}
  // }

  console.log("blogs", blogs);
  // console.log('delay blogs', delayBlog)
  // console.log( currentUser.id )

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
        <>
          {blogs.map((blog) => (
            <p>{blog.title}</p>
          ))}
          <p>Loading...</p>
        </>
      )}
    </div>
  );
}
// blogs.length ?
//         <>
// {blogs.map(blog => (
//   <p>{blog.title}</p>
//  ))}
// </> :
