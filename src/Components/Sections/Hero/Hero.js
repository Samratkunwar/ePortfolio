import React from 'react'
import styled from 'styled-components';
import {FontStyle} from '../../../Css/globalStyle';

const Section = styled.section`
    background: url(${({image}) => image && image}) center;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: -60px;
    background-size: cover;
    ${FontStyle} 
`;

const Container = styled.div`
    color: var(--color-white);
    padding: 2rem;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.4);
    margin: 2rem;
    border-radius: 10px;

    h1{
        font-size: clamp(2rem, 8vw, 5rem);
        margin-bottom: 0.5rem;
    }

    p{
        color: var(--color-light-white);
        font-size: clamp(.5rem, 5vw, 2rem);
        margin-bottom: 1rem;
    }

    button{
        font-size: clamp(0.8rem, 4vw, 1.2rem);
        margin-bottom: 0.8rem 2rem;
        color: #000;
        background: #ffb347;
        background: linear-gradient(to right, #ffcc33, #ffb347);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
    }
`;

const CentreTextContainer = styled.div`

    position: absolute;  
    text-align: justify;
    color: var(--color-white);
    padding: 10rem;
    padding-right: 80rem;
    margin: 20rem 2rem;
    border-radius: 10px;
    
    h1{
        font-size: clamp(2rem, 8vw, 5rem);
        margin-bottom: 0.5rem;
    }

    p{  
        color: var(--color-light-white);
        font-size: clamp(.5rem, 5vw, 2rem);
        margin-bottom: 1rem;
    }

    button{
        font-size: clamp(0.8rem, 4vw, 1.5rem);
        margin-bottom: 0.8rem 2rem;
        color: var(--color-black);
        background: linear-gradient(to right, #ffcc33, #ffb347);
        border: none;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
        outline: none;
    } 

    @media screen and (max-width: 950px) {
        padding: 2rem;
        margin: 20rem 2rem;
        padding-right: 2rem;

        p {
            font-size: clamp(.5rem, 5vw, 1.5rem);
        }

        a {
            text-decoration: none;
            color: var(--color-white);
        }
    }
`;

const Hero = (props) => {

    let HeroTextContainer = null;
    switch (props.elementType) {
        case("CentreText"):
            HeroTextContainer = <CentreTextContainer>
                                    <h2>{props.subtitle}</h2>
                                    <h1>{props.title}</h1>
                                    <p>{props.description}</p>
                                    <a href={props.button.link}><button>{props.button.label}</button></a>
                                </CentreTextContainer>
            break; 
        case("TextBox"):
            HeroTextContainer = <Container>
                                    <h2>{props.subtitle}</h2>
                                    <h1>{props.title}</h1>
                                    <p>{props.description}</p>
                                    <a href={props.button.link}><button>{props.button.label}</button></a>
                                </Container>
            break;
        default:
            HeroTextContainer = <CentreTextContainer>
                                    <h2>{props.subtitle}</h2>
                                    <h1>{props.title}</h1>
                                    <p>{props.description}</p>
                                    <a href={props.button.link}><button>{props.button.label}</button></a>
                                </CentreTextContainer>
            break;
    }

    return (
        <Section image={props.image}>
            {HeroTextContainer}
        </Section>
    )
}

export default Hero
