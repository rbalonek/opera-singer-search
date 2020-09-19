import React from "react";
import "./css/Singers.css";
import { Link } from "react-router-dom";

export default function Singers(props) {
  const { singers } = props;

  // console.log(singers)

  return (
    <div>
      <h3>Singers</h3>
      <div className="singer_card_container">
        {singers.map((singer) => (
          <>
            <div className="singer_card">
              <p>{singer.username}</p>

              <img
                className="singer_card--img"
                src={singer.user_img}
                alt={singer.username}
              />
              <Link to={`/singers/${singer.id}`}>
                <p>View Roles ></p>
              </Link>
            </div>
          </>
        ))}
      </div>
      <br />
    </div>
  );
}
