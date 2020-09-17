import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import OperaDetail from '../screens/OperaDetail';
import Operas from '../screens/Operas';
import RoleDetail from '../screens/RoleDetail';
import SingerDetail from '../screens/SingerDetail';
import SingerPage from '../screens/SingerPage';
import Singers from '../screens/Singers';
import { getAllOperas } from '../services/operas';
import { getAllRoles, getAllRolesInOpera } from '../services/roles';
import { getAllUsers } from '../services/users';




export default function MainContainer(props) {
  const [operas, setOperas] = useState([]);
  const [roles, setRoles] = useState([]);
  const [singers, setSingers] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchOperas = async () => {
      const operaArray = await getAllOperas();
      setOperas(operaArray);
    }
    const fetchRoles = async (id) => {
      const roleArray = await getAllRoles();
      setRoles(roleArray);
    }
    const fetchSingers = async () => {
      const singerArray = await getAllUsers();
      setSingers(singerArray);
    }
    fetchOperas();
    fetchRoles();
    fetchSingers();
  }, [])

  

  return (
    <Switch>
      
    <Route path='/singers/:id'>
    <SingerDetail />
      </Route>
      
      
      
    <Route path='/operas/:id'>
        <OperaDetail
        roles={roles}
        />
    </Route>

    <Route path='/roles/:id'>
        <RoleDetail
          roles={roles}
          operas={operas}
          currentUser={currentUser}
          singers={singers}
        />
    </Route>

   <Route path="/operas/">
        <Operas
          operas={operas}
          currentUser={currentUser}
        />
 </Route>

 <Route path="/singers">
 <Singers
   singers={singers}
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
