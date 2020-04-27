import React from "react";
import { Card } from "semantic-ui-react";

function Code() {
  return (
    <div className="Code">
      <h1>
        {" "}
        <a id="code">Code Examples</a>
      </h1>
      <Card.Group centered>
        <Card style={{ width: "500px" }}>
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
        <Card style={{ width: "500px" }}>
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
        <Card style={{ width: "500px" }}>
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
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card.Group centered>
        <Card style={{ width: "500px" }}>
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
        <Card style={{ width: "500px" }}>
          <Card.Content>
            <Card.Header>Return List Function</Card.Header>
            <Card.Meta>Constant Arrow Function</Card.Meta>
            <Card.Description>
              <pre>
                {`constantListFunc is always () is List<Text> => {`}
                <br />
                {`  sampleList is List<Text> ["inkling", "is", "the", "best"]`}
                <br />
                {`  gimme sampleList`}
                <br />
                {`}`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
        <Card style={{ width: "500px" }}>
          <Card.Content>
            <Card.Header>Is Prime</Card.Header>
            <Card.Meta>While Loop Function</Card.Meta>
            <Card.Description>
              <pre>
                {`function isPrime(x is Num) is Num {`}
                <br />
                {`  start is Num 2`}
                <br />
                {`  while(start <= x^0.5) {`}
                <br />
                {`    if (x % start++ < 1) {`}
                <br />
                {`      gimme false`}
                <br />
                {`    }`}
                <br />
                {`  }`}
                <br />
                {`  gimme x > 1`}
                <br />
                {`}`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card.Group>
        <Card style={{ width: "500px" }}>
          <Card.Content>
            <Card.Header>Lists</Card.Header>
            <Card.Description>
              <pre>
                {`ourList is List<Text> ["this", "is", "a", "legal", "list", "in", "Inkling"]`}
                <br />
                <br />
                {`aListOfNums is List<Text> ["1", "2", "3", "4", "5", "6", "7"]`}
                <br />
                <br />
                {`aListOfNums[0] is 0`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
        <Card style={{ width: "500px" }}>
          <Card.Content>
            <Card.Header>Sets</Card.Header>
            <Card.Description>
              <pre>
                {`ourSet is List<Text> {"this", "is", "a", "legal", "set", "in", "Inkling"}`}
                <br />
                <br />
                {`aSetOfNums is List<Num> {"1", "2", "3", "4", "5", "6", "7"}`}
                <br />
                <br />
                {`aSetOfNums[0] is 0`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
        <Card style={{ width: "500px" }}>
          <Card.Content>
            <Card.Header>Dictionaries</Card.Header>
            <Card.Description>
              <pre>
                {`ourDict is Dict<Num, Text> {0: "this", 1: "is", 2: "a", 3: "legal", 4: "dict", 5: "in", 6: "Inkling"}`}
                <br />
                <br />
                {`aDictOfNums is Dict<Num, Num> {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7}`}
                <br />
                <br />
                {`aDictOfNums[0] is 0`}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card.Group>
        <Card style={{ width: "500px" }}>
          <Card.Content>
            <Card.Header>Variable Assignment</Card.Header>
            <Card.Description>
              <pre>
                {`x is Num 7`}
                <br />
                <br />
                {`bestProfessor is Text "Toal`}
                <br />
                <br />
                {`trueVal is Bool negativeChecker(5)`}
                <br />
                <br />
                {`five is true ? 5: 6`}
                <br />
                <br />
                {`testNum is Num none`}
                <br />
                <br />
                {`greeting is always Text  "Hello"`}
                <br />
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
        <Card style={{ width: "500px" }}>
          <Card.Content>
            <Card.Header>Semantic Errors</Card.Header>
            <Card.Description>
              <pre>
                {`1 < 2 and 3 > 5 ? "hello" : "goodbye"`}
                <br />
                {/* <br /> */}
                {`function fun1 (h is Num, i is Num) is Void {\n\tdisplay "hello"\n\tgimme 4\n}`}
                <br />
                {/* <br /> */}
                {`f is Num 5\nfunction fun2 (h is Num, i is Num) is Void {\n\tdisplay x\n\tgimme 4\n}`}
                <br />
                {/* <br /> */}
                {`i is always Num 5\ni is 3`}
                <br />
                {/* <br /> */}
                {`k is Num 5\nx[0]`}
                <br />
                {/* <br /> */}
                {`function fun5 (x is Num) is Text {\n\tgimme x + 2\n}`}
                <br />
                {/* <br /> */}
                {`o is Num 5\ndisplay !o`}
                <br />
                {/* <br /> */}
                {`q is Bool true\ndisplay -q`}
                <br />
                {/* <br /> */}
                {`function fun3 (h is Num, i is Num) is Void {\n\tx is Num 5\n\tgimme 4\t}\ndisplay x`}
                {/* <br /> */}
              </pre>{" "}
            </Card.Description>
          </Card.Content>
        </Card>
        <Card style={{ width: "500px" }}>
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

// ouList is List<Text> ["this", "is", "a", "legal", "list", "in", "Inkling"]
// aListOfNums is List<Text> ["1", "2", "3", "4", "5", "6", "7"]
// aListOfNums[0] is 0
