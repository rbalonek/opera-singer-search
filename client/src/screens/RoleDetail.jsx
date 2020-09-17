import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addRole, getOneRole } from "../services/roles";
import { showUsersForRole } from "../services/users";

export default function RoleDetail(props) {
  const [role, setRole] = useState([]);
  const [singers, setSingers] = useState([]);
  const { id } = useParams();
  // const { currentUser } = props;

  useEffect(() => {
    const fetchRole = async () => {
      const singleRole = await getOneRole(id);
      setRole(singleRole);
    };
    const fetchUsers = async () => {
      const matchingUsers = await showUsersForRole(id);
      setSingers(matchingUsers);
    };

    fetchRole();
    fetchUsers();
  }, []);

  const handleClick = async () => {
    const newRole = await addRole(id);
    setRole(newRole);
  };

  // const singers = singer.users;
  // console.log(users.users)
  console.log(role.users);
  return (
    <div>
      <h1>ROLE DETAIL</h1>

      <>
        <h3>{role.name}</h3>
      </>
      {props.currentUser && (
        <>
          <button onClick={handleClick}>Add to My Roles</button>
        </>
      )}
      <h1>All Singers</h1>
      <>
      {
        singers &&
        <> 
        
        </>

      }
      
      </>
    </div>
  );
}

// {singers.map(user => (
//   <p>{user.username}</p>
// ))}


// {role.users.map(user => (
//   <p>{user.username}</p>
// ))}
