import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navLinks } from '../../Data/NavLinks/navLinks';
import Hammenu from '../../Data/Images/list.svg'

const Navbar = styled.nav`
    height: 60px;
    background: transparent;
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
        position: absolute:
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const Logo = styled(Link)`
    color: #fff;
    padding-left: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
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

export default Navmenu




































// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import { navLinks } from '../../Data/navLinks';

// import './Navmenu.component.css';

// class NavMenu extends Component {
//     render () {

//         // const Nav_menu = (
//             // <div>
//             //     {navLinks,map ((item, index) => {
//             //         <Link className="navMenuLinks" to={item.}
//             //     })}
//             //     <li className="navigation_link"><a href="/">Home</a></li>
//             //     <li className="navigation_link"><a href="/">Experience</a></li>
//             //     <li className="navigation_link"><a href="/profile">Profile</a></li>
//             //     <li className="navigation_link"><a href="/project/1">Projects</a></li>
//             //     <li className="navigation_link"><a href="/profile">Extra-carricular</a></li>
//             //     {/* <li className="navigation_link"><a href="/">Home</a></li> */}
//             // </div>

//         // )

//         return (
//             // <ul className="navigation_menu">
//             //     {Nav_menu}
//             // </ul>
//             <div className="navigation_menu">
//                 {navLinks.map((item, index) => (
//                     <Link className="navigation_link" to={item.link} key={index}>
//                         {item.title}
//                     </Link>
//                 ))}

//             </div>
//         )
//     }
// }

// export default NavMenu;
