import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navLinks } from '../../../Data/NavLinks/navLinks';
import { FaTimes } from 'react-icons/fa';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #55d980;
    display: grid;
    align-items: center;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;
`;
const DropdownLink = styled(Link)`
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    
    &:hover {
        color: #000d1a;
        text-decoration: none;
    }
`;

const DropMenu = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {navLinks.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>{item.title}</DropdownLink>
                    ))}
                </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default DropMenu
