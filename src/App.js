import React from "react";
import "./App.css";
import logo from "./inkling-logo.png";
import { Grid } from "semantic-ui-react";
import About from "./About";
import Code from "./Code";
import Team from "./Team";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App" id="home">
      <NavBar></NavBar>
      <Grid stackable textAlign="center" relaxed>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div id="welcome">
              <h2> > Welcome. Where will your inkling take you today?</h2>
              {/* <h2>> Welcome to Inkling.</h2> <h2>Let's get coding!</h2> */}
            </div>
          </Grid.Column>
          <Grid.Column>
            <img className="logo" src={logo}></img>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "90px" }} className="row" columns={1}>
          <About id="about"></About>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "90px" }} className="row">
          <Code></Code>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "90px" }} className="row">
          <Team id="team"></Team>
        </Grid.Row>
      </Grid>
      <p class="footer">Copyright &copy; 2020 Inkling. All Rights Reserved.</p>
    </div>
  );
}

export default App;
