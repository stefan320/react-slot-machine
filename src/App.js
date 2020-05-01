import React from "react";
import Countries from "./components/countries/Countries.component";
import Game from "./components/game/Game";
import Form from "./components/form/Form.component"
import "./App.css";

function App() {
  return (
    <div className="App" >
      <Countries />
      <Game />
      <Form />
    </div>
  );
}

export default App;