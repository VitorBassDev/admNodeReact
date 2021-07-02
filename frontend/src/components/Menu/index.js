import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { NavList } from './styles';

import { Context } from '../../Context/AuthContext';

const Menu = () => {
    const { handleLogout } = useContext(Context);
    return (
        <nav>
            <NavList>
                <NavLink to="/dashboard" exact>
                    <li>Dashboard</li>
                </NavLink>

                <NavLink to="/listar" exact>
                    <li>Usuários</li>
                </NavLink>

                <NavLink to="#" exact>
                    <li onClick={handleLogout}>Sair</li>
                </NavLink>
            </NavList>
        </nav>
    );
}

export default Menu;