import React, {useState} from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Header and Footer Menu
import Navmenu from '../../Components/MenuComponents/NavMenu/NavMenu';
import DropMenu from '../../Components/MenuComponents/DropdownMenu/DropdownMenu';
import FooterMenu from '../../Components/MenuComponents/FooterMenu/FooterMenu';

// Sections
import Hero from '../../Components/Sections/Hero/Hero';
import Card from '../../Components/Sections/Card/Card';
import TextSection from '../../Components/Sections/TextSection/TextSection';
import InfoSection from '../../Components/Sections/InfoSection/InfoSection';
import Carousel from '../../Components/Sections/CarouselSlider/Carousel';

// Animations
import { animationTwo, transition } from '../../animations/animations';

// Dummy Data
import {Herodata3} from '../../Data/heroData';
import {cardData} from '../../Data/cardData';
import {projectSectionData} from '../../Data/textData';
import {InfoData3} from '../../Data/InfoData';
import {SliderData} from '../../Data/sliderData';

const Section = styled.section`
    overflow-x: hidden;
`;

const ProjectPage = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Section>
            <motion.div initial="out" animate="end" exit="out" variants={animationTwo} transition={transition}>
                <div>
                <   Navmenu toggle={toggle} />
                    <DropMenu isOpen={isOpen} toggle={toggle} />
                    <Hero {...Herodata3} />
                    <InfoSection {...InfoData3} />
                    <Carousel {...SliderData} />
                    <TextSection {...projectSectionData} />
                    <Card {...cardData} />
                    <FooterMenu />
                </div>
            </motion.div>
        </Section>
    )
}

export default ProjectPage;
