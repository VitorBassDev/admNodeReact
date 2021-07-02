import styled from 'styled-components';

export const NavList = styled.ul`
    display: flex;
    background-color: #0d6efd;
    padding: 15px 5px;
    font-family: sans-serif;
    margin-bottom: 15px;

    a{
        text-decoration: none;
        color: #f9f9f9;
        margin: 0 8px;
    }

    a:hover{
        color: #d0d2db;
    }

    li{
        margin: 0 0.8rem
        font-size: 1.0em;
        list-style: none;
    }
`;