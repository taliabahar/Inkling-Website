import React from "react";
import { Card } from "semantic-ui-react";

function Code() {
  return (
    <div className="Code">
      <h1>Code Examples</h1>
      <Card.Group centered>
        <Card style={{ width: "400px" }}>
          <Card.Content>
            <Card.Header>Find Factorial</Card.Header>
            <Card.Meta>Function</Card.Meta>
            <Card.Description>
              <pre>
                {`function findFactorial(x is Num) is Num {`}
                <br />
                {`  if(x == 0 or x == 1) {`}
                <br />
                {`    gimme x `}
                <br />
                {`  }`}
                <br />
                {`  gimme x * findFactorial(x - 1)`}
                <br />
                {`}`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
        <Card style={{ width: "400px" }}>
          <Card.Content>
            <Card.Header>Fizzbuzz</Card.Header>
            <Card.Meta>Void Function</Card.Meta>
            <Card.Description>
              <pre>
                {`function fizzbuzz(x is Num) is Void {`}
                <br />
                {`  for i in range(0,x) {`}
                <br />
                {`    if (i%3 == 0 and i%5 == 0) {`}
                <br />
                {`      display "fizzbuzz"`}
                <br />
                {`    } else if (i % 3 == 0) {`}
                <br />
                {`      display "fizz"`}
                <br />
                {`    } else if (i % 5 == 0) {`}
                <br />
                {`      display "buzz"`}
                <br />
                {`    } else {`}
                <br />
                {`      display i`}
                <br />
                {`      }`} <br />
                {`    }`} <br />
                {`  }`} <br />
                {`}`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
        <Card style={{ width: "400px" }}>
          <Card.Content>
            <Card.Header>Negative Checker</Card.Header>
            <Card.Meta>Function</Card.Meta>
            <Card.Description>
              <pre>
                {`function negativeChecker(x is Num) is Bool {`}
                <br />
                {`  gimme x < 0 ? true : false`}
                <br />
                {`}`}
                <br />
                <br />
                <Card.Meta>Variable Assignment</Card.Meta>
                {`trueVal is Bool negativeChecker(5)`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card.Group centered>
        <Card style={{ width: "400px" }}>
          <Card.Content>
            <Card.Header>Find First Odd Number</Card.Header>
            <Card.Meta>Function</Card.Meta>
            <Card.Description>
              <pre>
                {`function findFirstOdd(x is Num) is Num {`}
                <br />
                {`  for i in range(0, x) {`}
                <br />
                {`   if(i % 2 != 0) {`}
                <br />
                {`      gimme i}`}
                <br />
                {`    }`}
                <br />
                {`  }`}
                <br />
                {`}`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
        <Card style={{ width: "400px" }}>
          <Card.Content>
            <Card.Header>Find First Odd Number</Card.Header>
            <Card.Meta>Constant Arrow Function</Card.Meta>
            <Card.Description>
              <pre>
                {`arrowFunction is always (x is Num) is Num => {`}
                <br />
                {`   gimme x + 1`}
                <br />
                {`}`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
        <Card style={{ width: "400px" }}>
          <Card.Content>
            <Card.Header>Comments</Card.Header>
            <Card.Meta>Single-Line</Card.Meta>
            <Card.Description>
              <pre>
                {`btw: this is a single-line comment!`}
                <br />
                <br />
                <Card.Meta>Multi-Line</Card.Meta>
                {`fyi: This is
                    a multi-line
                                Comment! :xoxo`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default Code;
