import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { addRole, getOneRole } from "../services/roles";
import "./css/RoleDetail.css";

import { getOneOpera } from "../services/operas";

export default function RoleDetail(props) {
  const [role, setRole] = useState({});
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  // const { currentUser } = props;

  const [opera, setOpera] = useState(null);
  const roles = props.roles.filter(
    (role) => role.opera_id === (opera && opera.id)
  );

  useEffect(() => {
    const fetchOpera = async () => {
      const singleOpera = await getOneOpera(id);
      setOpera(singleOpera);
    };

    fetchOpera();
  }, [id]);

  useEffect(() => {
    const fetchRole = async () => {
      const singleRole = await getOneRole(id);
      // console.log(singleRole)
      setRole(singleRole);
      setUsers(singleRole.users);
    };

    fetchRole();
  }, [id]);

  const handleClick = async () => {
    const newRole = await addRole(id);
    setRole(newRole);
    history.push("/singer_page/");
  };

  console.log("users", users);
  // console.log("role", role.opera);

  return (
    <div>
      {props.currentUser && (
        <>
          <div className="add_to_roles_button">
            <button className="add-role_button" onClick={handleClick}>
              Add to My Roles
            </button>
          </div>
        </>
      )}
      <div className="opera_detail_container">
        {opera && (
          <div>
            <div className="opera_detail--div">
              <img
                className="opera_detail--opera_img"
                src={opera.composer_img}
                alt={opera.composer}
              />
              <div className="opera_detail--div-two">
                <h1 className="opera_detail--opera_name">{opera.name}</h1>
                <h3 className="opera_detail--opera_composer">
                  {opera.composer}
                </h3>
              </div>
            </div>
            <h2 className="opera_detail--roles_text">Roles:</h2>
            <div className="opera_detail--opera_roles--container">
              {roles.map((role) => (
                <Link to={`/roles/${role.id}`}>
                  {" "}
                  <div className="opera_detail--opera_role--single">
                    <p className="opera_detail--opera_roles">{role.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <h1 className="role-name">All Singers - {role.name}</h1>
      <>
        {role && (
          <>
            <div className="user_card_container">
              {users.map((user) => (
                <div className="user_info--container">
                  <Link to={`/singers/${user.id}`}>
                    {" "}
                    <button className="user_info--name">
                      {user.username}
                    </button>{" "}
                  </Link>
                  <img
                    className="user_info--img"
                    src={user.user_img}
                    alt={user.id}
                  ></img>
                  <p>
                    {user.city} - {user.voice_type}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </>
    </div>
  );
}
