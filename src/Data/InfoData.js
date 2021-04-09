// values for the field "imgStart"
// true - If you want image on left
// fales - If you want image on right

export const HomeObjOne= {
    primary: true,
    lightBg: false,
    imgStart: "",
    LightTopLine: true,
    lightTextDesc: true,
    buttonLabel: "About Me!",
    buttonLink: '/aboutme',
    Description: "I started my journey as a web developer with the intereset in software development. Throughout my university years, I have worked with many web development technologies. Now, after graduating, I am looking for a competitive environment to showcase my skills, network and develop new ones along the way.  ",
    headline: "Undertaken as an interest, pursued as a hobby ",
    lightText: true,
    topLine: "Software Developer",
    img: require('./Images/webdev.svg'),
    alt: 'Image', 
    start: '',
};


export const HomeObjTwo= {
    primary: false,
    lightBg: true,
    imgStart: true,
    LightTopLine: false,
    lightTextDesc: false,
    buttonLabel: "View Projects!",
    buttonLink: '/projects',
    Description: "While developing my skills, I have worked on several projects of my own. I have worked with different web technologies involving the use of MEAN and MERN stack. However, majority of my focus have been towards front-end development with sound knowlwdge of back-end technologies. ",
    headline: "From Socail Media Application to a simple to-do list.",
    lightText: false,
    topLine: "Self-made Projects",
    img: require('./Images/project.svg'),
    alt: 'Image', 
    start: 'true',
};

