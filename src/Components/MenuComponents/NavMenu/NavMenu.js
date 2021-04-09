import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navLinks } from '../../../Data/NavLinks/navLinks';
import Hammenu from '../../../Data/Images/list.svg'
import { FontStyle } from '../../../Css/globalStyle';

const Navbar = styled.nav`
    height: 60px;
    background: #101522;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuBars = styled.i`
    display: none;
    @media screen and (max-width: 760px) {
        display: block;
        background-image: url(${Hammenu});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const Logo = styled(Link)`
    color: #fff;
    padding-left: 1rem;
    text-decoration: none;
    font-size: 3rem;
    font-weight: bold;
    font-style: italic;
    
    
    &:hover {
        color: #55d980; 
        text-decoration: none;
    }
`;

const NavItems = styled.div`
    text-decoration: none;
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

const NavbarLink = styled(Link)`
    color: #fff; 
    text-decoration: none;
    padding: 1rem;
    font-style: italic;
    font-size: 1.6rem;
    ${FontStyle}
    
    &:hover {
        color: #55d980; 
        text-decoration: none;
    }
`;

const Navmenu = ({toggle}) => {
    return (
        <Navbar>
            <Logo to="/">Portfolio</Logo>
            <MenuBars onClick={toggle} />
            <NavItems>
                {navLinks.map((item, index) => (
                    <NavbarLink to={item.link} key={index}>{item.title}</NavbarLink>
                ))}
            </NavItems>
        </Navbar>
    )
}

export default Navmenu;