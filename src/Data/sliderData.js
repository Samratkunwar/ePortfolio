import ImageOne from './Images/photo1.jpg';
import ImageTwo from './Images/photo2.jpg';
import ImageThree from './Images/photo3.jpg';
import ImageFour from './Images/photo4.jpg';

// Slider Type Choices
// "HeroSlider", "CarouselSlider"

export const SliderData = {
    CarouselTitle: "This is a title",
    sliderType: "HeroSlider",
    CarouselData: [
        {
            title: "Welcome to my web Page",
            price: '$12',
            path: '/home',
            label: 'View More',
            image: ImageThree,
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

}