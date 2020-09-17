import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom';
import { getOneRole } from '../services/roles';

export default function RoleDetail(props) {
  const [role, setRole] = useState([]);
  const { id } = useParams();
  const { currentUser } = props;

  // console.log(props.roles)

  useEffect(() => {
    const fetchRole = async () => {
      const singleRole = await getOneRole(id);
      setRole(singleRole)
    }
  
    fetchRole()
  }, []);

  return (
    <div>
      <h1>ROLE DETAIL</h1>
      
      <>
        <h3>{role.name}</h3>
      </>
      {
        currentUser &&
        <>
        <button>Add to My Roles</button>
          </>
      }
    </div>
  )
}
