import React, { useEffect, useState } from "react";
import "./css/OperaDetail.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getOneOpera } from "../services/operas"; //getRolesFromOneOpera
// import { getAllRolesInOpera } from "../services/roles";

export default function OperaDetail(props) {
  const [opera, setOpera] = useState(null);
  const { id } = useParams();

  ///Get er done here but make more efficient later
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
  // console.log(roles);

  return (
    <div>
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
    </div>
  );
}
