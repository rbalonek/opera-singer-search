import React from 'react'
import {Link} from 'react-router-dom'

export default function SingerPage(props) {
  const { currentUser } = props;
  console.log({currentUser})
  return (
    <div>
      <h1>SINGER PAGE</h1>
      <p>Name : {currentUser.username}</p>
      <img src={currentUser.user_img} alt={currentUser.username} />
      <p>Bio : {currentUser.bio}</p>
      
    </div>
  )
}
