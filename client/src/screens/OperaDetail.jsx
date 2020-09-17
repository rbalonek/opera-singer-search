import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getOneOpera } from '../services/operas';


export default function OperaDetail(props) {
  const [opera, setOpera] = useState(null)
  const { id } = useParams()
  const { roles } = props;

  
  
  
  useEffect(() => {
    const fetchOpera = async () => {
      const singleOpera = await getOneOpera(id);
      setOpera(singleOpera)
    }
   
    fetchOpera()
  }, []);
console.log(roles)
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
            <p>{role.name}</p>
          ))}
        </>
      }
    </div>
  )
}
