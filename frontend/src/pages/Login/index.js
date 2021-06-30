import React, { useState } from 'react'

function Login() {

  const [dadosUsuario, setUsuario] = useState({
    email: '',
    password: ''
  })

  const valorInput = e => setUsuario({...dadosUsuario, [e.target.name]: e.target.value}) 


  const loginSubmit = async e =>{
    e.preventDefault()
    console.log(dadosUsuario.email)
    console.log(dadosUsuario.password)
  }

  return (
    <div>
      <h1>LOGIN</h1>

      <form onSubmit={loginSubmit}>

        <label> Email:</label>
          <input 
            type="text" 
            name="email" 
            placeholder="Digite o Email" 
            onChange={valorInput}
          />
        
        <br/>

        <label> Senha:</label>
          <input 
            type="password"
            name="password"
            placeholder="Digite a senha"
            onChange={valorInput}
          />
        <br/>

        <button type="submit"> Enviar Dados</button>

      </form>
    </div>
  );
}

export default Login;