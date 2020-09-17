import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import SingerPage from '../screens/SingerPage';




export default function MainContainer(props) {
  

  const history = useHistory();
  const { currentUser } = props;

  

  return (
   <Switch>

    

      <Route path="/singer_page/">
        <SingerPage
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  )
}
