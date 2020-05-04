import React from "react";
import Countries from "./components/countries/Countries.component";
import Game from "./components/game/Game";
import Form from "./components/form/Form.component"
import Nav from "./components/nav/nav.component"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";


function App() {
  return (
    <Router>
      <div className="App" >
        <Nav />
        <Switch>
          <Route path="/" component={Countries} exact />
          <Route path="/countries" component={Countries} exact />
          <Route path="/game" component={Game} exact />
          <Route path="/form" component={Form} exact />
        </Switch>
      </div >
    </Router>
  );
}

export default App;