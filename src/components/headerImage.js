import React from "react";
import "../css/headerImage.css";

function App(props) {
  return (
    <div className=".container-fluid header-image">
      <div className="outer-spacing">
        <div className="header-title-outer box">
          <strong>
            <h5 className="header-title">{props.name}</h5>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default App;
