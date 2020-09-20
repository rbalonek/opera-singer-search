import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAllUserBlogs } from "../services/blogs";
import { showRolesForUser } from "../services/roles";
import { getOneUser } from "../services/users";
import "./css/SingerDetail.css";

export default function SingerDetail(props) {
  const [singer, setSinger] = useState(null);
  const { id } = useParams();

  const [roles, setRoles] = useState([]);
  const [performedRoles, setPerformedRoles] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchSinger = async () => {
      const singleSinger = await getOneUser(id);
      setSinger(singleSinger);
    };
    const fetchRoles = async () => {
      const rolesArray = await showRolesForUser(id);
      setRoles(rolesArray);
      setPerformedRoles(rolesArray.roles);
    };
    const fetchBlogs = async () => {
      const blogsArray = await getAllUserBlogs(id);
      setBlogs(blogsArray);
    };
    fetchSinger();
    fetchRoles();
    fetchBlogs();
  }, []);

  // console.log(blogs);
  return (
    <div>
      {singer && (
        <>
          <div className="singer_detail--header">
            <img
              className="singer_detail--header--img"
              src={singer.user_img}
              alt={singer.username}
            />
            <h1 className="singer_detail--header--username">
              {singer.username}
            </h1>
            <h3 className="singer_detail--header--voice_type">
              {singer.voice_type}
            </h3>
          </div>
          <div>
            <p>Website: {singer.website}</p>
            <p>City: {singer.city}</p>
            <p>Bio: {singer.bio}</p>
          </div>
        </>
      )}
      {performedRoles && (
        <>
          <div className="roles_performed--container">
            <h3>Roles</h3>
            {performedRoles.map((performedRole) => (
              <div>
                <p>
                  {performedRole.name} - {performedRole.opera.name} -{" "}
                  {performedRole.opera.composer}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
      {blogs && (
        <>
          <React.Fragment>
            {blogs.map((blog) => (
              <div className="singer_detail_blog--container">
                <Link to={`/BlogDetail/${blog.id}`}>
                  {" "}
                  <p className="singer_detail_blog--title">{blog.title}</p>{" "}
                </Link>
                <img className="singer_detail_blog--img" src={blog.img}></img>
              </div>
            ))}
          </React.Fragment>
        </>
      )}
    </div>
  );
}
