import React, { useState } from 'react'
import api from './../../services/config/api'

// export const Login = () => {
  function Login(){

  const [dadosUsuario, setUsuario] = useState({
    email: '',
    password: ''
  })

  const [status, setStatus] = useState({
    type: '',
    message: ''
});

  const valorInput = e => setUsuario({...dadosUsuario, [e.target.name]: e.target.value}) 


  const loginSubmit = async e =>{
    e.preventDefault()
    console.log(dadosUsuario.email)
    console.log(dadosUsuario.password)

    const headers = {
      'Content-Type': 'application/json'
    }

    // CONSUMIR A API E RETORNAR AS INFORMAÇÕES DE RETORNO DA ROTA
    api.post('login', dadosUsuario, {headers})
    .then((response) => {
      console.log(response.data.erro)
      console.log(response.data.message)
      console.log(response.data.token)

      if (response.data.erro) {
        setStatus({
            type: 'erro',
            message: response.data.message
        });
      } else {
          setStatus({
              type: 'success',
              message: response.data.message
          })
      }

    }).catch(() => {
      setStatus({
        type: 'erro',
        message: "Erro: Usuario ou Senha incorreto !!"
      })
    })
  }

  return (
    <div>
      <h1>LOGIN</h1>

      {status.type === 'erro'? <p>{status.message}</p> : ""}
      {status.type === 'success'? <p>{status.message}</p> : ""}

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