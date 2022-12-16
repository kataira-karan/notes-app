import "./App.css";
import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>

          <Route exact path="/addnote">
            <Home></Home>
          </Route>
          <Route exact path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
