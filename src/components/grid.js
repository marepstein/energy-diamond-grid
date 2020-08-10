// import React, { useRef } from "react";
// // import { Container, Row, Col } from "react-bootstrap";
// import Table from "react-bootstrap/Table";

// import "../styles/grid.css";
// import screwImg from "../images/screw.png";

// const Grid = () => {
//   const paintingGrid = useRef();

//   const handleClick = (e) => {
//     console.log("Col", `${e.target.id + e.target.className}`);
//   };

//   return (
//     <Table striped bordered hover responsive size="sm" onClick={handleClick}>
//       <thead>
//         <tr>
//           <th>
//             <div></div>
//           </th>
//           <th>
//             <img src={screwImg} />
//           </th>
//           <th>
//             <img src={screwImg} />
//           </th>
//           <th>
//             <img src={screwImg} />
//           </th>
//           <th>
//             <img src={screwImg} />
//           </th>
//           <th>
//             <img src={screwImg} />
//           </th>
//           <th>
//             <img src={screwImg} />
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>
//             <img src={screwImg} style={{ height: 60 }} />
//           </td>

//           {Array.from({ length: 6 }).map((_, index) => (
//             <td
//               key={index}
//               id={index}
//               className="row-1"
//               style={{ height: 60 }}
//             ></td>
//           ))}

//           {/* <td class="cell" id="01"></td>
//           <td class="cell" id="02"></td>
//           <td class="cell" id="03"></td>
//           <td class="cell" id="04"></td>
//           <td class="cell" id="05"></td>
//           <td class="cell" id="06"></td> */}
//         </tr>
//         <tr>
//           <td>
//             <img src={screwImg} style={{ height: 60 }} />
//           </td>

//           {Array.from({ length: 6 }).map((_, index) => (
//             <td
//               key={index}
//               id={index}
//               className="row-2"
//               style={{ height: 60 }}
//               onClick={handleClick}
//             ></td>
//           ))}

//           {/* <td class="cell" id="07"></td>
//           <td class="cell" id="08"></td>
//           <td class="cell" id="09"></td>
//           <td class="cell" id="10"></td>
//           <td class="cell" id="11"></td>
//           <td class="cell" id="12"></td> */}
//         </tr>
//         <tr>
//           <td>
//             <img src={screwImg} style={{ height: 60 }} />
//           </td>

//           {Array.from({ length: 6 }).map((_, index) => (
//             <td
//               key={index}
//               id={index}
//               className="row-3"
//               style={{ height: 60 }}
//             ></td>
//           ))}

//           {/* <td class="cell" id="13"></td>
//           <td class="cell" id="14"></td>
//           <td class="cell" id="14"></td>
//           <td class="cell" id="16"></td>
//           <td class="cell" id="17"></td>
//           <td class="cell" id="18"></td> */}
//         </tr>
//         <tr>
//           <td>
//             <img src={screwImg} style={{ height: 60 }} />
//           </td>

//           {Array.from({ length: 6 }).map((_, index) => (
//             <td
//               key={index}
//               id={index}
//               className="row-4"
//               style={{ height: 60 }}
//             ></td>
//           ))}
//         </tr>
//         <tr>
//           <td>
//             <img src={screwImg} style={{ height: 60 }} />
//           </td>

//           {Array.from({ length: 6 }).map((_, index) => (
//             <td
//               key={index}
//               id={index}
//               className="row-5"
//               style={{ height: 60 }}
//             ></td>
//           ))}
//         </tr>
//         <tr>
//           <td>
//             <img src={screwImg} style={{ height: 60 }} />
//           </td>

//           {Array.from({ length: 6 }).map((_, index) => (
//             <td
//               key={index}
//               id={index}
//               className="row-6"
//               style={{ height: 60 }}
//             ></td>
//           ))}
//         </tr>
//       </tbody>
//     </Table>
//   );
// };

// export default Grid;

/************************ ********************/

// return (
//   <Container className="grid" ref={paintingGrid} onClick={handleClick}>
//     <Row className="top-images">
//       <div>
//         <img src={screwImg} alt="screw" style={{ height: "7vh" }} />
//       </div>
//       <div>
//         <img src={screwImg} alt="screw" style={{ height: "7vh" }} />
//       </div>
//       <div>
//         <img src={screwImg} alt="screw" style={{ height: "7vh" }} />
//       </div>
//       <div>
//         <img src={screwImg} alt="screw" style={{ height: "7vh" }} />
//       </div>
//       <div>
//         <img src={screwImg} alt="screw" style={{ height: "7vh" }} />
//       </div>
//       <div>
//         <img src={screwImg} alt="screw" style={{ height: "7vh" }} />
//       </div>
//     </Row>
//     <Row>
//       <img
//         src={screwImg}
//         alt="screw"
//         style={{ height: "7vh", width: "5vw" }}
//       />
//       <Col id="01">
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col id="02">
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col id="03">
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col id="04">
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col id="05">
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col id="06">
//         <input type="hidden" value="0"></input>
//       </Col>
//     </Row>
//     <Row>
//       <img
//         src={screwImg}
//         alt="screw"
//         style={{ height: "7vh", width: "5vw" }}
//       />
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//     </Row>
//     <Row>
//       <img
//         src={screwImg}
//         alt="screw"
//         style={{ height: "7vh", width: "5vw" }}
//       />
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//     </Row>
//     <Row>
//       <img
//         src={screwImg}
//         alt="screw"
//         style={{ height: "7vh", width: "5vw" }}
//       />
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//     </Row>
//     <Row>
//       <img
//         src={screwImg}
//         alt="screw"
//         style={{ height: "7vh", width: "5vw" }}
//       />
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//       <Col>
//         <input type="hidden" value="0"></input>
//       </Col>
//     </Row>
//   </Container>
// );
// };
