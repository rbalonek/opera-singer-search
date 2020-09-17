import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { showRolesForUser } from '../services/roles';

export default function SingerPage(props) {
  const [roles, setRoles] = useState([])
  const { currentUser } = props;

  useEffect(() => {
    const fetchRoles = async () => {
      const rolesArray = await showRolesForUser(currentUser.id);
      setRoles(rolesArray);
    }
    
    fetchRoles();
  }, [])

  console.log(roles)
  console.log( currentUser.id )
  
  return (
    <div>
      <h1>SINGER PAGE</h1>
      <p>Name : {currentUser.username}</p>
      <img src={currentUser.user_img} alt={currentUser.username} />
      <p>Bio : {currentUser.bio}</p>
      
    </div>
  )
}
