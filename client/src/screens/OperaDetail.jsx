import React, { useEffect, useState } from "react";
import "./css/OperaDetail.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getOneOpera, getRolesFromOneOpera } from "../services/operas";
import { getAllRolesInOpera } from "../services/roles";

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
  }, []);
  // console.log(roles)

  return (
    <div>
      <div className="opera_detail_container">
        {opera && (
          <>
            <h3 className="opera_detail--opera_name">{opera.name}</h3>
            <img
              className="opera_detail--opera_img"
              src={opera.composer_img}
              alt={opera.composer}
            />
            <h3 className="opera_detail--opera_composer">{opera.composer}</h3>
            <h2>Roles:</h2>
            <div className="opera_detail--opera_roles--container">
              {roles.map((role) => (
                <Link to={`/roles/${role.id}`}>
                  {" "}
                  <p className="opera_detail--opera_roles">{role.name}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
