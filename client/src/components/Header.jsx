import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

export default function Header(props) {
  const { currentUser } = props;
  return (
    <header>
      <div className="background-img"></div>
      <h1 className="header--nrt_name">Opera Singer Search</h1>

      <div className="header--search_buttons">
        <Link to="/operas">
          <div className="header--search_operas-button">Search Operas</div>
        </Link>
        <Link to="/singers">
          <div className="header--search_singers-button">Search Singers</div>
        </Link>
      </div>

      {currentUser ? (
        <div className="header--current_user_div">
          <Link to="/singer_page">
            <button className="header--my_page-button">My Page</button>
          </Link>
          <p className="header--current_username">
            Logged in as: <strong>{currentUser.username}</strong>
          </p>
          <button
            className="header--logout_button"
            onClick={props.handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="login-div">
          <Link to="/login">
            <div className="login-button">Login/Register</div>
          </Link>
        </div>
      )}
      <hr />
    </header>
  );
}
