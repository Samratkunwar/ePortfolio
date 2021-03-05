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
import SlideShow from '../../Components/Sections/SlideShow/SlideShow';

//  Animations
import { animationOne, transition } from '../../animations/animations';

// Dummy data
import Image from '../../Data/Images/photo1.jpg';
import { DemoData, HomeObjOne, HomeObjTwo, textData } from '../../Data/InfoData/InfoData';

const Landingpage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <div>
                <Navmenu toggle={toggle} />
                <DropMenu isOpen={isOpen} toggle={toggle} />
                <Hero image={Image} />
                <InfoSection {...HomeObjOne}/>
                <BackgroundVideo {...DemoData}/>
                <SlideShow />
                <InfoSection {...HomeObjTwo}/>
                <TextSection {...textData} />
                <FooterMenu />
            </div>
        </motion.div>
    )
}

export default Landingpage
