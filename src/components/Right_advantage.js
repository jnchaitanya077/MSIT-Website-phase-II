import React from "react";
import "../css/staff.css";
import ReadMoreAndLess from "react-read-more-less";

function App(props) {
  return (
    <div className="row main-body-adv" id={props.id}>
      <div className="col-lg-8 order-2 order-md-2 order-lg-1 ">
        <h2 className="Right-title">
          <strong>
            {props.name}
            <span> {props.qualification}</span>
          </strong>
        </h2>
        <h6 className="sub-title right">{props.subtitle}</h6>
        <blockquote className="sub-para general-text">
          <ReadMoreAndLess
            ref={props.ReadMore}
            className="read-more-content"
            charLimit={456}
            readMoreText="Read more"
            readLessText="Read less"
          >
            {props.body}
          </ReadMoreAndLess>
          {/* <Collapsible
            trigger="See More"
            className="test"
            style={{ display: "inline", color: "red" }}
          >
            {props.sub}
          </Collapsible> */}
        </blockquote>
      </div>
      <div className="col-lg-3 order-1 order-md-1 order-lg-2 ml-4 Head-img">
        <img src={props.image} className="box  img-fluid" alt="photo" />
      </div>
    </div>
  );
}

export default App;
