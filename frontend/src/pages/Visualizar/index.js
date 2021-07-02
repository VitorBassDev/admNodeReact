import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';

import { Container, ConteudoTitulo, Titulo, BotaoAcao, AlertDanger, AlertSuccess, ButtonInfo, Conteudo } from '../../styles/custom_adm';
import { ConteudoUsuario } from './styles';

import api from '../../services/config/api';

export const Visualizar = (props) => {

    const [data, setData] = useState([]);
    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        messagem: ''
    });

    useEffect(() => {
        const getUsuario = async () => {
            await api.get("/usuario/" + id)
                .then((response) => {
                    if (response.data.erro) {
                        setStatus({
                            type: 'erro',
                            messagem: response.data.messagem
                        });
                    } else {
                        setData(response.data.usuario);
                    }
                })
                .catch(() => {
                    setStatus({
                        type: 'erro',
                        messagem: "Erro: Tente mais tarde!"
                    });
                });
        }

        getUsuario();
    }, [id]);

    return (
        <Container>

            <Menu />

            <ConteudoTitulo>
                <Titulo>Visualizar Usuário</Titulo>
                <BotaoAcao>
                    <Link to="/listar">
                        <ButtonInfo>Listar</ButtonInfo>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>

            <Conteudo>
                {status.type === 'erro' ? <AlertDanger>{status.messagem}</AlertDanger> : ""}
                {status.type === 'success' ? <AlertSuccess>{status.messagem}</AlertSuccess> : ""}

                <ConteudoUsuario>ID: {data.id}</ConteudoUsuario>
                <ConteudoUsuario>Nome: {data.nome}</ConteudoUsuario>
                <ConteudoUsuario>E-mail: {data.email}</ConteudoUsuario>
            </Conteudo>
        </Container>
    )
}