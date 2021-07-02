import React, { useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { Container, FormLogin, Titulo, Input, ButtomPrimary, AlertDanger, AlertSuccess } from './styles';
import {Context} from '../../Context/AuthContext'
import api from './../../services/config/api'

// export const Login = () => {
  function Login(){

  const history = useHistory()

  const { signIn } = useContext(Context);

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
          localStorage.setItem('token', JSON.stringify(response.data.token))
          api.defaults.headers.Authorization = `Bearer ${response.data.token}`
          signIn(true);
          return history.push('/dashboard')
      }

    }).catch(() => {
      setStatus({
        type: 'erro',
        message: "Erro: Usuario ou Senha incorreto !!"
      })
    })
  }

  return (
    <Container>
      <FormLogin>
        { /* Titulo da página */}
        <Titulo>Login</Titulo>
      {status.type === 'erro'? <AlertDanger>{status.message}</AlertDanger> : ""}
      {status.type === 'success'? <AlertSuccess>{status.message}</AlertSuccess> : ""}

      <form onSubmit={loginSubmit}>

          <Input 
            type="text" 
            name="email" 
            placeholder="Digite o Email" 
            onChange={valorInput}
          />

          <Input 
            type="password"
            name="password"
            placeholder="Digite a senha"
            onChange={valorInput}
          />
        

        <ButtomPrimary type="submit"> Enviar Dados</ButtomPrimary>
        </form>
        </FormLogin>
      </Container>
  );
}

export default Login;