import React from 'react';

import { NavLink } from 'react-router-dom';
// import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { FaBell, FaChevronDown, FaSearch } from 'react-icons/fa';
import { Container, Toolbar, SearchBar, User, Notification } from './styles';
import globoPlay from '../../assets/globo.svg';
import user from '../../assets/user-pic.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <NavLink className="header-logo" to="algum">
        <img src={globoPlay} alt="GloboPlay" />
      </NavLink>
      <nav>
        <NavLink to="/">Agora na Globo</NavLink>
        <NavLink to="algum1">Novidades</NavLink>
        <NavLink to="algum2">Séries</NavLink>
        <NavLink to="algum3">Cinema</NavLink>
        <NavLink to="algum4">Infantil</NavLink>
        <NavLink id="more" to="algum5">
          Mais
          <FaChevronDown size={14} color="#ccc" />
        </NavLink>
      </nav>
      <Toolbar>
        <SearchBar>
          <FaSearch size={16} color="#ccc" />
          Busca
        </SearchBar>
        <Notification>
          <FaBell size={20} color="#ccc" />
        </Notification>
        <User>
          <img src={user} alt="Perfil" />
          <FaChevronDown size={14} color="#ccc" />
        </User>
      </Toolbar>
    </Container>
  );
};

export default Header;
