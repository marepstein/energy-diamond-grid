import React, { useState } from "react";

import ImageModal from "./modal";

const Description = ({ e }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img
        src={e.src}
        className="images"
        onClick={handleShow}
        id={e.id}
        alt={e.description}
        title={e.imageCaption}
      ></img>

      <ImageModal
        show={show}
        onHide={handleClose}
        title={e.imageCaption}
        description={e.description}
      />
    </>
  );
};

export default Description;
