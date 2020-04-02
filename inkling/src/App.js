import React from "react";
import "./App.css";
import logo from "./inkling-logo.png";
import { Grid } from "semantic-ui-react";
import About from "./About";
import Code from "./Code";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Grid padded stackable divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <div id="welcome">
              <h2>Welcome to Inkling.</h2> <h2>Let's get coding!</h2>
            </div>
          </Grid.Column>
          <Grid.Column>
            <img className="logo" src={logo}></img>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="row" columns={1}>
          <About></About>
        </Grid.Row>
        <Grid.Row>
          <Code></Code>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
