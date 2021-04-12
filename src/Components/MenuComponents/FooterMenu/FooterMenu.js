import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

const FooterContainer = styled.footer`
    background-color: #101522;
`;

const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%
    }
`;

const FooterLinkTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    opacity: .7;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
        text-decoration: none;
        opacity: 1;
    }
`;

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    } 
`;

const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        color: #01bf71;
        text-decoration: none;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    font-size: 1rem;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        color: #01bf71;
    }
`;


const FooterMenu = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Developed with React and CSS. Designed inspired through a series of learning and courses undertaken. 
                            </FooterLinkTitle>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            {/* <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to='/'>Home</FooterLink>
                            <FooterLink to='/'>About</FooterLink>
                            <FooterLink to='/'>Projects</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Navigators</FooterLinkTitle>
                            <FooterLink to='/home'>Home</FooterLink>
                            <FooterLink to='/aboutme'>About</FooterLink>
                            <FooterLink to='/projects'>Projects</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            {/* <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to='/'>Home</FooterLink>
                            <FooterLink to='/'>About</FooterLink>
                            <FooterLink to='/'>Projects</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Thank you for Visiting my site. Looking forward for your message.
                            </FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            {/* <img src={"./img/logo1.png"} alt="full logo" /> */}
                            Samrat
                        </SocialLogo>
                        <WebsiteRights>
                            Samrat © {new Date().getFullYear()} All rights Reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://linkedin.com/in/samrat-kunwar-4491b814a" target="_blank" arial-label="LlinkedIn"><FaLinkedinIn /></SocialIconLink>
                            <SocialIconLink href="https://github.com/Samratkunwar" target="_blank" arial-label="GitHub"><FaGithub /></SocialIconLink>
                            <SocialIconLink href="https://www.google.com/intl/en-GB/gmail/about/#" target="_blank" arial-label="Email"><MdEmail /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default FooterMenu;