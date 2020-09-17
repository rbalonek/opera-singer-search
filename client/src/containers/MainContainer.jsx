import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Operas from '../screens/Operas';
import SingerPage from '../screens/SingerPage';
import { getAllOperas } from '../services/operas';




export default function MainContainer(props) {
  const [operas, setOperas] = useState([]);

  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchOperas = async () => {
      const operaArray = await getAllOperas();
      setOperas(operaArray);
    }
    // const fetchRoles = async () => {
    //   const roleArray = await getAllRoles ();
    //   setRoles(roleArray);
    // }
    // const fetchSingers = async () => {
    //   const singerArray = await getAllUsers();
    //   setSingers(singerArray);
    //}
    fetchOperas();
    // fetchRoles();
    // fetchSingers();
  }, [])

  

  return (
   <Switch>

   <Route path="/operas/">
        <Operas
          operas={operas}
          currentUser={currentUser}
        />
 </Route>

      <Route path="/singer_page/">
        <SingerPage
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  )
}
