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
import Card from '../../Components/Sections/Card/Card';
import Carousel from '../../Components/Sections/CarouselSlider/Carousel';

//  Animations
import { animationOne, transition } from '../../animations/animations';

// Dummy data
import { HomeObjOne, HomeObjTwo } from '../../Data/InfoData';
import {Herodata} from '../../Data/heroData';
import {textData} from '../../Data/textData';
import {SliderData} from '../../Data/sliderData';
import {DemoData} from '../../Data/bacVidData';

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
                <Carousel slides={SliderData} sliderType="HeroSlider" />
                <InfoSection {...HomeObjTwo}/>
                <TextSection {...textData} />
                <Card />
                <FooterMenu />
            </div> 
        </motion.div>
    )
}

export default Landingpage
