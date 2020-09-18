import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addRole, getOneRole } from "../services/roles";

export default function RoleDetail(props) {
  const [role, setRole] = useState({});
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  // const { currentUser } = props;

  useEffect(() => {
    const fetchRole = async () => {
      const singleRole = await getOneRole(id);
      // console.log(singleRole)
      setRole(singleRole);
      setUsers(singleRole.users);
    };

    fetchRole();
  }, []);

  const handleClick = async () => {
    const newRole = await addRole(id);
    setRole(newRole);
  };

  // console.log('users', users)

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
        {role && (
          <>
            {users.map((user) => (
             <Link to={`/singers/${user.id}`}> <p>{user.username}</p> </Link>
            ))}
          </>
        )}
      </>
    </div>
  );
}
