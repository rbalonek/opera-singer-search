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

  // const [roles, setRoles] = useState([]);
  const [performedRoles, setPerformedRoles] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchSinger = async () => {
      const singleSinger = await getOneUser(id);
      setSinger(singleSinger);
    };
    const fetchRoles = async () => {
      const rolesArray = await showRolesForUser(id);
      // setRoles(rolesArray);
      setPerformedRoles(rolesArray.roles);
    };
    const fetchBlogs = async () => {
      const blogsArray = await getAllUserBlogs(id);
      setBlogs(blogsArray);
    };
    fetchSinger();
    fetchRoles();
    fetchBlogs();
  }, [id]);
  // console.log("roles", roles);
  // console.log("performedRoles", performedRoles);
  console.log(blogs);
  return (
    <div className="singer_detail--container">
      {singer && (
        <>
          <div className="singer_detail--header">
            <img
              className="singer_detail--header--img"
              src={singer.user_img}
              alt={singer.username}
            />
            <div className="singer_detail--body">
              <div className="singer_detail--header--username_container">
                <h1 className="singer_detail--header--username">
                  {singer.username}
                  <br />
                  {singer.voice_type}
                </h1>
              </div>
              <div className="singer_detail--web_city_bio">
                <p>Website: {singer.website}</p>
                <p>City: {singer.city}</p>
                <p>Bio: {singer.bio}</p>
              </div>
            </div>
          </div>

          <div className="singer_detail-map_container">
            {performedRoles && (
              <>
                <div className="roles_performed--container">
                  <h2 className="roles_performed--title">Roles</h2>
                  {performedRoles.map((performedRole) => (
                    <div className="roles_performed--map_div">
                      <p className="roles_performed--roles">
                        {performedRole.name}-
                      </p>
                      <p className="roles_performed--roles">
                        {" "}
                        {performedRole.opera.name}-
                      </p>
                      <p className="roles_performed--roles">
                        {performedRole.opera.composer}
                      </p>
                      <br />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}

      {blogs && (
        <>
          <React.Fragment>
            <div className="all_blogs--container">
              {blogs.map((blog) => (
                <div className="singer_detail_blog--container">
                  <img
                    className="singer_detail_blog--img"
                    alt={blog.id}
                    src={blog.img}
                  ></img>
                  <p className="blog-company">{blog.opera_company}</p>
                  <p className="blog-date">{blog.date}</p>
                  <Link to={`/BlogDetail/${blog.id}`}>
                    {" "}
                    <button className="singer_detail_blog--title">
                      <span> {blog.title}</span>
                    </button>{" "}
                  </Link>
                </div>
              ))}
            </div>
          </React.Fragment>
        </>
      )}
    </div>
  );
}
