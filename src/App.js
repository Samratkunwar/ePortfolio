import React from 'react';
import { Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import './themes/variables.css';
// import './Css/style';

// import pages
import HomePage from './Pages/Home/home.page';
import ProfilePage from './Pages/Profile/profile.page';

// import Component
// import NavMenu from './Components/MenuComponents/NavMenu/NavMenu';
import ProjectPage from './Pages/Project/project.page';
import Landingpage from './Pages/LangingPage/Landingpage';
import AboutMe from './Pages/AboutMe/AboutMe';
import Splashscreen from './Components/Sections/Splashscreen/Splashscreen';

function App() {
  return (
    <div className="App">
      {/* <NavMenu /> */}
      <Route path='/ePortfolio/' component={Landingpage} exact />
      {/* <Route path='/landingPage' component={Landingpage} exact /> */}
      <Route path='/ePortfolio/home' component={HomePage} exact />
      <Route path='/ePortfolio/profile' component={ProfilePage} exact />
      <Route path='/ePortfolio/aboutme' component={AboutMe} exact />
      <Route path='/ePortfolio/projects' component={ProjectPage} exact />
      <Route path='/ePortfolio/project/:_id' component={ProjectPage} exact />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
