import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {Context} from '../Context/AuthContext';

import Login from '../pages/Login'
import {Dashboard} from '../pages/Dashboard';

export default function RoutesAdm() {

  function CustomRoute({isPrivate, ...rest}){
    const {authenticated} = useContext(Context);

    if(isPrivate && !authenticated){
      return <Redirect to="/" />
    }

      return <Route {...rest} />
    }
    
    return (
      <Switch>
        <CustomRoute exact path="/" component={Login} />
        <CustomRoute isPrivate exact path="/dashboard" component={Dashboard} />
      </Switch>
    )
}