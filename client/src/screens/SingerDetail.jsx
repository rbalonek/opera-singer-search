import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getOneUser } from '../services/users';

export default function SingerDetail(props) {
  const [singer, setSinger] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const fetchSinger = async () => {
      const singleSinger = await getOneUser(id);
      setSinger(singleSinger)
    }
    fetchSinger()
  }, []);
console.log(singer)
  return (
    <div>
      <h1>Singer</h1>
      {
        singer &&
        <> 
          <h3>{singer.username}</h3>
          <img src={singer.user_img} alt={singer.username}/>
        </>

      }
    </div>
  )
}
