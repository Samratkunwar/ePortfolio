// values for the field "imgStart"
// true - If you want image on left
// fales - If you want image on right

const Python = "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80";

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
    img: require('./Images/illustrations/webdev.svg'),
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
    img: require('./Images/illustrations/project.svg'),
    alt: 'Image', 
    start: 'true',
};

export const InfoData3= {
    primary: false,
    lightBg: true,
    imgStart: true,
    LightTopLine: false,
    lightTextDesc: false,
    buttonLabel: "Projects!",
    buttonLink: '#container',
    Description: "From MERN/ MEAN stack to the PHP framework Laravel, I have worked with many web development technologies. The following section should give you a brief demonstration of my work.",
    headline: "From Socail Media Application to a simple to-do list.",
    lightText: false,
    topLine: "Self-made Projects",
    img: require('./Images/illustrations/webdesigner.svg'),
    alt: 'Image', 
    start: 'true',
};

export const HomeObjThree = {
    primary: false,
    lightBg: true,
    imgStart: true,
    LightTopLine: false,
    lightTextDesc: false,
    buttonLabel: "Contact Me!",
    buttonLink: '#Section',
    Description: "Completing my high school in Nepal, I came to Australia to pursue my bachelor's degree in Information Technology. Following my interest in programming and software development, I completed my degree with a major in software development. Throughout my Uni years, I have worked as both web developer and software developer to upskill my knowledge of both fields. Now, I am looking for a spot in the IT industry to showcase and hone my skills while networking and learning new things.  ",
    headline: "Born in Nepal, living in Brisbane.",
    lightText: false,
    topLine: "My Background",
    img: require('./Images/websiteImages/nepal.jpg'),
    alt: 'Image', 
    start: 'true',
}

export const HomeObjFour= {
    primary: true,
    lightBg: false,
    imgStart: "",
    LightTopLine: true,
    lightTextDesc: true,
    buttonLabel: "Projects!",
    buttonLink: '/projects',
    Description: "Since the introduction to React during my Claim internship, I have been continuously practicing React with most of my new projects being developed with the JS library. Apart from that, I have worked with jQuery, Angualr and Vue in my university projects. Following the JS libraries, I have worked around different Content Management Systems including Shopify, Workflow, Wix and WordPress. Shopify has been my absolute favourite with easy to use design and a lot of functionalities making Ecommerce easy and acessible to all.",
    headline: "React, Angular, jQuery, Vue and CMS",
    lightText: true,
    topLine: "Front-end Development Skills",
    img: require('./Images/illustrations/comboimage.svg'),
    alt: 'Image', 
    start: '',
};


export const HomeObjFive= {
    primary: false,
    lightBg: true,
    imgStart: true,
    LightTopLine: false,
    lightTextDesc: false,
    buttonLabel: "Projects!",
    buttonLink: '/projects',
    Description: "I have worked with few backend technologies using Node and Express. Similarly, BDMS systems like MongoDB, MySQL, Firebase and AWS database have been used in most of my projects and internships.",
    headline: "Node, Express & DBMS",
    lightText: false,
    topLine: "Back-end Development Skills",
    img: require('./Images/illustrations/backend.svg'),
    alt: 'Image', 
    start: '',
};

export const HomeObjSix = {
    primary: true,
    lightBg: false,
    imgStart: "",
    LightTopLine: true,
    lightTextDesc: true,
    buttonLabel: "Projects!",
    buttonLink: '/projects',
    Description: "Python is comparitively new and a powerful programming language. From Minesweeper game to a Go-card stimulation, I have created created lots of small projects using Python. Moreover, I am interested in Cyber Sycurity and AI and my curiosity has allowed me to pursue my learning in these fields using python. One of ongoing learning is the creating of a virtual stimmulation of self-driving car using python.",
    headline: "Versatile of Pyhton",
    lightText: true,
    topLine: "Software Development Skills",
    img: Python,
    alt: 'Image', 
    start: '',
}