import React, { useState } from "react";
import { Container } from "react-bootstrap";

import "./styles/App.css";

import Grid from "./components/grid-two";
import Colours from "./components/colours";

const App = () => {
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
        <Grid selectedColour={selectedColour} value={value} />
        <Colours onClick={handleClick} />
      </Container>
    </div>
  );
};

export default App;
