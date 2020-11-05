import React from "react";
import "./css/Singers.css";
import { Link } from "react-router-dom";

export default function Singers(props) {
  const { singers } = props;

  // console.log(singers)

  return (
    <div>
      <h3>Singers</h3>

      {singers.length ? (
        <div className="singer_card_container">
          {singers.map((singer) => (
            <>
              <div className="singer_card">
                <p className="singer_card--name">{singer.username}</p>

                <img
                  className="singer_card--img"
                  src={singer.user_img}
                  alt={singer.username}
                />
                <p className="singer_card--voice_type">{singer.voice_type}</p>
                <Link to={`/singers/${singer.id}`}>
                  <button className="singer-roles-button">
                    <span>View Roles</span>
                  </button>
                </Link>
              </div>
            </>
          ))}
        </div>
      ) : (
        <p>Waking up the database, please hold...</p>
      )}

      <br />
    </div>
  );
}
