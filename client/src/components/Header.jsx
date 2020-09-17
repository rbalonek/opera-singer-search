import React from 'react'
import { Link } from "react-router-dom"

export default function Header(props) {
  const { currentUser } = props;
  return (
    <header>
      <h1>Header</h1>
      <Link to="/operas"><h3>Search Operas</h3></Link>
      <Link to="/singers"><h3>Search Singers</h3></Link>
      {
        currentUser ?
          <div>
            <p>{currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div> :
          <Link to="/login">Login/Register</Link>
      }
      
      <hr />
      {
        currentUser &&
        <>
        <Link to="/singer_page">My Page</Link>
          </>
      }
      
    </header>
  )
}
