import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom';
import { addRole, getOneRole } from '../services/roles';

export default function RoleDetail(props) {
  const [role, setRole] = useState([]);
  // const [roleID, setRoleID] = useState()
  const { id } = useParams();
  const { currentUser } = props;
  
  // const setRoleID = currentUser.id 

  // const userID = currentUser.id

  // console.log( currentUser.id )
  // console.log(props.roles)

  useEffect(() => {
    const fetchRole = async () => {
      const singleRole = await getOneRole(id);
      setRole(singleRole)
    }
  
    fetchRole()
  }, []);

  const handleClick = async () => {
    const newRole = await addRole(id);
    setRole(newRole);
  }

  return (
    <div>
      <h1>ROLE DETAIL</h1>
      
      <>
        <h3>{role.name}</h3>
      </>
      {
        currentUser &&
        <>
        <button onClick={handleClick}>Add to My Roles</button>
          </>
      }
    </div>
  )
}
