import gallery from './Images/websiteImages/gallery1.png';
import hotel from './Images/websiteImages/hotel1.jpg';
import portfolio from './Images/websiteImages/portfolio1.jpg';

// Slider Type Choices
// "HeroSlider", "CarouselSlider"

export const SliderData = {
    CarouselTitle: "My Projects",
    sliderType: "HeroSlider",
    CarouselData: [
        {
            title: "Image Gallery",
            price: 'Share your photoes with friends and get awsome feedback from them.',
            path: '/project/1',
            label: 'View More',
            image: gallery,
            alt: "Image"
        },
        {
            title: "My Portfolio website",
            price: 'A site to demonstrate my skills as a developer.',
            path: '/project/2',
            label: 'View More',
            image: portfolio,
            alt: "Image"
        },
        {
            title: "Hotel Reservation system",
            price: 'Website where you can book a room with prefered services and view to make your holiday even more amazing',
            path: '/project/3',
            label: 'View More',
            image: hotel,
            alt: "Image"
        },
    ]

}