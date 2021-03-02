import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Navmenu from '../../Components/NavMenu/Navmenu.component'
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../../animations/animations';
import Image from '../../Data/Images/photo3.jpg';
import styled from 'styled-components';

const Section = styled.section`
    overflow-x: hidden;
`;

const ProjectPage = () => {
    return (
        <Section>
            <motion.div initial="out" animate="end" exit="out" variants={animationTwo} transition={transition}>
                <div>
                    <Navmenu />
                    <Hero image={Image} />
                </div>
            </motion.div>
        </Section>
    )
}

export default ProjectPage;
