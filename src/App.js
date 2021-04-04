import React from 'react';
import { Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import './themes/variables.css';
// import './Css/style';

// import pages
import ProfilePage from './Pages/Profile/profile.page';
import ProjectPage from './Pages/Project/project.page';
import Landingpage from './Pages/LangingPage/Landingpage';
import AboutMe from './Pages/AboutMe/AboutMe';

// import Component
// import NavMenu from './Components/MenuComponents/NavMenu/NavMenu';
import Splashscreen from './Components/Sections/Splashscreen/Splashscreen';
import Login from './Components/FormComponents/LoginComponent/Login';

function App() {
  return (
    <div className="App">
      {/* <NavMenu /> */}
      <Route path='/' component={Landingpage} exact />
      <Route path='/login' component={Login} exact />
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
