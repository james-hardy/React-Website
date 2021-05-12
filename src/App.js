import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from './pages/Mainpage';
import Album from './components/Album';
//need line below if want nav bar
// import Nav from './components/Nav/index';

//must declare here where you want the links to go

function App() {
  return (
    <div>
      <Router>
        {/* nav bar if wanted */}
        {/* <Nav /> */}
        <Switch>
          <Route exact path={"/"} component={Mainpage}/>
          <Route exact path={"/album"} component={Album}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
