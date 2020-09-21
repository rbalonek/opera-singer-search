// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { showRolesForUser } from "../services/roles";
// import { getOneUser } from "../services/users";

// import "./css/RolesPerformed.css";

// export default function RolesPerformed(props) {
//   const [singer, setSinger] = useState(null);
//   const { id } = useParams();
//   const { roles } = props;

//   const [roless, setRoles] = useState([]);
//   const [performedRoles, setPerformedRoles] = useState([]);

//   useEffect(() => {
//     const fetchSinger = async () => {
//       const singleSinger = await getOneUser(id);
//       setSinger(singleSinger);
//     };
//     const fetchRoles = async () => {
//       const rolesArray = await showRolesForUser(id);
//       setRoles(rolesArray);
//       setPerformedRoles(rolesArray.roles);
//     };
//     fetchSinger();
//     fetchRoles();
//   }, []);

//   console.log(roles);

//   return (
//     <div>
//       {performedRoles && (
//         <>
//           <div className="roles_performed--container">
//             <h3 className="roles_performed--title">Roles</h3>
//             {performedRoles.map((performedRole) => (
//               <div className="roles_performed--map_div">
//                 <p className="roles_performed--roles">{performedRole.name}-</p>
//                 <p className="roles_performed--roles">
//                   {" "}
//                   {performedRole.opera.name}-
//                 </p>
//                 <p className="roles_performed--roles">
//                   {performedRole.opera.composer}
//                 </p>
//                 <br />
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
