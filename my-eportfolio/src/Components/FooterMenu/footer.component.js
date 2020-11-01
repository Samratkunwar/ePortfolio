import React, { Component } from 'react';

class FooterMenu extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__logo-box">
                    <img src={"./img/logo1.png"} alt="full logo" className="footer__logo" />
                </div>

                <div className="row">
                    <div className="footer__copyright-item">
                        <p className="footer__copyright">
                            <p> Copyright &copy; by Samrat Kunwar</p>

                            <p>Built by <a href="#" className="footer__link">Samrat Kunwar</a> as a form of his <a href="#" className="footer__link">ePortfolio</a>. 
                            Designed and Developed through the means of MERN Stack. 
                            Please feel free to leave a feedback towards the design and a possible 
                            suggestions for imporvement in the future updates. Thank you! </p>   
                        
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterMenu;