import React, { Component } from 'react';

import '../Home/home.page.css';
import FooterMenu from '../../Components/MenuComponents/FooterMenu/FooterMenu';
import NavMenu from '../../Components/MenuComponents/NavMenu/NavMenu';
import BackgroundVideo from '../../Components/Sections/BackgroundVideo/BackgroundVideo';

class HomePage extends Component {
    render () {

        let image = "https://images.unsplash.com/photo-1585856141833-ca095e957dd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

        let header = (
            <header className="header">
                <div className="header__logo-box">
                    <h1 className="heading-primary">
                        <spam className="heading-primary--logo-main">SK</spam>
                        <spam className="heading-primary--logo-sub">Samrat</spam>
                        <spam className="heading-primary--logo-sub">Kunwar</spam>
                        <spam className="heading-primary--logo-sub-1">Web & UI Developer</spam>
                    </h1>
                </div>

                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <spam className="heading-primary--main">Web App Developer</spam>
                        <spam className="heading-primary--sub">Over the past few years, I have been trying to improve my development skills through the means of internships, industrial and few self made projects</spam>
                    </h1>

                    {/* Create a popup when clicked on about me link */}
                    <a href="/aboutme" className="btn btn--white btn--animated">About Me</a>
                </div>
            </header>
        )

        let main = (
            <main>
                <section className="section-experiences">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            My Industrial Experience So Far
                        </h2> 
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertery u-margin-bottom-small">Junior Front-end Developer- Internship- Claim App</h3>
                            <p className="paragraph">
                                <strong>Claim</strong> is a platform for business around specific catagories to display their discounted
                                gove-outs and flash sales, to the users nearby of the particular businesses.
                                <br />
                                As a junior developer, I was involved in the design and development of the applications and dashboard through
                                the implementation of <strong className="word__animation">ReactJS, Ionic and CSS</strong>. <strong className="word__animation">Git</strong> was used as a
                                version control sysytem along with <strong className="word__animation">Jira</strong> for Agile development and task management.                                 

                            </p>
                            <h3 className="heading-tertery u-margin-bottom-small">UX/UI Developer- Industrial Project- Griffith University</h3>
                            <p className="paragraph">
                                Gibberish, also called jibber-jabber or gobbledygook, is speech that is (or appears to be) nonsense. It may include speech sounds that are not actual words, or language games and specialized jargon that seems nonsensical to outsiders.
                            </p>
                            <a href="/aboutme" className="btn-text">Learn more &rarr;</a>
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src={image} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                                <img src={image} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                                <img src={image} alt="Photo 3" className="composition__photo composition__photo--p3"/>
                            </div>
                        </div>
                    </div> 
                </section>

                <section className="section-projects">
                    <div className="bg-video">
                        <video className="bg-video__content" autoPlay muted loop>
                            <source src="./img/background-video.mp4" type="video/mp4"></source>
                            <source src="./img/background-video.webm" type="video/webm"></source>
                            Your browser doesn't support the video!
                        </video>
                    </div>

                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Some of my self-made Projects
                        </h2>
                    </div>
                    
                    <div className="row">
                        <div className="projects">
                            <figure className="projects__shape">
                                <img src={image} alt="Person on a tour" className="projects__img" />
                                <figcaption className="projects__caption">Image Gallery</figcaption>
                            </figure>
                            <div className="projects__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">Sharing Pictures has never been so easy!</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="projects">
                            <figure className="projects__shape">
                                <img src={image} alt="Person on a tour" className="projects__img" />
                                <figcaption className="projects__caption">Food Ordering System</figcaption>
                            </figure>
                            <div className="projects__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">Order food with few easy steps.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                                </p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="u-center-text u-margin-top-huge">
                        <a href="/project" className="btn-text">View All Projects &rarr;</a>
                    </div>
                </section>

                <BackgroundVideo />

            </main>
        )
        
        return (
           <div>
               <NavMenu />
                {header}
                {main}

                <FooterMenu />
            </div>
        )
    }
}

export default HomePage;