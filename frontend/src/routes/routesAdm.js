import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {Context} from '../Context/AuthContext';

import Login from '../pages/Login'
import {Dashboard} from '../pages/Dashboard';
import { Listar } from '../pages/Listar';
// import { Visualizar } from '../pages/Visualizar';
import { Cadastrar } from '../pages/Cadastrar';
import { Editar } from '../pages/Editar';

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
        <CustomRoute isPrivate exact path="/listar" component={Listar} />
        {/* <CustomRoute isPrivate exact path="/visualizar/:id" component={Visualizar} /> */}
        <CustomRoute isPrivate exact path="/cadastrar" component={Cadastrar} />
        <CustomRoute isPrivate exact path="/editar/:id" component={Editar} />
      </Switch>
    )
}