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
              <br />
              {singer.voice_type}
            </h1>
          </div>
          <div>
            {performedRoles && (
              <>
                <div className="singer_detail--web_city_bio">
                  <p>Website: {singer.website}</p>
                  <p>City: {singer.city}</p>
                </div>
                <p>Bio: {singer.bio}</p>
                <div className="roles_performed--container">
                  <h3 className="roles_performed--title">Roles</h3>
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
                  <Link to={`/BlogDetail/${blog.id}`}>
                    {" "}
                    <p className="singer_detail_blog--title">
                      {blog.title}
                    </p>{" "}
                  </Link>
                  <img className="singer_detail_blog--img" src={blog.img}></img>
                </div>
              ))}
            </div>
          </React.Fragment>
        </>
      )}
    </div>
  );
}
