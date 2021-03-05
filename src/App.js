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
// import NavMenu from './Components/NavMenu/Navmenu.component';
import ProjectPage from './Pages/Project/project.page';
import Landingpage from './Pages/LangingPage/Landingpage';
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      {/* <NavMenu /> */}
      <Route path='/' component={Landingpage} exact />
      <Route path='/home' component={HomePage} exact />
      <Route path='/profile' component={ProfilePage} exact />
      <Route path='/aboutme' component={AboutMe} exact />
      <Route path='/projects' component={ProjectPage} exact />
      <Route path='/project/:_id' component={ProjectPage} exact />

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
