import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom';
import { getOneOpera, getRolesFromOneOpera } from '../services/operas';
import { getAllRolesInOpera } from '../services/roles';


export default function OperaDetail(props) {
  const [opera, setOpera] = useState(null)
  const { id } = useParams()
  
  ///Get er done here but make more efficient later
  const roles = props.roles.filter(role => role.opera_id === (opera && opera.id))
  
  
  useEffect(() => {
    const fetchOpera = async () => {
      const singleOpera = await getOneOpera(id);
      setOpera(singleOpera)
    }
  
    fetchOpera()
  }, []);
  // console.log(roles)
   
  return (
    <div>
      <h1>Opera Detail!</h1>
      {
        opera &&
        <>
          <h3>{opera.name}</h3>
          <h3>{opera.composer}</h3>
          <img src={opera.composer_img} alt={opera.composer} />
          {roles.map(role => (
            <Link to={`/roles/${role.id}`}> <p>{role.name}</p></Link>
          ))}
        </>
      }
    </div>
  )
}
