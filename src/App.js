import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./styles/App.css";

import GridTwo from "./components/grid-two";
import Colours from "./components/colours";
import Grid from "./components/grid.js";

import imgOne from "./images/screw.png";

function App() {
  const [selectedColour, setSelectedColour] = useState();
  const [value, setValue] = useState();
  console.log("App", selectedColour);

  const handleClick = (e) => {
    setSelectedColour(e.target.style.backgroundColor);
    setValue(e.target.id);
  };

  return (
    <div className="App">
      <Container>
        {/* <Row>
          <Col sm={4}>
            <img src={imgOne} style={{ height: 20, width: 20 }} />
          </Col>

          <Col sm={8}> */}
        {/* <Grid /> */}
        <GridTwo selectedColour={selectedColour} value={value} />
        {/* </Col>
        </Row> */}
        {/* <Row> */}
        <Colours onClick={handleClick} />
        {/* </Row> */}
      </Container>
    </div>
  );
}

export default App;
