import React from 'react';
import styled from 'styled-components';
import {FontStyle} from '../../../Css/globalStyle';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem 0rem;
    background-color: #101522;

`;
    
const Container = styled.div`
    padding: 0rem 4rem;
    ${FontStyle};
`;

const Text = styled.h1`
    color: var(--color-white);
    font-size: 2rem;

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`;

const AnnouncementBar = (props) => {
    return (
        <Section>
            <Container>
                <Text>{props.text}</Text>
            </Container>
        </Section>
    )
}

export default AnnouncementBar
