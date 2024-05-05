import React from "react";
import data from "./data";
import { useState } from "react";

const Accordion = () => {
  const singleAccordion = (id) => {
    console.log("clicked", id);
  };

  return (
    <div className="wrapper">
      <div className="accordion mx-auto ">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              className="accordian-item  bg-blue-500"
              onClick={singleAccordion(item.id)}
              key={item.id}
            >
              <div className="title">{item.title}</div>
              <div className="content">{item.content}</div>
              <span className="icon">+</span>
            </div>
          ))
        ) : (
          <div> No element found...</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
