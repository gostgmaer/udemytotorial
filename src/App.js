import logo from "./logo.svg";
import "./App.css";
import Simple from "./Componets/Simple";
import RoutingPage from "./RouterElements/RoutingPage";
import { Fragment } from "react";
import React from "react";
import Wrapper from "./Componets/Wrapper/Wrapper";
import ReactPortal from "./Componets/ReactPortals/ReactPortal";
import UserElement from "./Componets/UserComponent/User";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Wrapper>
          <RoutingPage></RoutingPage>
        </Wrapper>
       
      </div>
    </Fragment>
  );
}

export default App;
