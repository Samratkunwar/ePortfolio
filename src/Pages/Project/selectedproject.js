import React, {useState} from 'react';
import {useParams} from 'react-router';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Header and Footer Menu
import Navmenu from '../../Components/MenuComponents/NavMenu/NavMenu';
import DropMenu from '../../Components/MenuComponents/DropdownMenu/DropdownMenu';
import FooterMenu from '../../Components/MenuComponents/FooterMenu/FooterMenu';

// Sections
import TextSection from '../../Components/Sections/TextSection/TextSection';
import ContactMe from '../../Components/FormComponents/ContactmeComponent/contactMe';

// Animations
import { animationTwo, transition } from '../../animations/animations';

// Dummy Data
import {ErrorMessage} from '../../Data/textData';

const Section = styled.section`
    overflow-x: hidden;
`;



const SelectedProject = () => {
    const {id} = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    console.log(id);
    return (
        <Section>
            <motion.div initial="out" animate="end" exit="out" variants={animationTwo} transition={transition}>
                <div>
                    <Navmenu toggle={toggle} />
                    <DropMenu isOpen={isOpen} toggle={toggle} />
                    <TextSection  />
                    <TextSection {...ErrorMessage} />
                    <FooterMenu /> 
                </div>
                <ContactMe />
            </motion.div>
        </Section>
    )
}

export default SelectedProject;