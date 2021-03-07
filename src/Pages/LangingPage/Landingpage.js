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
import HeroSlider from '../../Components/Sections/Hero/HeroSlider';
import Card from '../../Components/Sections/Card/Card';

//  Animations
import { animationOne, transition } from '../../animations/animations';

// Dummy data
import { DemoData, HomeObjOne, HomeObjTwo, textData, Herodata, SliderData } from '../../Data/InfoData/InfoData';

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
                 <Hero {...Herodata} />
                <InfoSection {...HomeObjOne}/>
                <BackgroundVideo {...DemoData}/>
                <HeroSlider slides={SliderData}/>
                <InfoSection {...HomeObjTwo}/>
                <TextSection {...textData} />
                <Card />
                <FooterMenu />
            </div>
        </motion.div>
    )
}

export default Landingpage
