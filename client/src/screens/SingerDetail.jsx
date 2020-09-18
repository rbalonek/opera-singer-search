import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showRolesForUser } from "../services/roles";
import { getOneUser } from "../services/users";

export default function SingerDetail(props) {
  const [singer, setSinger] = useState(null);
  const { id } = useParams();

  const [roles, setRoles] = useState([]);
  const [performedRoles, setPerformedRoles] = useState([]);

  useEffect(() => {
    const fetchSinger = async () => {
      const singleSinger = await getOneUser(id);
      // console.log(singleSinger)
      setSinger(singleSinger);
    };
    const fetchRoles = async () => {
      const rolesArray = await showRolesForUser(id);
      setRoles(rolesArray);
      setPerformedRoles(rolesArray.roles);
      // console.log("roles array", rolesArray.roles[0].name);
      // console.log(performedRoles)
      // console.log(roles)
    };
    fetchSinger();
    fetchRoles();
  }, []);

  // console.log(performedRoles)
  return (
    <div>
      <h1>Singer</h1>
      {singer && (
        <>
          <h3>{singer.username}</h3>
          <img src={singer.user_img} alt={singer.username} />
        </>
      )}
      {performedRoles &&
        <>
        {performedRoles.map(performedRole => (
          <p>{performedRole.name}</p>
         ))}
        </>
      }
      
      
    </div>
  );
}

// {performedRoles.map(performedRole => (
//   <p>{performedRole.name}</p>
//  ))}
