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
    ${FontStyle};
`;

const SectionTitle = styled.h1`
    color: var(--color-white);
    font-size: 3.5rem;
    text-transform: uppercase;

    @media screen and (max-width: 500px) {
        font-size: 2rem;
    }

`;
const SectionSubtitle = styled.h2`
    color: var(--color-light-white);
    font-size: 2rem;
    padding-top: 10px;
    padding-bottom: 10px;

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`;
const SectionParagraph = styled.p`
    color: var(--color-white);
    font-size: 2.2rem;

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
    }
`;

const TextSection = (props) => {
    return (
        <Section>
            <Container>
                <SectionTitle>{props.title}</SectionTitle>
                <SectionSubtitle>{props.subtitle}</SectionSubtitle>
                <SectionParagraph>{props.text}</SectionParagraph>
            </Container>
        </Section>
    )
}

export default TextSection
