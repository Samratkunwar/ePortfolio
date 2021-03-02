import React, {useState} from 'react'
import Hero from '../../Components/Hero/Hero'
import Navmenu from '../../Components/NavMenu/Navmenu.component'
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../animations/animations';
import Image from '../../Data/Images/photo1.jpg';
import DropMenu from '../../Components/DropdownMenu/DropdownMenu';
import ImagetextContent from '../../Components/ImageTextContent/ImagetextContent';
import { InfoData } from '../../Data/InfoData/InfoData';

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
                <ImagetextContent {...InfoData} />
            </div>
        </motion.div>
    )
}

export default Landingpage
