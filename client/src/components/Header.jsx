import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

export default function Header(props) {
  const { currentUser } = props;
  return (
    <header>
      <p className="header--nrt_title">NRT</p>
      <p className="header--nrt_name">National Repertory Theater</p>
      <Link className="header--search_operas" to="/operas">
        <h3>Search Operas</h3>
      </Link>
      <Link to="/singers">
        <h3 className="header--search_singers">Search Singers</h3>
      </Link>
      {currentUser ? (
        <div className="header--current_user_div">
          <p className="header--current_username">
            Logged in as: {currentUser.username}
          </p>
          <button
            className="header--logout_button"
            onClick={props.handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">
          <p className="header--login_register_button">Login/Register</p>
        </Link>
      )}
      {currentUser && (
        <>
          <Link to="/singer_page">
            <p className="header--my_page">My Page</p>
          </Link>
        </>
      )}
    </header>
  );
}
