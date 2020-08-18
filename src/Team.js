import React from "react";
import { Card, Image } from "semantic-ui-react";
import veda from "./Images/Veda.JPG";
import talia from "./Images/Talia.JPG";
import cooper from "./Images/Cooper.jpg";
import maya from "./Images/Maya.jpeg";
import marco from "./Images/Marco.jpeg";
import sam from "./Images/Sam.jpeg";

function Team() {
  return (
    <div className="Team">
      <h1>
        <a id="team">Meet the Team </a>{" "}
      </h1>
      <Card.Group centered>
        <Card style={{ margin: "15px 30px" }}>
          <Image src={sam} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Sam Gibson</Card.Header>
            <Card.Meta>Computer Science</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/sgibson1682">GitHub</a>
            <a
              href="https://www.linkedin.com/in/sam-gibson-038b8816a/"
              style={{ marginLeft: "60%" }}
            >
              LinkedIn
            </a>
          </Card.Content>
        </Card>
        <Card style={{ margin: "15px 30px" }}>
          <Image src={cooper} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Cooper LaRhette</Card.Header>
            <Card.Meta>Computer Science</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/coopslarhette">GitHub</a>
            <a
              href="https://www.linkedin.com/in/larhette/"
              style={{ marginLeft: "60%" }}
            >
              LinkedIn
            </a>
          </Card.Content>
        </Card>
        <Card style={{ margin: "15px 30px" }}>
          <Image src={talia} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Talia Bahar</Card.Header>
            <Card.Meta>Computer Science/Graphic Arts</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/taliabahar">GitHub</a>
            <a
              href="https://www.linkedin.com/in/talia-bahar-b65920145/"
              style={{ marginLeft: "60%" }}
            >
              LinkedIn
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card.Group centered style={{ marginBottom: "40px" }}>
        <Card style={{ margin: "15px 30px" }}>
          <Image src={marco} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Marco Bernardini</Card.Header>
            <Card.Meta>Computer Science</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/mb0606">GitHub</a>
            <a
              href="https://www.linkedin.com/in/marco-berardini-186a7725/"
              style={{ marginLeft: "60%" }}
            >
              LinkedIn
            </a>
          </Card.Content>
        </Card>
        <Card style={{ margin: "15px 30px" }}>
          <Image src={maya} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Maya Pegler-Gordon</Card.Header>
            <Card.Meta>Computer Science/Animation</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/mpeglerg">GitHub</a>
            <a
              href="https://www.linkedin.com/in/maya-pegler-gordon/"
              style={{ marginLeft: "60%" }}
            >
              LinkedIn
            </a>
          </Card.Content>
        </Card>
        <Card style={{ margin: "15px 30px" }}>
          <Image src={veda} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Veda Ashok</Card.Header>
            <Card.Meta>Computer Science</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/Veda-Ashok">GitHub</a>
            <a
              href="https://www.linkedin.com/in/veda-ashok/"
              style={{ marginLeft: "60%" }}
            >
              LinkedIn
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default Team;
