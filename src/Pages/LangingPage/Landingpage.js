import React, {useState} from 'react'
import { motion } from 'framer-motion';

// Header and Footer Menu
import Navmenu from '../../Components/MenuComponents/NavMenu/NavMenu';
import DropMenu from '../../Components/MenuComponents/DropdownMenu/DropdownMenu';
import FooterMenu from '../../Components/MenuComponents/FooterMenu/FooterMenu';

// Sections Component
import Hero from '../../Components/Sections/Hero/Hero';
import InfoSection from '../../Components/Sections/InfoSection/InfoSection';
import TextSection from '../../Components/Sections/TextSection/TextSection';
import BackgroundVideo from '../../Components/Sections/BackgroundVideo/BackgroundVideo';
import ContactMe from '../../Components/FormComponents/ContactmeComponent/contactMe';
import AnnouncementBar from '../../Components/Sections/AnnouncementBar/announcementbar';

//  Animations
import { animationOne, transition } from '../../animations/animations';

// Dummy data
import { HomeObjOne, HomeObjTwo } from '../../Data/InfoData';
import {Herodata} from '../../Data/heroData';
import {textData3} from '../../Data/textData';
import {DemoData} from '../../Data/bacVidData';
import {announcement} from '../../Data/announcementbarData';

const Landingpage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <div>
                <AnnouncementBar {...announcement}/>
                <Navmenu toggle={toggle} />
                <DropMenu isOpen={isOpen} toggle={toggle} />
                <Hero {...Herodata} />
                <InfoSection {...HomeObjOne}/>
                <BackgroundVideo {...DemoData}/>
                <InfoSection {...HomeObjTwo}/>
                <TextSection {...textData3} />
                <FooterMenu />
            </div> 
            <ContactMe />
        </motion.div>
    )
}

export default Landingpage
