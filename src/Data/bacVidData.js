import griffith from './Images/griffith.gif';
import claim from './Images/claim.png';
import bVid from '../Data/video/video.mp4';

export const DemoData = {
    BacVideoMp4: bVid,
    BacVideoWebm: bVid,
    SectionHeading: "My Professional Experiences" ,
    ButtonLink: '/projects',
    ButtonLabel: "View My Projects", 
    Sections: [
        {
            Img: claim, 
            ImgDec: "claim App" , 
            ImgCaption:  "React Project",
            ImgHeading: "Junior Front-end Developer", 
            ImgParagraph: "The project involved the development of a mobile app and a dashboard system through the use of React and Ionic. As a junior developer, I was able to successfully test the API and create the first functional version of the dashboard and the mobile application. Furthermore, through the use of react redux, I was able to create a proper state management system.",
        },
        {
            Img: griffith, 
            ImgDec: "Griffith University" , 
            ImgCaption:  "Python-unity system",
            ImgHeading: "UX/UI Designer & Requirement Manager", 
            ImgParagraph: "The project involved the creation of a python-based mobile app able to communicate between the user and a unity server. I was responisble for the creation of wireframes and material design while specifying the functionalities and requirement of the app. As a team, we were able to successfully to develop a fully-functional application.",
        },
        {
            Img: griffith, 
            ImgDec: "Griffith University" , 
            ImgCaption:  "Chat System",
            ImgHeading: "Web Developer", 
            ImgParagraph: "The project involved the development of a real-time chat system using MEAN stack. As a web developer, I was able to successfully create the chat system with the help of Angualr and the use of a JS library for realtime communication, Socket.io. Similarly, I used MongoDB for the storage of all the user data and user authentication.",
        }
    ]
    
}