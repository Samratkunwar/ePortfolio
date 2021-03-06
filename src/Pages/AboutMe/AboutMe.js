import React, {useState} from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';

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

const Section = styled.section`
    overflow-x: hidden;
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
                    <FooterMenu />
                </div>
                <ContactMe />
            </motion.div>
        </Section>
    )
}

export default AboutMe;
