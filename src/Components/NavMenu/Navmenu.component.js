import React, {Component} from 'react';

import './Navmenu.component.css';

class NavMenu extends Component {
    render () {

        const Nav_menu = (
            <div>
                <li className="navigation_link"><a href="/">Home</a></li>
                <li className="navigation_link"><a href="/">Experience</a></li>
                <li className="navigation_link"><a href="/profile">Profile</a></li>
                <li className="navigation_link"><a href="/project/1">Projects</a></li>
                <li className="navigation_link"><a href="/profile">Extra-carricular</a></li>
                {/* <li className="navigation_link"><a href="/">Home</a></li> */}
            </div>

        )

        return (
            <ul className="navigation_menu">
                {Nav_menu}
            </ul>
        )
    }
}

export default NavMenu;