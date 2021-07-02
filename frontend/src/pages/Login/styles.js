import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items:center;
    justify-content:center;
    height: 98vh;
    width: 100%;
`;

export const FormLogin = styled.section`    
    width: 310px;
    height: 320px;
    margin: 20px auto;
    box-shadow: 0 0 1em #6c757d;
    padding: 20px;
`;

export const Titulo = styled.h1`    
    color: #3e3e3e;
    font-size: 27px;
    text-align: center;
    padding: 20px 5px;
`;

export const Input = styled.input`    
    width: 100%;
    padding: 12px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    font-size: 16px;
    :focus {
        outline: none !important;
        border: 1px solid #1636dd;
    }
`;

export const ButtomPrimary = styled.button`    
    width: 100%;
    background-color: #0d6efd;
    color: #fff;
    padding: 7px 10px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    :hover{
        background-color: #1636dd;
        color: #fff;
    }
`;

export const AlertDanger = styled.p`    
    background-color: #f8d7da;
    color: #842029;
    margin: 20px 0;
    border: 1px solid #f5c2c7;
    border-radius: 4px;
    padding: 7px;
`;

export const AlertSuccess = styled.p`    
    background-color: #d1e7dd;
    color: #0f5132;
    margin: 20px 0;
    border: 1px solid #badbcc;
    border-radius: 4px;
    padding: 7px;
`;
