import React from 'react'
import styled from 'styled-components';
import {FontStyle} from '../../../Css/globalStyle';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 6rem 0rem;
    background-color: #101522;

`;
    
const Container = styled.div`
    padding: 0rem 4rem;
    font-size: 25px; 
    ${FontStyle};

    p {
        color: #fff; 
    }
`;


const TextSection = (props) => {
    return (
        <Section>
            <Container>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                <p>{props.text}</p>
            </Container>
        </Section>
    )
}

export default TextSection
