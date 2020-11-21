import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App(props) {
  return (
    <div
      className="card-column col-lg-3 col-md-6"
      style={{ padding: "0px", marginTop: 1, marginBottom: 10 }}
    >
      <div className="card" style={{ marginLeft: 0 }}>
        <img
          src={props.image}
          className="card-img-top rounded-circle mt-4 "
          alt={props.name}
        />
        <div className="card-body main">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle  text-muted">{props.position}</h6>
          <FontAwesomeIcon icon={faEnvelope} />
          <p className="card-text">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
