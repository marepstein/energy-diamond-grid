import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Table from "react-bootstrap/Table";

import "../styles/grid.css";

const Colours = ({ onClick }) => {
  return (
    <Table bordered hover className="colours-container">
      <tbody>
        <td
          className="colours"
          id="0"
          style={{ backgroundColor: "#FF0000" }}
          onClick={onClick}
        ></td>
        <td
          className="colours"
          id="1"
          style={{ backgroundColor: "#FF6002" }}
          onClick={onClick}
        ></td>
        <td
          className="colours"
          id="2"
          style={{ backgroundColor: "#FFCE00" }}
          onClick={onClick}
        ></td>
        <td
          className="colours"
          id="3"
          style={{ backgroundColor: "#C8FF00" }}
          onClick={onClick}
        ></td>
        <td
          className="colours"
          id="4"
          style={{ backgroundColor: "#B8FF00" }}
          onClick={onClick}
        ></td>
        <td
          className="colours"
          id="5"
          style={{ backgroundColor: "#00FC05" }}
          onClick={onClick}
        ></td>
        <td
          className="colours"
          id="6"
          style={{ backgroundColor: "#00FF6C" }}
          onClick={onClick}
        ></td>
        <td
          className="colours"
          id="7"
          style={{ backgroundColor: "#00FFB3" }}
          onClick={onClick}
        ></td>
        <td
          className="colours"
          id="8"
          style={{ backgroundColor: "#00B2FD" }}
          onClick={onClick}
        ></td>
        <td
          className="colours"
          id="9"
          style={{ backgroundColor: "#0064FF" }}
          onClick={onClick}
        ></td>
        <td
          className="colours"
          id="10"
          style={{ backgroundColor: "#1A00FF" }}
          onClick={onClick}
        ></td>
      </tbody>
    </Table>
  );
};

export default Colours;
