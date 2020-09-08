import React, { useState } from "react";
import "../styles/grid.css";
import { Row, Col, Container } from "react-bootstrap";
import { topRow, secondRow, sideColumn } from "./images";
import axios from "axios";

import Description from "./description";

const gridValues = [
  { id: "TR1", value: 0 },
  { id: "TR2", value: 0 },
  { id: "TR3", value: 0 },
  { id: "TR4", value: 0 },
  { id: "TR5", value: 0 },
  { id: "TR6", value: 0 },
  { id: "SR1", value: 0 },
  { id: "SR2", value: 0 },
  { id: "SR3", value: 0 },
  { id: "SR4", value: 0 },
  { id: "SR5", value: 0 },
  { id: "SR6", value: 0 },
  { id: "THR1", value: 0 },
  { id: "THR2", value: 0 },
  { id: "THR3", value: 0 },
  { id: "THR4", value: 0 },
  { id: "THR5", value: 0 },
  { id: "THR6", value: 0 },
  { id: "FR1", value: 0 },
  { id: "FR2", value: 0 },
  { id: "FR3", value: 0 },
  { id: "FR4", value: 0 },
  { id: "FR5", value: 0 },
  { id: "FR6", value: 0 },
  { id: "FIR1", value: 0 },
  { id: "FIR2", value: 0 },
  { id: "FIR3", value: 0 },
  { id: "FIR4", value: 0 },
  { id: "FIR5", value: 0 },
  { id: "FIR6", value: 0 },
];

const Grid = ({ selectedColour, value }) => {
  // const [cell, setCell] = useState({
  //   id: "",
  //   backgroundColor: "",
  //   value: "",
  // });
  // shall i set state for cell original and updated to store the cells
  // do i need to make the grid into an array of cells?

  const handleClick = (e) => {
    const cell = e.target;
    const id = e.target.id;
    const data = gridValues.find((element) => element.id === id);
    cell.style.backgroundColor = selectedColour;
    data.value = value;
    console.log(data);
    console.log(gridValues);
  };

  const handleSubmit = (e) => {
    console.log("hello", gridValues);

    axios({
      method: "post",
      url: "/contour.php",
      data: {
        grid: gridValues,
        timeCreated: new Date(),
        user: "Marissa",
        // this would later be attained through attaching the login details
        uniqueId:
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15),
      },
    }).then((data) => console.log(data));
  };

  console.log(gridValues);

  return (
    <div className="game">
      <Row id="top-row">
        {topRow.map((e, i) => {
          return (
            <div className="image">
              <Description e={e} />
            </div>
          );
        })}
      </Row>
      <Row className="top-images">
        {secondRow.map((e, i) => {
          return (
            <div className="image">
              <Description e={e} />
            </div>
          );
        })}
      </Row>
      <div className="mid-section">
        <Container className="side-container">
          <Row className="side-images">
            {sideColumn.map((e, i) => {
              return (
                <div className="image">
                  <Description e={e} />
                </div>
              );
            })}
          </Row>
        </Container>
        <Container className="grid-container">
          <Row>
            {gridValues.slice(0, 6).map((data, index) => (
              <Col
                key={index}
                className="cell cell-border"
                id={data.id}
                value={data.value}
                onClick={handleClick}
              ></Col>
            ))}
          </Row>
          <Row>
            {gridValues.slice(6, 12).map((data, index) => (
              <Col
                key={index}
                className="cell cell-border"
                id={data.id}
                value={data.value}
                onClick={handleClick}
              ></Col>
            ))}
          </Row>
          <Row>
            {gridValues.slice(12, 18).map((data, index) => (
              <Col
                key={index}
                className="cell cell-border"
                id={data.id}
                value={data.value}
                onClick={handleClick}
              ></Col>
            ))}
          </Row>
          <Row>
            {gridValues.slice(18, 24).map((data, index) => (
              <Col
                key={index}
                className="cell cell-border"
                id={data.id}
                value={data.value}
                onClick={handleClick}
              ></Col>
            ))}
          </Row>
          <Row>
            {gridValues.slice(24, 30).map((data, index) => (
              <Col
                key={index}
                className="cell cell-border"
                id={data.id}
                value={data.value}
                onClick={handleClick}
              ></Col>
            ))}
          </Row>
        </Container>
      </div>
      <input
        type="submit"
        name="submit"
        id="submit"
        value="Submit"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Grid;
