import logo from "./logo.svg";
import "./App.css";
import Simple from "./Componets/Simple";
import RoutingPage from "./RouterElements/RoutingPage";
import { Fragment } from "react";
import React from "react";


function App() {
  return (
    <Fragment>
      <div className="App">
        <RoutingPage></RoutingPage>
      
      </div>
    </Fragment>
  );
}

export default App;
