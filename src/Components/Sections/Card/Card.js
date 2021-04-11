import React from 'react';
import styled from 'styled-components';
import './Card.css';
import {FontStyle} from '../../../Css/globalStyle';


const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 10000px;
    flex-wrap: wrap;
    z-index: 1;
    background-size: cover;
    padding: 15rem 0rem;
    ${FontStyle}
    
    @media screen and (max-width: 950px) {
        padding: 5rem 0rem;
        max-height: 1200vh;

    }
`;

const CardWrapper = styled.div`
    position: relative;
    width: 280px;
    height: 400px;
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, .5);
    background: rgba(225, 225, 225, .1);
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(225, 225, 225, .5);
    border-left: 1px solid rgba(225, 225, 225, .5);
    backdrop-filter: blur(5px);
`;

const CardContent = styled.div`
    padding: 20px;
    text-align: center;
    transform: translateY(100px);
    opacity: 0;
    transition: .5s;

    & h2 {
        position: absolute;
        top: -60px;
        right: 20px;
        font-size: 10rem;
        color: rgba(225, 225, 225, .2);
        pointer-events: none;
    }

    & h3 {
        font-size: 1.8rem;
        color: var(--color-white);
        z-index: 1;
        font-weight: bold;
    }

    & p {
        font-size: 1rem;
        color: var(--color-white);
        font-weight: 400;
    }

    & a {
        position: relative;
        display: inline-block;
        padding: 8px 20px;
        margin-top: 15px;
        background: var(--color-white);
        color: #000;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    }

    &:hover {
        transform: translateY(0px);
        opacity: 1;
    }
`;

const Card = (props) => {
    return (
        <Container className="container">
            {props.cardInfo.map((data, index) => (
               <CardWrapper key={index} className="CardComponent">
                   <CardContent>
                        <h2>{data.subtitle}</h2>
                        <h3>{data.title}</h3>
                        <p>{data.text}</p>
                        <a href={data.link}>{data.linktitle}</a>
                    </CardContent>
               </CardWrapper> 
            ))}
        </Container>
    )
}

export default Card;
