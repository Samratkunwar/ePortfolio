import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {FontStyle} from '../../../Css/globalStyle';
import './splash.css';
import { Redirect } from 'react-router-dom';

const Section = styled.div`
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #191919;
    ${FontStyle}
`;
const Loader = styled.div``;



const Splashscreen = () => {

    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setRedirect(true);
        }, 8000)
    }, []);

    let Splash = (
        <Section>
            <Loader>
                <svg
                    width="200" 
                    height="200"
                    viewBox="0 0 818 498"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="strokeGradient">
                            <stop offset="5%" stop-color="#191919" />
                            <stop offset="60%" stop-color="#ff0000" />
                            <stop offset="100%" stop-color="#920000" />
                        </linearGradient>
                    </defs>
                    <path
                    className="pulse"
                    d="M0 305.5H266L295.5 299.5L384 496L460 1.5L502.5 377.5L553 305.5H818"
                    stroke-width="8" />
                </svg>
                <span>Loading...</span>
            </Loader>
        </Section>
    )

    return (
        <div>
            {
            loading 
            ?   Splash
            :   redirect ? (<Redirect to="/home" />) : null
            }
        </div>
        
    )
}

export default Splashscreen
