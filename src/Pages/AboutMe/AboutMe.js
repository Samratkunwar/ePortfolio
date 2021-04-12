import React, {useState} from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {BsFillCaretDownFill} from 'react-icons/bs';

// Header and Footer Menu
import Navmenu from '../../Components/MenuComponents/NavMenu/NavMenu';
import DropMenu from '../../Components/MenuComponents/DropdownMenu/DropdownMenu';
import FooterMenu from '../../Components/MenuComponents/FooterMenu/FooterMenu';

// Sections
import Hero from '../../Components/Sections/Hero/Hero';
import TextSection from '../../Components/Sections/TextSection/TextSection';
import InfoSection from '../../Components/Sections/InfoSection/InfoSection';
import ContactMe from '../../Components/FormComponents/ContactmeComponent/contactMe';

// Animations
import { animationTwo, transition } from '../../animations/animations';

// Dummy Data
import {Herodata2} from '../../Data/heroData';
import {textData2} from '../../Data/textData';
import {HomeObjFive, HomeObjFour, HomeObjSix, HomeObjThree} from '../../Data/InfoData';
import Samrat_resume from '../../Data/resume/SamratKunwar_CV.pdf';

const Section = styled.section`
    overflow-x: hidden;
`;

const Resume = styled.a`
    position: fixed;
    height: 7rem; 
    width: 7rem;
    border-radius: 50%;
    bottom: 1.5rem;
    left: 1.5rem;
    z-index: 1000;
    background: rgba(255, 255, 255, .1);
    box-shadow: 20px 20px 20px rgba(0, 0, 0, .5);
    backdrop-filter: blur(5px);
    border-top: .5px solid rgba(225, 225, 225, .2);
    border-left: 1px solid rgba(225, 225, 225, .2);
`;

const ResumeButtonIcon = styled(BsFillCaretDownFill)`
    margin-top: 1.6rem;
    font-size: 4rem;
    color: var(--color-white);
    cursor: pointer;
    user-select: none;
    transform: translateY(20px);
    opacity: 0;
    transition: .5s;
    
    ${Resume}:hover & {
        transform: translateY(0px);
        opacity: 1;
    }

    @media screen and (max-width: 360px) {
        transform: translateY(0px);
        opacity: 1;
    }
`;


const AboutMe = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Section>
            <motion.div initial="out" animate="end" exit="out" variants={animationTwo} transition={transition}>
                <div>
                    <Navmenu toggle={toggle} />
                    <DropMenu isOpen={isOpen} toggle={toggle} />
                    <Hero {...Herodata2} />
                    <InfoSection {...HomeObjThree} />
                    <InfoSection {...HomeObjFour} />
                    <InfoSection {...HomeObjFive} />
                    <InfoSection {...HomeObjSix} />
                    <TextSection {...textData2} />
                    <Resume href={Samrat_resume} download>
                        <ResumeButtonIcon />
                    </Resume>
                    <FooterMenu />
                </div>
                <ContactMe />
            </motion.div>
        </Section>
    )
}

export default AboutMe;
