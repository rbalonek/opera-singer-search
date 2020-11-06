import React from "react";
import "./css/Operas.css";
import { Link } from "react-router-dom";

export default function Operas(props) {
  const { operas } = props;
  return (
    <div>
      <div className="operas-title-div">
        <h1>Operas</h1>
      </div>
      {operas.length ? (
        <div className="opera_card_container">
          {operas.map((opera) => (
            <>
              <div className="opera_card">
                <p className="opera_card--name">{opera.name}</p>
                <img
                  className="opera_card--img"
                  src={opera.composer_img}
                  alt={opera.composer}
                />

                <p className="opera_card--composer">{opera.composer}</p>
                <Link to={`/operas/${opera.id}`}>
                  <button className="opera-roles-button">
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
