import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    /* max-width: 100vw; */
    /* height: 5vh; */
    background: #000;
    text-align: center;
    justify-content: center;
`;

const Text = styled.h1`
    color: var(--color-white);
    font-size: 1500px;
`;

const AnnouncementBar = (props) => {
    return (
        // <Section>
            <Text>{props.text}</Text>
        // </Section>
    )
}

export default AnnouncementBar
