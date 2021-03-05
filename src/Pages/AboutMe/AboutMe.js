import React, {useState} from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Header and Footer Menu
import Navmenu from '../../Components/MenuComponents/NavMenu/NavMenu';
import DropMenu from '../../Components/MenuComponents/DropdownMenu/DropdownMenu';
import FooterMenu from '../../Components/MenuComponents/FooterMenu/FooterMenu';

// Sections
import Hero from '../../Components/Sections/Hero/Hero';

// Animations
import { animationTwo, transition } from '../../animations/animations';

// Dummy Data
import Image from '../../Data/Images/photo2.jpg';


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
                    <Hero image={Image} />
                    <FooterMenu />
                </div>
            </motion.div>
        </Section>
    )
}

export default AboutMe;