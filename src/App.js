import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mainpage from './pages/Mainpage';
import './main.css';
import './style.css';
import About from "./components/About";
import PlayVideo from "./pages/PlayVideo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profilepage from "./pages/Profilepage";
import CreativeArts from "./pages/CreativeArts";
import Education from "./pages/Education";
import TheUniverse from "./pages/TheUniverse";
import Gaming from "./pages/Gaming";
import Music from "./pages/Music";
import Tech from "./pages/Tech";
import Finance from "./pages/Finance";

function App() {
  return (
    <>
    
      <Router>
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr /> */}


        <Switch>
          <Route exact path="/">
          <Mainpage/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/playvideo">
            <PlayVideo />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <Profilepage />
          </Route>
          <Route exact path="/arts">
            <CreativeArts />
          </Route>
          <Route exact path="/following">
            <CreativeArts />
          </Route>
          <Route exact path="/popculture">
            <CreativeArts />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/universe">
            <TheUniverse />
          </Route>
          <Route exact path="/gaming">
            <Gaming />
          </Route>
          <Route exact path="/music">
            <Music />
          </Route>
          <Route exact path="/tech">
            <Tech />
          </Route>
          <Route exact path="/finance">
            <Finance />
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
    </>
  );
} 

export default App;



function Home() {
  return (
    <div>
      {/* <h2>Home</h2> */}
    </div>
  );
}


function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

