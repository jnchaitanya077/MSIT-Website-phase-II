import React from "react";

function LearningCenters(props) {
  return (
    <div
      className="col shadows-courses  p-4 mb-3"
      style={{ height: "auto", paddingBottom: "0" }}
    >
      <h3 className="title-text" id="section1">
        {props.university}
      </h3>
      <p className="general-text">
        {props.body}
        
      </p>
      <div className="" style={{ height: "50px", padding: "1%" }}>
        <a
          href={props.fullLink}
          target="_blank"
          className="links"
          style={{
            //   color: "rgb(6, 44, 59)",

            fontSize: "larger",
          }}
        >
          Know More About {props.university}
        </a>
      </div>
    </div>
  );
}

export default LearningCenters;
