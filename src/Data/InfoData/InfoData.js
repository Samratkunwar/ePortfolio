import ImageOne from '../Images/photo1.jpg';
import ImageTwo from '../Images/photo2.jpg';
import ImageThree from '../Images/photo3.jpg';
import ImageFour from '../Images/photo4.jpg';

// True - If you want image on left
// Fales - If you want image on right

export const SliderData = [
    {
        title: "Welcome to my web Page",
        price: '$12',
        path: '/home',
        label: 'View More',
        image: ImageFour,
        alt: "Image"
    },
    {
        title: "Welcome to my web Page",
        price: '$12',
        path: '/home',
        label: 'View More',
        image: ImageTwo,
        alt: "Image"
    },
    {
        title: "Welcome to my web Page",
        price: '$12',
        path: '/home',
        label: 'View More',
        image: ImageOne,
        alt: "Image"
    },

]

export const Herodata = {
    image: ImageOne,
    title: "This is Title",
    description: "This is a description",
    button: {
        link: '/aboutme',
        label: 'Learn More'
    }
};
export const Herodata2 = {
    image: ImageTwo,
    title: "This is Title",
    description: "This is a description",
    button: {
        link: '/aboutme',
        label: 'Learn More'
    }
};
export const Herodata3 = {
    image: ImageThree,
    title: "This is Title",
    description: "This is a description",
    button: {
        link: '/aboutme',
        label: 'Learn More'
    }
};

export const textData = {
    text: " This is a tect only section. Use it for testemonials and thoughts. * Note: Splash Screen Still under construction ",
}

export const HomeObjOne= {
    primary: true,
    lightBg: false,
    imgStart: "",
    LightTopLine: true,
    lightTextDesc: true,
    buttonLabel: "Learn More",
    Description: "We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals",
    headline: "Web Development Specialist with 1 year experience",
    lightText: true,
    topLine: "Digital Agency",
    img: require('../Images/illustration1.svg'),
    alt: 'Image', 
    start: '',
};

export const HomeObjTwo= {
    primary: false,
    lightBg: true,
    imgStart: "start",
    LightTopLine: false,
    lightTextDesc: false,
    buttonLabel: "Learn More",
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    headline: "Create Awsome UX/UI Designs",
    lightText: false,
    topLine: "Digital Agency",
    img: require('../Images/illustration1.svg'),
    alt: 'Image', 
    start: 'true',
};

export const DemoData = {
    BacVideoMp4: "./img/background-video.mp4",
    BacVideoWebm: "./img/background-video.webm",
    SectionHeading: "My Personal Projects" ,
    ButtonLink: '/aboutme',
    ButtonLabel: "View All Projects", 
    Sections: [
        {
            Img: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80", 
            ImgDec: "A Lion" , 
            ImgCaption:  "Image Gallery",
            ImgHeading: "Smile is the best Medicine!", 
            ImgParagraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
        },
        {
            Img: "https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", 
            ImgDec: "A Lion" , 
            ImgCaption:  "Photo Gallery",
            ImgHeading: "This is a Photo Gallery App", 
            ImgParagraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
        },
        {
            Img: "https://images.unsplash.com/photo-1585856141833-ca095e957dd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
            ImgDec: "A Lion" , 
            ImgCaption:  "Lion Gallery",
            ImgHeading: "This is a Lion Gallery App", 
            ImgParagraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
        }
    ]
    
}