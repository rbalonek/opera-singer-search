import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addRole, getOneRole } from "../services/roles";
import "./css/RoleDetail.css";

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

  // console.log("users", users);
  console.log("role", role.opera);

  return (
    <div>
      {props.currentUser && (
        <>
          <button onClick={handleClick}>Add to My Roles</button>
        </>
      )}
      <h1 className="role-name">All Singers - {role.name}</h1>
      <>
        {role && (
          <>
            <div className="user_card_container">
              {users.map((user) => (
                <div className="user_info--container">
                  <Link to={`/singers/${user.id}`}>
                    {" "}
                    <p className="user_info--name">{user.username}</p>{" "}
                  </Link>
                  <img className="user_info--img" src={user.user_img}></img>
                </div>
              ))}
            </div>
          </>
        )}
      </>
    </div>
  );
}
