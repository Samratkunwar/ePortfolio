import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 6rem 0rem;
    background-color: #000;

`;
    
const Container = styled.div`
    padding: 0rem 4rem;
    font-size: 25px; 
    font-family: 'Shippori Mincho B1', serif;

    p {
            color: #fff; 
        }
`;


const TextContent = ({text}) => {
    return (
        <Section>
            <Container>
                <p>{text}</p>
            </Container>
        </Section>
    )
}

export default TextContent
