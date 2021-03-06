import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBlog } from "../services/blogs";
import { Link } from "react-router-dom";
import "./css/RecentPerformanceDetail.css";

export default function RecentPerformanceDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchOneBlog = async () => {
      const singleBlog = await getOneBlog(id);
      setBlog(singleBlog);
    };

    fetchOneBlog();
  }, [id]);

  // console.log("blog", blog);

  return (
    <div>
      {blog && (
        <div className="blog--container">
          <div className="blog--container--left">
            <img alt={blog.id} className="blog--img" src={blog.img}></img>
          </div>
          <div className="blog--container--right">
            <h1 className="blog--title">{blog.title}</h1>
            <p className="blog--company">{blog.opera_company}</p>
            <p className="blog--date">{blog.date}</p>
            <p className="blog--text">{blog.text}</p>
            <Link to={`/singers/${blog.user_id}`}>
              <button className="singer_page-button">
                <span>Back to singer page</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
