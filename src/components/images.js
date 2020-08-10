import React from "react";
import "../styles/grid.css";

import you from "../images/you.png";
import others from "../images/others.png";
import aware from "../images/aware.png";
import manage from "../images/manage.png";
import develop from "../images/develop.png";
import awarei from "../images/awarei.png";
import managei from "../images/managei.png";
import developi from "../images/developi.png";
import paint from "../images/paint-palette.png";
import pencil from "../images/pencil-ruler.png";
import link from "../images/link.png";
import shield from "../images/shield-cross.png";
import cog from "../images/cog.png";

export const topRow = [];

topRow[0] = {
  image01: new Image(),
  src: you,
  imageCaption: "Your personal development",
  description: "How well you feel you help yourself",
  className: "images",
  id: "self-top",
};
topRow[1] = {
  image02: new Image(),
  src: others,
  imageCaption: "Others personal development",
  description: "How well you feel you help others",
  className: "images",
  id: "others-top",
};

export const secondRow = [];
secondRow[0] = {
  image01: new Image(),
  src: aware,
  imageCaption: "Others personal development",
  description: "Test1",
  id: "aware",
};
secondRow[1] = {
  image02: new Image(),
  src: manage,
  imageCaption: "Others personal development",
  description: "Test2",
  id: "manage",
};
secondRow[2] = {
  image03: new Image(),
  src: develop,
  imageCaption: "Others personal development",
  description: "Test3",
  id: "develop",
};
secondRow[3] = {
  image04: new Image(),
  src: awarei,
  imageCaption: "Others personal development",
  description: "How well you feel you help others",
  id: "awarei",
};
secondRow[4] = {
  image05: new Image(),
  src: managei,
  imageCaption: "Others personal development",
  description: "How well you feel you help others",
  id: "managei",
};
secondRow[5] = {
  image06: new Image(),
  src: developi,
  imageCaption: "Others personal development",
  description: "How well you feel you help others",
  id: "developi",
};

export const sideColumn = [];
sideColumn[0] = {
  image01: new Image(),
  src: paint,
  imageCaption: "Others personal development",
  description: "How well you feel you help others",
  id: "paint",
};
sideColumn[1] = {
  image01: new Image(),
  src: pencil,
  imageCaption: "Others personal development",
  description: "How well you feel you help others",
  id: "pencil",
};
sideColumn[2] = {
  image01: new Image(),
  src: link,
  imageCaption: "Others personal development",
  description: "How well you feel you help others",
  id: "link",
};
sideColumn[3] = {
  image01: new Image(),
  src: shield,
  imageCaption: "Others personal development",
  description: "How well you feel you help others",
  id: "shield",
};
sideColumn[4] = {
  image01: new Image(),
  src: cog,
  imageCaption: "Others personal development",
  description: "How well you feel you help others",
  id: "cog",
};

export default {
  topRow,
  secondRow,
  sideColumn,
};
