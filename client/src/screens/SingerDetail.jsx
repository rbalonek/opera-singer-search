import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showRolesForUser } from "../services/roles";
import { getOneUser } from "../services/users";
import "./css/SingerDetail.css";

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

  console.log(roles);
  return (
    <div>
      {singer && (
        <>
          <div className="singer_detail--header">
            <img
              className="singer_detail--header--img"
              src={singer.user_img}
              alt={singer.username}
            />
            <h1 className="singer_detail--header--username">
              {singer.username}
            </h1>
            <h3 className="singer_detail--header--voice_type">
              {singer.voice_type}
            </h3>
          </div>
          <div>
            <p>Website: {singer.website}</p>
            <p>City: {singer.city}</p>
            <p>Bio: {singer.bio}</p>
          </div>
        </>
      )}
      {performedRoles && (
        <>
          <div className="roles_performed--container">
            <h3>Roles</h3>
            {performedRoles.map((performedRole) => (
              <p>{performedRole.name}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// {performedRoles.map(performedRole => (
//   <p>{performedRole.name}</p>
//  ))}
