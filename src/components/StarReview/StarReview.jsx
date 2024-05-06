// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { useState } from "react";

// const StarReview = () => {
//   const [color, setColor] = React.useState("");

//   const mouseHover = () => {
//     setColor("text-yellow-500");
//   };

//   const starList = [1, 2, 3, 4, 5];
//   const starRender = starList.map((star) => (
//     <FaStar
//       key={`star-${star}`}
//       size={50}
//       onMouseOverCapture={mouseHover} // Corrected here
//       id={`star-${star}`}
//       className={color}
//     />
//   ));

//   return <div className="flex items-center justify-center">{starRender}</div>;
// };

// export default StarReview;

import React from "react";
import { FaStar } from "react-icons/fa";

const StarReview = () => {
  const [hoveredStar, setHoveredStar] = React.useState(null);

  const mouseHover = (starId) => {
    setHoveredStar(starId);
  };

  const starList = [1, 2, 3, 4, 5];
  const starRender = starList.map((star) => (
    <FaStar
      key={`star-${star}`}
      size={50}
      onMouseEnter={() => mouseHover(star)}
      onMouseLeave={() => setHoveredStar(null)}
      className={
        hoveredStar && `text-${star <= hoveredStar ? "yellow" : "gray"}-500`
      }
    />
  ));

  return <div className="flex items-center justify-center">{starRender}</div>;
};

export default StarReview;
