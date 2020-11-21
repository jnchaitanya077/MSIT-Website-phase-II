import React, { Component } from "react";
import "../css/images.css";

class App extends Component {
  //componentDidMount and componentWillUnmount are used to disable scrolling when the modal is open
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }
  render() {
    return (
      <div className="popupParent">
        <img
          src={this.props.popImageUrl}
          style={{
            width: "50%",
            height: "auto",
            marginTop: "160px",
            maxHeight: "80%",
          }}
          onClick={this.props.closePopup}
        />
        <p
          style={{
            color: "white",
            fontWeight: "lighter",
            marginLeft: "30%",
            fontSize: "80%",
          }}
        >
          * Click on the image to exit
        </p>
      </div>
    );
  }
}
export default App;
