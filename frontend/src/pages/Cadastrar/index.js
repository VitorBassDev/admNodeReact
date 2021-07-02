import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';

import { Container, ConteudoTitulo, Titulo, BotaoAcao, AlertDanger, AlertSuccess, ButtonInfo, Conteudo, Form, Label, Input, ButtonSuccess } from '../../styles/custom_adm';

import api from '../../services/config/api';

export const Cadastrar = () => {

const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    password: ''
})

    const [status, setStatus] = useState({
        type: '',
        messagem: ''
    });

    const valorInput = e => setUsuario({...usuario , [e.target.name]: e.target.value});

    const cadUsuario = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }

        await api.post("/usuario", usuario, {headers})
        .then((response) => {
            if(response.data.erro){
                setStatus({
                    type: 'erro',
                    messagem: response.data.messagem
                });
            }else{
                setStatus({
                    type: 'success',
                    messagem: response.data.messagem
                });
            }

        }).catch(() => {
            setStatus({
                type: 'erro',
                messagem: 'Erro: Tente mais tarde!'
            });
        });
    }

    return (
        <Container>

            <Menu />

            <ConteudoTitulo>
                <Titulo>Cadastrar Usuário</Titulo>
                <BotaoAcao>
                    <Link to="/listar">
                        <ButtonInfo>Listar</ButtonInfo>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>

            <Conteudo>
                {status.type === 'erro' ? <AlertDanger>{status.messagem}</AlertDanger> : ""}
                {status.type === 'success' ? <AlertSuccess>{status.messagem}</AlertSuccess> : ""}


                <Form onSubmit={cadUsuario}>
                    <Label>Nome: </Label>
                    <Input type="text" name="nome" placeholder="Nome do usuário" onChange={valorInput} />

                    <Label>E-mail: </Label>
                    <Input type="email" name="email" placeholder="E-mail do usuário" onChange={valorInput} />

                    <Label>Senha: </Label>
                    <Input type="password" name="password" placeholder="Senha para acessar o administrativo" autoComplete="on" onChange={valorInput} />

                    <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
                </Form>
            </Conteudo>

        </Container>
    )
}