import React from "react";
import "../styles/grid.css";
import { Row, Col, Container } from "react-bootstrap";
import { topRow, secondRow, sideColumn } from "./images";

import Description from "./description";

const Grid = ({ selectedColour, value }) => {
  const handleClick = (e) => {
    const cell = e.target;
    cell.style.backgroundColor = selectedColour;
    cell.value = value;
    cell.id = value;
    console.log(cell.value);
  };

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
            {Array.from({ length: 6 }).map((_, index) => (
              <Col
                key={index}
                className="cell cell-border"
                id={index}
                value={index}
                onClick={handleClick}
              ></Col>
            ))}
          </Row>
          <Row>
            {Array.from({ length: 6 }).map((_, index) => (
              <Col
                key={index}
                className="cell cell-border"
                id={index}
                value={index}
                onClick={handleClick}
              ></Col>
            ))}
          </Row>
          <Row>
            {Array.from({ length: 6 }).map((_, index) => (
              <Col
                key={index}
                className="cell cell-border"
                id={index}
                value={index}
                onClick={handleClick}
              ></Col>
            ))}
          </Row>
          <Row>
            {Array.from({ length: 6 }).map((_, index) => (
              <Col
                key={index}
                className="cell cell-border"
                id={index}
                value={index}
                onClick={handleClick}
              ></Col>
            ))}
          </Row>
          <Row>
            {Array.from({ length: 6 }).map((_, index) => (
              <Col
                key={index}
                className="cell cell-border"
                id={index}
                value={index}
                onClick={handleClick}
              ></Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Grid;
