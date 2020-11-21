import React from "react";

import image1 from "../images/alumini/alumini-engage-sm.jpg";
import image2 from "../images/events/cricket-md.jpg";
import image3 from "../images/events/msit-voice.jpg";
import "../css/cards.css";

function App() {
  return (
    <div className="row cardsPadding">
      <div className="col-md-4 singleCard">
        <div className="card">
          <img className="card-img-top" src={image1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="title-text">Alumni Engage</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-success">
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 singleCard">
        <div className="card">
          <img className="card-img-top" src={image3} alt="Card image cap" />
          <div className="card-body">
            <h5 className="title-text">MSIT Voice</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-outline-success">
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 singleCard">
        <div className="card">
          <img className="card-img-top" src={image2} alt="Card image cap" />
          <div className="card-body">
            <h5 className="title-text">MSIT Tournaments</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-outline-success">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
