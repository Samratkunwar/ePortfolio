import ImageOne from './Images/photo1.jpg';
import ImageTwo from './Images/photo2.jpg';
import ImageThree from './Images/photo3.jpg';
import ImageFour from './Images/photo4.jpg';

// Value choices for elemetType
// "CentreText" for text at centre of the hero section
// "TextBox" for text at the bottom left corner of the screen

export const Herodata = {
    image: ImageOne,
    title: "This is Title",
    description: "This is a description",
    button: {
        link: '/aboutme',
        label: 'Learn More'
    },
    elementType: "CentreText"
};
export const Herodata2 = {
    image: ImageTwo,
    title: "This is Title",
    description: "This is a description",
    button: {
        link: '/aboutme',
        label: 'Learn More'
    },
    elementType: "TextBox"
};
// export const Herodata3 = {
//     image: ImageThree,
//     title: "This is Title",
//     description: "This is a description",
//     button: {
//         link: '/aboutme',
//         label: 'Learn More'
//     },
//     elementType: "CentreText"
// };

export const Herodata3 = {
    image: ImageThree,
    title: "Winter Garden",
    description: "This is city center in Brisbane. It is just opposit to the H&M building. THe building consists of gaming parler and food court.",
    button: {
        link: '/aboutme',
        label: 'Learn More'
    },
    elementType: "CentreText"
};