import React from 'react'
import { Link } from "react-router-dom"

export default function Singers(props) {
  const { singers } = props;

// console.log(singers)

  return (
    <div>
      <h3>Singers</h3>
      {singers.map(singer => (
        <Link to={`/singers/${singer.id}`}><p>{singer.username}</p></Link>
      ))}
      <br />
    </div>
  )
}
