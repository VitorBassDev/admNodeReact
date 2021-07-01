import React, {createContext, useEffect, useState} from 'react'
import history from '../services/history';
import api from '../services/config/api';

const Context = createContext();

function AuthProvider({children}){

  const [authenticated, setAuthenticated] = useState(false)

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getLogin = async()=>{

      const token = localStorage.getItem('token')
      if(token){
        api.defaults.headers.Authenticated = `Bearer ${JSON.parse(token)}`
        setAuthenticated(true)
      }
      setLoading(false)
    }
    getLogin()
  }, [])

  if(loading){
    return <h1>Carregando...</h1>
  }

  async function signIn(sit){
    setAuthenticated(sit);
}

  function handleLogout(){
    setAuthenticated(false);

    localStorage.removeItem('token');

    api.defaults.headers.Authorization = undefined;

    return history.push('/');
}

  return(
    <Context.Provider value={{authenticated, handleLogout, signIn}}> 
      {children}
    </Context.Provider>
  )
}

export {Context, AuthProvider}