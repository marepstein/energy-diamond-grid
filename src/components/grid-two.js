import React, { useReducer, useState } from "react";
import "../styles/grid.css";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { topRow, secondRow, sideColumn } from "./images";

import ImageModal from "./modal";
import Description from "./description";

const GridTwo = ({ selectedColour, value }) => {
  const [state] = useReducer(null, initState());
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  console.log("state: ", state);

  function initGrid() {
    const grid = [];
    for (let row = 0; row < 5; row++) {
      const cols = [];
      for (let col = 0; col < 6; col++) {
        cols.push({
          row,
          col,
        });
      }
      grid.push(cols);
    }
    return grid;
  }

  function initState() {
    const grid = initGrid();
    return {
      grid,
    };
  }

  const handleClick = (e) => {
    const cell = e.target;
    cell.style.backgroundColor = selectedColour;
    cell.value = value;
    cell.id = value;
    console.log(cell);
  };

  const drawGrid = () => {
    const { grid } = state;
    return grid.map((row, i) => {
      return row.map((cell, i) => {
        return (
          <div
            key={cell.row + cell.col}
            data-item={cell}
            className="cell cell-border"
            id="0"
            value="0"
            onClick={handleClick}
            // could change this to be an input ?
          />
        );
      });
    });
  };

  return (
    <div className="game">
      <Row style={{ flex: "1 0 15%", marginLeft: 15 }} id="top-one">
        {topRow.map((e, i) => {
          return (
            <div className="image">
              <Description e={e} />
              {/* <Modal.Header closeButton>
                  <Modal.Title>{e.imageCaption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{e.description}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer> */}
              {/* </Modal> */}
            </div>
          );
        })}
      </Row>
      <Row className="top-images" style={{ flex: "1 0 15%", marginLeft: 15 }}>
        {secondRow.map((e, i) => {
          return (
            <div className="image">
              <Description e={e} />
              {/* </Modal> */}
              {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{e.imageCaption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{e.description}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </div>
          );
        })}
      </Row>

      <div className="grid-container">
        <Col className="side-images">
          {sideColumn.map((e, i) => {
            return (
              <div className="image">
                <Description e={e} />

                {/* </Modal> */}
                {/* <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{e.imageCaption}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{e.description}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal> */}
              </div>
            );
          })}
        </Col>
        <Col>
          <div className="grid">{drawGrid()}</div>
        </Col>
      </div>
    </div>
  );
};

export default GridTwo;
