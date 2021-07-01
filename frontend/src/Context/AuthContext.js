import React, {createContext} from 'react'

const Context = createContext();

function AuthProvider({children}){
  return(
    <Context.Provider value={{Authenticated: false}}> 
      {children}
    </Context.Provider>
  )
}

export {Context, AuthProvider}