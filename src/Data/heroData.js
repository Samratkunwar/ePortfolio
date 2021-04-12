import ImageOne from './Images/photo1.jpg';
import ImageTwo from './Images/photo2.png';
import ProjectHero from './Images/websiteImages/projectHero.png';

// Value choices for elemetType
// "CentreText" for text at centre of the hero section
// "TextBox" for text at the bottom left corner of the screen

export const Herodata = {
    image: ImageOne,
    title: "Website developer and user interface designer",
    subtitle: "Hi! I am Samrat",
    description: "Over the past few months, I have worked as a web developer and a UI designer in many of my internships and self made projects.",
    button: {
        link: '#Section',
        label: 'Contact Me'
    },
    elementType: "CentreText"
};
export const Herodata2 = {
    image: ImageTwo,
    title: "Hello There!",
    description: "Thank you for your interest.",
    button: {
        link: '#aboutme',
        label: 'Scroll Down'
    },
    elementType: "TextBox"
};

export const Herodata3 = {
    image: ProjectHero,
    title: "My Projects",
    description: "Welcome to my projects gallery. The website images below are a pure form of practice and inspirations while in my skill development journey as a Front-end developer.",
    button: {
        link: '#projects',
        label: 'Projects'
    },
    elementType: "CentreText"
};