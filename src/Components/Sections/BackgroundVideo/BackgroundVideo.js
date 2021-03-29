import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.div`
    padding: 15rem 0;
    position: relative;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: .5;
    overflow: hidden;
`;

const Video = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Heading = styled.h1`
    text-align: center;
    margin-bottom: 8rem;
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, #7ed56f, #28b485);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: .2rem;
    transform: all .2s; 

    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); 
    }
`;

const Content = styled.div`
    max-width: 114rem;
    margin: 0 auto; 

    &:not(:last-child) {
        margin-bottom: 8rem; 
    }

`;

const ContentWrapper = styled.div`
    width: 75%;
    margin: 0 auto;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.4);
    background-color: var(--color-white);
    opacity: .7;
    border-radius: 3px;
    padding: 6rem;
    padding-left: 9rem;
    font-size: var(--default-font-size);
    transform: skewX(-12deg);

    @media screen and (max-width: 500px) {
        transform: skewX(0deg);
        width: 85%;
    }
`;

const ImageWrapper = styled.div`
    width: 15rem;
    height: 15rem;
    float: left;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    transform: translate(-3rem) skewX(12deg);
    position: relative;
    overflow: hidden;
    
    @media screen and (max-width: 500px) {
        transform: translate(0rem) skewX(0deg);
        margin-left: -1rem;
    }
`;

const Image = styled.img`
    height: 100%;
    transform: translateX(-4rem) scale(1.2);
    transition: all .5s;
    backface-visibility: hidden;

    ${ContentWrapper}:hover & {
        transform: translateX(-4rem) scale(1);
        filter: blur(3px) brightness(90%);
    }
`;

const ImageCaption = styled.figcaption`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: var(--color-white);
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all .5s;
    backface-visibility: hidden;
    
    ${ContentWrapper}:hover & {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

`;

const TextWrapper = styled.div`
    transform: skewX(12deg);
    text-align: left;

    @media screen and (max-width: 500px) {
        transform: skewX(0deg);
    }
`;

const TextHeader = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 2rem; 

`;

const TextParagraph = styled.p``;

const LinkWrapper = styled.div`
    margin-bottom: 10rem;
    text-align: center;
`;

const ContentLink = styled(Link)`
    &:link, &:visited {
        font-size: 1.6rem;
        color: #55c57a;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid #55c57a;
        padding: 3px; 
    }
  
    &:hover {
        background-color: #55c57a;
        color: #fff;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
        transform: translateY(-2px); 
    }

    &:active {
        box-shadow: 0 -5rem 1rem rgba(0, 0, 0, 0.15);
        transform: translateY(0); 
    }
`;

const BackgroundVideo = ({
    BacVideoMp4, BacVideoWebm, SectionHeading, ButtonLink, ButtonLabel, Sections, 
}) => {
    return (
        <Section>

            <Background>
                <Video autoPlay muted loop>
                    <source src={BacVideoMp4} type="video/mp4"></source>
                    <source src={BacVideoWebm} type="video/webm"></source>
                    Your Browser doesn't support the video!
                </Video>
            </Background>

            <Heading>{SectionHeading}</Heading>

            {Sections.map((item, index) => (
                <Content>
                    <ContentWrapper key={index}>
                        <ImageWrapper>
                            <Image src={item.Img} alt={item.ImgDec} />
                            <ImageCaption>{item.ImgCaption}</ImageCaption>
                        </ImageWrapper>
                        
                        <TextWrapper>
                            <TextHeader>
                                {item.ImgHeading}
                            </TextHeader>
                            <TextParagraph>
                                {item.ImgParagraph}
                            </TextParagraph>
                        </TextWrapper> 
                    </ContentWrapper> 
                </Content>
            ))}

            <LinkWrapper>
                <ContentLink to={ButtonLink}>{ButtonLabel} &rarr;</ContentLink>
            </LinkWrapper>

        </Section>            
    )
}

export default BackgroundVideo;
